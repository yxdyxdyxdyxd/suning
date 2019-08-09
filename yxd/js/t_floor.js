class Tfloor {
    constructor(data) {
        this.data = data;
    }
    init() {
        this.createTf()
    }
    //创建楼层
    createTf() {
        let html = `<div class="t-floor floor">
        <div class="title">
            <div class="title-name">
                <span class="border"></span>
                <p class="name">${this.data.title}</p>
                <div class="code">
                    <img src="../images/smallcode.png" alt="" class="code-img">
                    <div class="code-block">
                        <span></span>
                        <img src="../images/codesao.png" alt="">
                        <p>手机苏宁扫一扫</p>
                    </div>
                </div>
            </div>
            <div class="navlist">
              ${this.data.list.map((ele)=>{
                  return `  <a href="">${ele}</a>`
              }).join("")}
            </div>
        </div>
        <div class="content">
            <div class="left-img">
                <img src="${this.data.leftimg}" alt="">
                <div class="cover"></div>
                <p class="img-name">${this.data.ltit}</p>
                <p class="img-des">${this.data.ltext}</p>
            </div>
            <ul class="img-list clearfix">
                ${this.data.leftlist.map((ele)=>{
                    return `<li>
                    <p class="img-name">${ele.title}</p>
                    <p class="img-desc">${ele.text}</p>
                    <a href="" class="img-wrap"><img src="${ele.src}" alt=""></a>
                </li>`
                }).join("")}

            </ul>
            <a href="" class="right-img">
                <p class="img-name">${this.data.rtit}</p>
                <p class="img-desc">${this.data.rtext}</p>
                <img src="${this.data.rightimg}" alt="">
            </a>
            <ul class="img-list clearfix">
               ${this.data.rightlist.map((ele)=>{
                   return ` <li>
                   <p class="img-name">${ele.title}</p>
                   <p class="img-desc">${ele.text}</p>
                   <a href="" class="img-wrap"><img src="${ele.src}" alt=""></a>
               </li>`
               }).join("")}

            </ul>
        </div>
        <div class="logo-list">
            <ul>
                ${this.data.logo.map((ele)=>{
                    return `<li><img src="${ele}" alt=""></li>`
                }).join("")}
            </ul>
        </div>
    </div>`

        $("#toggle").append(html)
    }

}
// let tflobj = [{
//     title: "家用电器",
//     list: ["智能音影", "空调", "平板电视", "热水器", "冰箱洗衣机"],
//     leftimg: "https://image5.suning.cn/uimg/cms/img/156094301996769422.jpg",
//     ltit: "电器城频道",
//     ltext: "30天包退 365天包换",
//     leftlist: [{
//         title: "海信电视",
//         text: "爆款直降1000",
//         src: "https://image3.suning.cn/uimg/cms/img/154504827726832024.jpg"
//     }, {
//         title: "8.07美菱品牌日",
//         text: "压缩机十年免费包换",
//         src: "https://image5.suning.cn/uimg/cms/img/156473702488166154.jpg"
//     }, {
//         title: "美的空调品牌盛典",
//         text: "套购至高省1300",
//         src: "https://image1.suning.cn/uimg/cms/img/156500389426852751.jpg"
//     }, {
//         title: "苏宁精选特惠",
//         text: "内胆8年免费换新",
//         src: "https://image2.suning.cn/uimg/cms/img/156497407052857184.jpg"
//     }],
//     rightimg: "../images/jxbx.jpg",
//     rtit: "冰箱洗衣机",
//     rtext: "限时抢100元券",
//     rightlist: [{
//         title: "科龙空调8月钜惠",
//         text: "1.5匹低至1699元",
//         src: "https://image5.suning.cn/uimg/cms/img/156414363561428722.jpg"
//     }, {
//         title: "美的热水器",
//         text: "爆款六折抢",
//         src: "https://image1.suning.cn/uimg/cms/img/156169118720466331.png"
//     }, {
//         title: "松下限时聚惠",
//         text: "压缩机10年保修",
//         src: "https://image2.suning.cn/uimg/cms/img/156471333584189484.jpg"
//     }, {
//         title: "小米电视",
//         text: "爆款直降千元",
//         src: "https://image5.suning.cn/uimg/cms/img/156474386915343875.jpg"
//     }],
//     logo: ["https://image2.suning.cn/uimg/cms/img/153113034092949137.png", "https://image4.suning.cn/uimg/cms/img/153113038601823338.jpg", "https://image2.suning.cn/uimg/cms/img/153113041636822414.jpg", "https://image4.suning.cn/uimg/cms/img/156134798925920781.jpg", "https://image1.suning.cn/uimg/cms/img/153302881057225827.jpg", "https://image3.suning.cn/uimg/cms/img/153113051626317517.jpg", "https://image1.suning.cn/uimg/cms/img/154200812548514382.jpg", "https://image2.suning.cn/uimg/cms/img/155055797312070821.jpg", "https://image1.suning.cn/uimg/cms/img/154336829147606257.jpg", "https://image4.suning.cn/uimg/cms/img/154165899720542260.jpg", "https://image2.suning.cn/uimg/cms/img/153112788528967312.jpg", "https://image1.suning.cn/uimg/cms/img/153112790873961085.jpg"]
// }, {
//     title: "美味生活",
//     list: ["收纳", "生活用纸", "食用油", "白酒", "生鲜水果"],
//     leftimg: "https://image1.suning.cn/uimg/cms/img/156457638246100373.jpg",
//     ltit: "苏宁超市",
//     ltext: "部分2件8折",
//     leftlist: [{
//         title: "粮油干调",
//         text: "专区2件8折",
//         src: "https://image4.suning.cn/uimg/cms/img/156464120369476459.jpg"
//     }, {
//         title: "休闲零食",
//         text: "满299减200",
//         src: "https://image3.suning.cn/uimg/cms/img/156413984787464232.jpg"
//     }, {
//         title: "冲调茗茶",
//         text: "部分满2件8折",
//         src: "https://image4.suning.cn/uimg/cms/img/156073966849551682.png"
//     }, {
//         title: "中外名酒",
//         text: "部分2件8折",
//         src: "https://image4.suning.cn/uimg/cms/img/156084045767520935.jpg"
//     }],
//     rightimg: "https://image4.suning.cn/uimg/cms/img/156459021334038103.jpg",
//     rtit: "抢鲜派对",
//     rtext: "满188减30",
//     rightlist: [{
//         title: "医药健康",
//         text: "爆款直降",
//         src: "https://image2.suning.cn/uimg/cms/img/156498758724252339.jpg"
//     }, {
//         title: "萌宠囤货日",
//         text: "满199减110",
//         src: "https://image5.suning.cn/uimg/cms/img/156419121336511265.jpg"
//     }, {
//         title: "品质好奶",
//         text: "部分2件8折",
//         src: "https://image1.suning.cn/uimg/cms/img/156419129595721064.png"
//     }, {
//         title: "纸品清洁",
//         text: "专区2件5折",
//         src: "https://image4.suning.cn/uimg/cms/img/154442918240056142.jpg"
//     }],
//     logo: ["https://image4.suning.cn/uimg/cms/img/155185582646344031.jpg", "https://image3.suning.cn/uimg/cms/img/155185678911031835.jpg", "https://image5.suning.cn/uimg/cms/img/155185632880614738.jpg", "https://image1.suning.cn/uimg/cms/img/155185635788844957.jpg", "https://image5.suning.cn/uimg/cms/img/156137129251533255.jpg", "https://image3.suning.cn/uimg/cms/img/155185645381851283.jpg", "https://image3.suning.cn/uimg/cms/img/156276662645335545.jpg", "https://image1.suning.cn/uimg/cms/img/153129423029217785.jpg", "https://image5.suning.cn/uimg/cms/img/153129428456419621.jpg", "https://image1.suning.cn/uimg/cms/img/156162726730217713.jpg", "https://image3.suning.cn/uimg/cms/img/153604636815742577.jpg", "https://image1.suning.cn/uimg/cms/img/153129436350677309.jpg"]
// }]
// console.log(JSON.stringify(tflobj))