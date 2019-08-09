class List {
    constructor(data) {
        this.data = data
    }
    init() {
        this.removeEle();
        this.createList();
        //详情跳转
        this.details();
    }
    //删除一些模块
    removeEle() {
        $(".head").remove();
        $(".banner").remove();
        $(".nav-box").eq(1).addClass("nav-box-of")
        $(".nav-box-head").hover(function () {
            $(".nav-box").eq(1).toggleClass("nav-box-on")

        })
        $(".nav-box").eq(1).hover(function () {
            $(".nav-box").eq(1).toggleClass("nav-box-on")
        })
    }
    //创建楼层
    createList() {
        $(".phonelist").find("ul").find("li").remove()
        let html = `${this.data.map((ele)=>{
          
            return `  <li>
            <div class="bigimg"><img src="${ele.bigsrc}" alt="" title="麒麟810芯片"></div>
            <dl class="smallimg">
               ${JSON.parse(ele.smallsrc).map((item)=>{
                   return ` <dd><img src="${item}" alt=""></dd>`
               }).join("")}

            </dl>
            <div class="info">
        <p class="price"><i>￥</i>${ele.price}<i>.00</i></p>
                <p class="title">${ele.title}
                </p>
                <p class="para">${ele.info}</p>
                <div class="store"><span>苏宁自营</span></div>
                <div class="label">
                   ${JSON.parse(ele.label).map((item)=>{
                       return `<span>${item}</span>`
                   }).join("")}
                </div>
                <div class="car">
                    <span class="db"><i class="iconfont icon-icon--copy"></i>对比</span>
                    <span class="gz"><i class="iconfont icon-menpiao"></i>关注</span>
                    <span class="btcar"><i class="iconfont icon-diandongche"></i>加入购物车</span>
                </div>
            </div>

        </li>`
        }).join("")}`
        $(".phonelist").find("ul").append(html);

    }
    details() {
        var arr = [];
        for (var i = 0; i < this.data.length; i++) {
            arr.push(this.data[i])
        }
        let self = this;
        $(".phonelist").on("click", "li", function () {
            var queryStr = self.obj2QueryString(arr[$(this).index()]);
            console.log(queryStr)

            window.location.href = `http://127.0.0.1/code/suning/suning/yxd/html/detail.html?${queryStr}`
        })
    }
    obj2QueryString(o) {
        var queryString = "";
        for (var key in o) {
            queryString = queryString + "&" + `${key}=${o[key]}`;
        }
        return queryString.slice(1)
    }

}

/* 请求页码 */
$.ajax({
    type: "get",
    url: "../serve/getpage.php",
    dataType: "json",
    success: function (response) {
        if (response.status == "error") {
            alert("网络繁忙，请检查网络连接");
        } else {
            // console.log("count", response.data.count);
            // 创建3个标签显示在页面中
            $(".page").empty();
            for (var i = 0; i < response.data.count; i++) {
                $(".pager").append(`<a href="javascript:;">${i + 1}</a>`);
            }
            $(".pager").find("a").first().addClass("a-cur");
        }
    }
});


let getList = (page, type) => {
    $.ajax({
        type: "post",
        url: "../serve/screen.php",
        data: `page=${page}&type=${type}`,
        dataType: "json",
        success: function (response) {
            let list = new List(response);
            list.init()



        }
    });
}
var orderType = ["default", "priceA", "priceB"];
var type = "default";
getList(0, type);


$(".pager").on("click", "a", function () {

    // console.log($(this).index());
    /* 设置当前标签的选中状态 */
    getList($(this).index(), type);
    $(this).addClass("a-cur").siblings().removeClass("a-cur");
})

/* 点击排序 */
$(".sort span").click(function () {

    type = orderType[$(this).index()];
    /* 设置当前标签的选中状态 */

    getList(0, type);
    $(".pager").children("a").eq(0).addClass("a-cur").siblings().removeClass("a-cur");
})