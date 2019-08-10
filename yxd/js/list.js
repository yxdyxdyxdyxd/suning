class List {
    constructor(data) {
        this.data = data
    }
    init() {
        this.removeEle();
        this.createList();
        //详情跳转
        this.details();
        //购物车功能
        // this.addEvEntCar();
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
        // $(".phonelist").find("ul").find("li").remove()
        let html = `${this.data.map((ele,i)=>{
          
            return `  <li data-index=${i}>
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
        $(".phonelist").find("ul").html(html);
        // console.log(this.data)
    }
    details() {
        var arr = [];
        for (var i = 0; i < this.data.length; i++) {
            arr.push(this.data[i])
        }
        let self = this;
        $(".phonelist").on("click", ".bigimg", function () {
            // console.log($(this).index());
            var queryStr = self.obj2QueryString(arr[$(this).parent("li").data("index")]);
            // console.log(queryStr)

            window.location.href = `http://127.0.0.1/code/suning/suning/yxd/html/detail2.html?${queryStr}`
        })
    }
    obj2QueryString(o) {
        var queryString = "";
        for (var key in o) {
            queryString = queryString + "&" + `${key}=${o[key]}`;
        }
        return queryString.slice(1)
    }
    //添加购物车功能
    addEvEntCar() {
        $(".phonelist").find("ul").on("click", ".btcar", function () {
            var index = $(this).parent().parent().parent().data("index")
            console.log(itemData)
            // $.ajax({
            //     type: "get",
            //     url: "url",
            //     data: `id=${itemData[index].id}&price=${ itemData[index].price}`,
            //     dataType: "dataType",
            //     success: function (response) {

            //     }
            // });
        })
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

let itemData;
let getList = (page, type) => {
    $.ajax({
        type: "post",
        url: "../serve/screen.php",
        data: `page=${page}&type=${type}`,
        dataType: "json",
        success: function (response) {
            itemData = response
            let list = new List(response);
            list.init()



        }
    });
}
var orderType = ["default", "priceA", "priceB"];
var type = "default";
getList(0, type);


$(".pager").on("click", "a", function () {

    // console.log($(this).index() - 1);
    /* 设置当前标签的选中状态 */
    getList($(this).index() - 1, type);
    $(this).addClass("a-cur").siblings().removeClass("a-cur");
})

/* 点击排序 */
$(".sort span").click(function () {

    type = orderType[$(this).index()];
    /* 设置当前标签的选中状态 */

    getList(0, type);
    $(".pager").children("a").eq(0).addClass("a-cur").siblings().removeClass("a-cur");
})

//购物车功能
$(".phonelist").find("ul").on("click", ".btcar", function () {
    var index = $(this).parent().parent().parent().data("index")

    $.ajax({
        type: "get",
        data: `id=${itemData[index].gid}&price=${itemData[index].price}`,
        url: "../serve/addCar.php",
        dataType: "json",
        success: function (response) {
            if (response.status == "success") {

                console.log(response);
                $(".show-car").find(".num").html(response.data.count)
                $(".toorbal-right").find(".order").eq(4).find("span").html(`购物车 ${response.data.count}`)


            }
        }
    });
})
//点击购物车
$(".js").click(function () {

    window.location.href = `http://127.0.0.1/code/suning/suning/yxd/html/car.html`
})

//一进入就显示购物车里的数量
$.ajax({
    type: "get",
    url: "../serve/chax.php",
    data: "data",

    success: function (num) {

        $(".show-car").find(".num").html(num)
        $(".toorbal-right").find(".order").eq(4).find("span").html(`购物车 ${num}`)
        $(".top-info").find("em").eq(0).html(num);
    }
});

//点击购物车出现内容
$(".show-car").click(function () {
    $(".car-box").toggleClass("car-box-cur");
    getCarInfo();
})

function getCarInfo() {
    $.ajax({
        type: "get",
        url: "../serve/getCardata.php",

        dataType: "json",
        success: function (data) {
            targetData = data;
            let res = data.map((ele) => {
                return `  <div class="shop-list" data-index=${ele.id}>
                <div class="car-item">
                    <div class="close">
                        <input type="checkbox" class="ck" ${ele.isActive==1?"checked":""}>
                    </div>
                    <div class="car-img">
                        <a href=""><img src="${ele.bigsrc}" alt=""></a>
                    </div>
                    <div class="msg">
                        <p class="text">${ele.title}</p>
                        <div class="shuzi clearfix">
                            <span class="price">￥<em>${ele.total}</em></span>
                            <span class="num">${ele.num}</span>
                        </div>
                        <span class="del">x</span>
                    </div>
                </div>
            </div>`
            }).join("")
            $(".car-list").html(res);
            getTotalPrice(data);
        }
    });
}
//计算总价
function getTotalPrice(data) {
    var res = 0;
    data.forEach((ele) => {
        if (ele.isActive == 1) {
            res += ele.total * 1;
        }
    })
    $(".total").html(res.toFixed(2))
}
//数量
$(".car-list").on("click", ".del", function () {
    $.ajax({
        type: "get",
        url: "../serve/chax.php",
        data: "data",

        success: function (num) {
            $(".show-car").find(".num").html(num - 1)
            $(".toorbal-right").find(".order").eq(4).find("span").html(`购物车 ${num-1}`)
            $(".top-info").find("em").eq(0).html(num - 1);
        }
    });
})
//点击删除商品
$(".car-list").on("click", ".del", function () {
    let id = $(this).parents(".shop-list").data("index")
    $.ajax({
        type: "get",
        url: "../serve/delCar.php",
        data: `id=${id}`,
        success: function (response) {
            getCarInfo();
        }
    });


})

//全选框
$(".all").click(function () {
    $(".ck").prop("checked", $(this).is(":checked"));
    var isActive = $(this).is(":checked");
    $.ajax({
        type: "get",
        url: "../serve/bigActive.php",
        data: `isActive=${isActive}`,

        success: function (response) {
            getCarInfo()
            where()
        }
    });
})
//商品选择框
$(".car-list").on("click", ".ck", function () {
    var id = $(this).parents(".shop-list").data("index");
    var isActive = $(this).is(":checked");
    $.ajax({
        type: "get",
        url: "../serve/updataActive.php",
        data: `id=${id}&isActive=${isActive}`,

        success: function (response) {

            getCarInfo()
            where()
        }
    });
})
//检查有多少商品被勾选中
function where() {
    $.ajax({
        type: "get",
        url: "../serve/where.php",


        success: function (num) {
            $(".top-info").find("em").eq(1).html(num.length)
            $(".toll").find("em").eq(0).html(num.length)
        }
    });
}
where()