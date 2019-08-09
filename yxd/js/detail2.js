class Details {
    constructor(data) {
        this.data = data
    }
    init() {
        this.receive();
        this.createEle();
        this.addEvent();
        this.addEventFdj();
    }
    receive() {

        //decodeURIComponent是解码
        let queryString = decodeURIComponent(window.location.search.slice(1));
        let arr = queryString.split("&");

        let queryObj = {};
        for (let i = 0; i < arr.length; i++) {
            let tempArr = arr[i].split("=")

            queryObj[tempArr[0]] = tempArr[1];
        }
        // console.log(queryObj)
        this.queryObj = queryObj
    }
    createEle() {
        let html = ` <div class="head"> </div>
        <div class="nav">
            <ul class="clearfix">
                ${this.data.nav.map((ele=>{
                    return `<li>${ele}</li>`
                })).join("")}
    
            </ul>
        </div>
        <div class="shop-detail">
            <div class="cont clearfix">
                <div class="shop-right clearfix">
                    <div class="show-img">
                  
                        <div class="big-img"><img  src="${this.queryObj.bigsrc}" alt="">
                        <div class="xiangqing"></div>
                        <div id="fd"><img  src="${this.queryObj.bigsrc}" alt=""></div>
                        </div>
                       
                        <div class="small-img">
                            <ul class="clearfix">
                         
                            ${JSON.parse(this.queryObj.smallsrc).map((ele)=>{
                                return `   <li><img src="${ele}" alt=""></li>`
                            }).join("")}
                            
                            </ul>
                        </div>
                    </div>
                    <div class="shop-text">
                        <h2>${this.queryObj.title}</h2>
                        <div class="shop-price">
                            <div class="del-price">价格：<span class="del-num"><del> </del></span></div>
                            <div class="del-price">
                                促销价：<span class="now-num">${ this.queryObj.price}</span>
                                <span class="price-right"><span class="appraise">评价：<i class="num-color">${ this.queryObj.price}</i></span>
                                    <span class="sale">累计销量：<i class="num-color">${ this.queryObj.price}</i></span></span>
                            </div>
                            <div class="del-price">店铺优惠：<span>·满2件立减2元</span><span class="more-sale">更多优惠</span></div>
                        </div>
                        <div class="service">客服：<span class="call-service"></span></div>
                        <div class="box">
                            <div class="col-color ">
                                <span>颜色</span>
                                <ul class="select">
                                ${JSON.parse(this.queryObj.smallsrc).map((ele)=>{
                                    return `   <li><img src="${ele}" alt=""></li>`
                                }).join("")}
                               
                                </ul>
                            </div>
                            <div class="col-size">
                                <span>套餐</span>
                                <ul>
                                    <li>裸机</li>
                                    <li>豪华</li>
                                    <li>旗舰</li>
                                </ul>
                            </div>
                            <div class="col-num"><span class="col-num-text">数量</span>
                                <div class="col-btn"><span>-</span><input type="text" ><span>+</span></div>
                            </div>
                        </div>
                        <div class="buy ">
                            <span class="now-buy">立即购买</span>
                            <span class="car-buy">加入购物车</span>
                        </div>
                    </div>
                </div>
                <div class="shop-left">
                    <p class="title"><s></s><span>热卖专区</span></p>
                    <ul class="list-box" id="list-box">
            

                       ${JSON.parse(this.queryObj.smallsrc).map((ele)=>{
                        return `   <li><img src="${ele}" alt=""><span>￥1998</span></li>`
                    }).join("")}
                      
                    </ul>
                </div>
            </div>
        </div>`

        $("body").html(html);
    }
    addEvent() {
        //商品大图下的小图选择
        $(".small-img").children().children().mouseover(function () {
            let newimg = $(this).children().attr("src");
            $(".big-img").children().attr("src", newimg);

            $(this).css({
                "border-bottom": "2px solid red"
            }).siblings().css({
                "border-bottom": "none"
            })
        })
        //商品颜色选择
        $(".select").children().click(function () {
            $(this).css({
                "border": "1px solid #666"
            }).siblings().css({
                "border": "1px solid #ddd"
            })
            let newimg = $(this).children().attr("src");
            $(".big-img").children().attr("src", newimg);
        })
        //数量点击
        $("input[type='text']").val(1)
        let num = 1;
        $("input[type='text']")[0].oninput = function () {
            num = $("input[type='text']").val()
        }


        //减
        $(".col-btn").children("span").eq(0).click(function () {

            // num--;
            if (num == 1 || num.length == 0) {
                $("input[type='text']").val(1)
            } else {
                num--;
                $("input[type='text']").val(num)
            }
        })
        //加
        $(".col-btn").children("span").eq(1).click(function () {
            num++;
            $("input[type='text']").val(num)
        })

    }
    //放大镜
    addEventFdj() {
        $(".big-img").mousemove(function (e) {
            var left = e.clientX;
            var top = e.clientY;
            // console.log(left, top)
            $("#fd").find("img").css({
                "left": left * (-3) + 'px',
                "top": top * (-3) + 'px'
            })
            $(".xiangqing").css({
                "left": top + 'px',
                "top": top + 'px'
            })
        })
    }


}

let o = {
    nav: ["首页", "全部商品", "nova 5 pro", "P30", "nova 5iPro", "Mate 20", "nova4", "P20"]
}
let d = new Details(o);
d.init();