class Zb {
    constructor(data) {
        this.data = data
    }
    init() {
        this.creatZb()
        this.addEventZp()
        this.createThree()
    }
    //创建楼层
    creatZb() {
        let html = `<div class="enter-img">
        <div class="pindao-list">
            <ul>
               ${this.data.left.map((ele)=>{
                   return ` <li>
                   <img src="${ele.big}" alt="" class="bg">
                   <img src="${ele.small}" alt="" class="pro">
                   <div class="text-area">
                       <p class="title">${ele.title}</p>
                       <i class="line"></i>
                       <p class="desc">${ele.text}</p>
                   </div>
               </li>`
               }).join("")}
            </ul>
        </div>
        <div class="video-area">
            <div class="bigshow">
                <ul>
                    ${this.data.videobig.map((ele)=>{
                        return `<li>
                        <img src="${ele.src}" alt="">
                        <i class="zb"></i>
                        <i class="icon"></i>
                        <p class="title">${ele.text}</p>
                    </li>`
                    }).join("")}
                </ul>
            </div>
            <div class="smallshow">
                <ul>
                   ${this.data.videosamll.map((ele)=>{
                       return ` <li>
                       <img src="${ele.src}" alt="">
                       <div class="black-hover"></div>
                       <i class="icon"></i>
                       <p class="title">${ele.text}</p>
                   </li>`
                   }).join("")}
                </ul>
            </div>
        </div>
        <div class="pindao-list pindao-right">
            <ul>
                ${this.data.right.map((ele)=>{
                    return `<li>
                    <img src="${ele.big}" alt="" class="bg">
                    <img src="${ele.small}" alt="" class="pro">
                    <div class="text-area">
                        <p class="title">${ele.title}</p>
                        <i class="line"></i>
                        <p class="desc">${ele.text}</p>
                    </div>
                </li>`
                }).join("")}
            </ul>
        </div>
    </div>`

        $("body").append(html)
    }
    //给直播添加点击切换功能
    addEventZp() {
        $(".bigshow").find("li").eq(0).addClass("li-cur");
        $(".smallshow").find("li").hover(function () {
            $(".bigshow").find("li").eq($(this).index()).addClass("li-cur").siblings().removeClass("li-cur");
        })
    }
    //创建三张图片的楼层
    createThree() {
        let html = ` <div class="three-img clearfix">
        ${this.data.threeimg.map((ele)=>{
            return `<img src="${ele}" alt="">`
        }).join("")}
    </div>`
        $("body").append(html)
    }
}

let zbobj = {
    left: [{
        big: "https://image3.suning.cn/uimg/cms/img/156456104788168915.png",
        small: "https://image4.suning.cn/uimg/cms/img/156456104560829867.png",
        title: "苏宁极物",
        text: "限时14.9元抢日制和风负离子牙刷"
    }, {
        big: "https://image3.suning.cn/uimg/cms/img/156481658823085463.png",
        small: "https://image2.suning.cn/uimg/cms/img/156481658449235111.png",
        title: "Biu+优品",
        text: "智能语音助手 无线蓝牙耳机"
    }, {
        big: "https://image5.suning.cn/uimg/cms/img/156448923373319653.png",
        small: "https://image2.suning.cn/uimg/cms/img/156448923103104925.png",
        title: "苏宁国际",
        text: "超燃进口日 百万件爆款第2件半价"
    }, {
        big: "https://image4.suning.cn/uimg/cms/img/154901204021932267.png",
        small: "https://image5.suning.cn/uimg/cms/img/156471486658309702.png",
        title: "苏宁众筹",
        text: "一元赢好礼，小鹏G3智能SUV"
    }],
    videobig: [{
        src: "https://image1.suning.cn/uimg/cms/img/156505662968124661.jpg",
        text: "【超燃进口日】萌翻天的酒桌搭档快来get",
    }, {
        src: "https://image2.suning.cn/uimg/cms/img/156505673041405451.jpg",
        text: "【方太豪礼升级科沃斯扫地机】火速下单！",
    }, {
        src: "https://image2.suning.cn/uimg/cms/img/156505679933075695.jpg",
        text: "【超燃进口日】爆款酵素第2件0元",
    }],
    videosamll: [{
        src: "https://image3.suning.cn/uimg/cms/img/156505662645661162.jpg",
        text: "【超燃进口日】萌翻天的酒桌搭档快来get",
    }, {
        src: "https://image3.suning.cn/uimg/cms/img/156505672651358829.jpg",
        text: "【方太豪礼升级科沃斯扫地机】火速下单！",
    }, {
        src: "https://image5.suning.cn/uimg/cms/img/156505679590317368.jpg",
        text: "【超燃进口日】爆款酵素第2件0元",
    }],
    right: [{
        big: "https://image2.suning.cn/uimg/cms/img/156423300347589666.png",
        small: "https://image5.suning.cn/uimg/cms/img/156423300028734876.png",
        title: "中华特色馆",
        text: "淡水野生小鱼干"
    }, {
        big: "https://image3.suning.cn/uimg/cms/img/155929972601374438.png",
        small: "https://image3.suning.cn/uimg/cms/img/155969810516856437.png",
        title: "二手优品",
        text: "低价抢iPhone X"
    }],
    threeimg: ["https://image.suning.cn/uimg/aps/material/156499003531522127.jpg", "https://image3.suning.cn/uimg/cms/img/156500527315141457.jpg", "https://image.suning.cn/uimg/aps/material/156290122094416074.jpg"]

}

let zb = new Zb(zbobj)
zb.init()