class Head {
    constructor(data) {
        this.data = data;
    }
    init() {
        //头部广告
        // this.createAdvert();
        //头部广告开关
        this.addEventAdvert();
        //头部导航左部
        this.createNavLeft();
        //导航左部隐藏部分
        this.creatNav();
        //头部导航右部
        this.createNavRight();
        //LOGO部分
        this.createLogo();
        //登入跳转
        this.ClickTo();
    }
    createEle() {}
    //创建头部广告
    createAdvert() {
        let html = ` <div class="head">
            <div class="conter">
            <img src="../images/h1.png" alt="">
            </div>
            <span></span>
            </div>`
        $("#header").append(html)

    }
    //添加头部广告关闭事件
    addEventAdvert() {
        let btn = $(".head").children("span");



        btn.click(function () {
            $(".conter").children("img").toggleClass("active-img")
            $(this).toggleClass("activex")

        })




    }
    //创建导航左部份
    createNavLeft() {
        let html = this.data.left.title.map((ele) => {
            return ` <div class="toorbal-left"> <div class="website-nav">  <span>${ele}</span><em class="iconfont icon-arrow-down1
                "></em> </div> </div>`
        }).join("")

        //创建版心盒子
        let oConter = $(`<div class="conter clearfix"></div>`);
        //创建导航大盒子
        let oToorbal = $(` <div class="toorbal"></div>`)

        oConter.append(html);
        oToorbal.append(oConter);
        $("#header").append(oToorbal);
        this.oConter = oConter;
    }
    //网站导航隐藏部分
    creatNav() {
        let html = ` <div class="website-nav-list">
            ${this.data.left.nav.map((ele)=>{
                return ` <dl>
                <dt>${ele.navtit}</dt>
                <dd>
                   ${ele.navtxt.map((item)=>{
                       return `<p>${item}</p>`
                   }).join("")}
                    
                </dd>
            </dl>`
            }).join("")}
            </div>`
        //获取网站导航标签
        let owebnav = $(".website-nav")
        owebnav.eq(0).append(html);

        //商家入驻隐藏部分
        let res = `  <div class="busin website-nav-list">
             ${this.data.left.shopin.map((ele)=>{
                 return ` <p>${ele}</p>`
             }).join("")}
            </div>`
        owebnav.eq(1).append(res);

        //客服服务隐藏部分
        let res1 = `<div class="service website-nav-list">
            ${this.data.left.icq.map((ele)=>{
                return ` <p>${ele}</p>`
            }).join("")}
            </div>`
        owebnav.eq(2).append(res1);
        //给网站导航隐藏部分添加事件
        owebnav.hover(function () {
            $(this).toggleClass("website-nav-active")
        })
        let oI = $(`<i class="address "></i>`)
        owebnav.eq(3).prepend(oI);

    }
    //创建导航右部份
    createNavRight() {
        //请登入和注册
        let html = ` <div class="toorbal-right">
            <div class="order">
            ${this.data.right.enter.map((ele)=>{
                return `<a href="">${ele}</a>`
            }).join("")}          
             </div></div>`
        this.oConter.append(html);
        let oRight = $(".toorbal-right");
        //我的订单以及后部
        let res = ` ${this.data.right.other.map((ele)=>{
                return `<div class="order">
                <span>${ele}</span>
                <em class="iconfont icon-arrow-down1
                "></em>
                </div>`
            }).join("")}`
        oRight.append(res);
        //删除一些标签样式

        $(".order").eq(3).children("em").remove();
        $(".order").eq(5).children("em").remove();
        $(".order").eq(6).children("em").remove();

        //我的订单隐藏部分
        let res1 = ` <div class="order-box">
            ${this.data.right.myorder.map((ele)=>{
                return `  <p>${ele}</p>`
            }).join("")}
            </div>`
        $(".order").eq(1).append(res1)

        //我的易购隐藏部分
        let res2 = `  <div class="my-yigou order-box">
            <div class="my-yigou-h clearfix"><img src="../images/suni.jpg" alt=""><span>请登入</span></div>
            ${this.data.right.myyigou.map((ele)=>{
                return `<p>${ele}</p>`
            }).join("")}
            </div>`
        $(".order").eq(2).append(res2)

        ////手机苏宁隐藏部分
        let res3 = ` <div class="qrcode order-box">
               <ul>
               ${this.data.right.qrcode.map((ele)=>{
                   return `  <li><img src="${ele.qrimg}" alt="">
                   ${ele.qrtui.map((item)=>{
                       return ` <p>${item}</p>`
                   }).join("")}
                   </li>`
               }).join("")}
                </ul>
                </div>`
        $(".order").eq(7).append(res3);

        //购物车插入小车图片
        $(".order").eq(4).prepend($(` <i class="iconfont icon-diandongche"></i>`));


        //给右部隐藏部分添加事件
        $(".order").eq(1).hover(function () {
            $(this).toggleClass("order-active")
        })

        $(".order").eq(2).hover(function () {
            $(this).toggleClass("order-active")
        })

        $(".order").eq(7).hover(function () {
            $(this).toggleClass("order-active")
        })
    }

    //创建logo这部分
    createLogo() {
        let html = ` <div class="index-header">
            <div class="conter clearfix">
               ${this.data.gifscr.map((ele,i)=>{
                   return ` <a href="" class="logo"><img src="${ele}" alt=""></a>`
               }).join("")}
                <div class="index-search">
                    <div class="right-search">
                        <div class="in-search">
                            <input type="text" class="in-enter">
                            <input type="button" class="btn-search" value="搜索">
                            <div class="index-foot">${this.data.search.map((ele)=>{
                                return `<a href="">${ele}</a>`
                            }).join("")}</div>
                        </div>
                    </div>
                    <i class="iconfont icon-fangdajing"></i>
    
                </div>
            </div>
         </div>`


        $("#header").append(html);
        $(".logo").next("a").attr("class", "logo-gif")
        // console.log($(".logo").next())
    }
    //点击登入跳转
    ClickTo() {
        //跳转登入页面
        $(".toorbal").find(".toorbal-right").find(".order").eq(0).find("a").eq(0).click(function () {
            event.preventDefault();
            window.location.href = `http://127.0.0.1/code/suning/suning/yxd/html/enter.html`
        })
        //跳转注册页面
        $(".toorbal").find(".toorbal-right").find(".order").eq(0).find("a").eq(1).click(function () {
            event.preventDefault();
            window.location.href = `http://127.0.0.1/code/suning/suning/yxd/html/register.html`
        })
        //跳转购物车
        $(".toorbal").find(".toorbal-right").find(".order").eq(4).click(function () {
            event.preventDefault();
            window.location.href = `http://127.0.0.1/code/suning/suning/yxd/html/car.html`
        })

    }



}
// let arr = {
//     left: {
//         title: ["网站导航", "商家入驻", "客服服务", "广州"],
//         nav: [{
//             navtit: "特色购物",
//             navtxt: ["苏宁互联", "苏宁达人", "苏宁卡", "苏宁国际", "易回收", "二手优品", "领券中心", "香港苏宁", "苏宁Outlets", "节能超市", "导购指南"]
//         }, {
//             navtit: "主题频道",
//             navtxt: ["电器城", "苏宁超市", "手机", "运动馆", "图书", "红孩子母婴", "美妆个护", "电脑服装城", "智能生活", "家装馆", "苏宁汽车", "排行榜", "医药馆"]
//         }, {
//             navtit: "生活助手",
//             navtxt: ["零钱宝", "手机充值", "转账还款", "约服务", "水电煤", "保险", "机票", "门店查询", "酒店"]
//         }, {
//             navtit: "会员服务",
//             navtxt: ["会员联盟", "延长保修", "易付宝", "苏宁理财", "苏宁金融"]
//         }, {
//             navtit: "更多热点",
//             navtxt: ["PP视频", "合作招商", "苏宁联盟", "用户体验", "苏宁云", "苏宁足球", "苏宁公益"]
//         }],
//         shopin: ["合作招商", "服务市场", "金融中心", "培训中心", "易通天下", "规则中心", "规则众议院"],
//         icq: ["苏宁帮客", "帮助中心", "查找门店", "退换/维修", "意见反馈", "30天包退", "在线咨询"],

//     },
//     right: {
//         enter: ["请登入", "注册有礼"],
//         other: ["我的订单", "我的易购", "苏宁会员", "购物车 0", "易付宝", "企业采购", "手机苏宁"],
//         myorder: ["待支付", "待收货", "待评价", "修改订单"],
//         myyigou: ["我的二手", "我的关注", "我的金融", "苏宁会员", "我的任性付", "我的优惠券"],
//         qrcode: [{
//             qrimg: "../images/guike.png",
//             qrtui: ["关注苏宁推客公众号", "自购省钱·分享赚钱"]
//         }, {
//             qrimg: "../images/yiapp.png",
//             qrtui: ["扫一扫", "下载苏宁金融APP"]
//         }, {
//             qrimg: "../images/suseerver.jpg",
//             qrtui: ["扫一扫", "关注苏宁易购服务号"]
//         }]




//     },
//     search: ["变频空调", "小米65寸", "手机", "nova 5i pro", "万家乐油烟机", "冰箱", "电视", "笔记本"],
//     gifscr: ["../images/logo.png", "../images/logo2.gif"]
// }
$.getJSON("../json/header.json", (json) => (new Head(json)).init())

// let h = new Head(arr);
// h.init()