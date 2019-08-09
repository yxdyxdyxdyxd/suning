class Guide {
    constructor(data) {
        this.data = data
    }
    init() {
        this.createGuide();
        this.createFoot();
        this.removeStyle();
    }
    //创建标签
    createGuide() {
        let html = `  <div class="guide">
        <div class="content">
            <div class="head">
               ${this.data.head.map((ele)=>{
                   return ` <dl>
                   <dt><img src="${ele.src}" alt=""></dt>
                   <dd>
                       <h5>${ele.title}</h5>
                       <p>${ele.text}</p>
                   </dd>
               </dl>`
               }).join("")}
            </div>
            <div class="foot">
               ${this.data.list.map((ele)=>{
                   return ` <dl>
                   <dt>${ele.title}</dt>
                   ${ele.text.map((item)=>{
                       return `<dd>${item}</dd>`
                   }).join("")}
               </dl>`
               }).join("")}
            </div>
            <div class="fot-right">
                <p>${this.data.righttit}</p>
                <span>${this.data.righttxt}</span>
            </div>
        </div>
    </div>`

        $("#guide").append(html);
    }
    //创建底部
    createFoot() {
        let html = ` <div class="footer">
        <div class="content">
         ${this.data.footlist.map((ele)=>{
             return `<p class="list">${ele.map((item)=>{
                 return `<a href="">${item}</a><span>|</span>`
             }).join("")}</p>`
         }).join("")}
           ${this.data.footcopy.map((ele)=>{
               return ` <p class="copy">${ele.map((item)=>{
                   return `<a href="">${item}</a> <span>|</span>`
               }).join("")}</p>`
           }).join("")}
            <div class="logo">${this.data.footlogo.map((ele)=>{
                return `<img src="${ele}" alt="">`
            }).join("")}</div>
        </div>
    </div>`
        $("#guide").append(html);
    }
    //删除一些样式
    removeStyle() {
        $(".footer").find(".list").each((i, ele) => {
            $(ele).find("span").last().remove();
        })
        $(".footer").find(".copy").each((i, ele) => {
            $(ele).find("span").last().remove();
        })
    }
}

// let guideobj = {
//     head: [{
//         src: "https://image.suning.cn/uimg/cms/img/149386338830969041.jpg",
//         title: "正品保障",
//         text: "正品保障、提供发票"
//     }, {
//         src: "https://image.suning.cn/uimg/cms/img/149386339441846551.jpg",
//         title: "急速物流",
//         text: "如约送货、送货入户"
//     }, {
//         src: "https://image.suning.cn/uimg/cms/img/149386340040069121.jpg",
//         title: "售后无忧",
//         text: "30天包退、365天包换"
//     }, {
//         src: "https://image.suning.cn/uimg/cms/img/149386340760421563.jpg",
//         title: "特色服务",
//         text: "私人定制家电套餐"
//     }, {
//         src: "https://image.suning.cn/uimg/cms/img/149386341371637387.jpg",
//         title: "帮助中心",
//         text: "您的购物指南"
//     }],
//     list: [{
//         title: "购物指南",
//         text: ["导购演示", "免费注册", "会员等级", "常见问题", "品牌大全"]
//     }, {
//         title: "支付方式",
//         text: ["苏宁支付", "网银支付", "快捷支付", "分期付款", "货到付款", "任性付支付"]
//     }, {
//         title: "物流配送",
//         text: ["免运费政策", "物流配送服务", "签收验货", "物流查询"]
//     }, {
//         title: "售后服务",
//         text: ["退换货政策", "贵就赔", "维修/安装", "订单修改", "退换货申请", "我的发票"]
//     }, {
//         title: "商家服务",
//         text: ["合作招商", "培训中心", "广告服务", "商家帮助", "服务市场", "规则中心"]
//     }],
//     righttit: "身边苏宁",
//     righttxt: "全国300多个城市，上万个门店和服务终端期待您的光临，为您提供贴心的服务！",
//     footlist: [
//         [" 苏宁互联", "苏宁金融", "苏宁支付", "PP视频", "红孩子", "苏宁物流", "手机苏宁 ", "零售云", "苏宁云", "知识产权举报", "投资者关系"],
//         ["联系我们", "诚聘英才", "合作招商", "广告平台", "苏宁联盟", "苏宁招标", "友情链接", "隐私政策", "用户体验提升计划", "股东会员认证"]
//     ],
//     footcopy: [
//         ["Copyright© 2002-2019，苏宁易购集团股份有限公司版权所有", "苏公网安备 32010202010078号", "苏ICP备10207551号-4"],
//         ["合字B2-20180025", "合字A1.B1.B2-20180017", "出版物经营许可证新出发苏批字第A-243号", "（苏）-非经营性-2016-0005", "经营证照"],
//         ["经营证照", "医疗器械网络交易服务第三方平台备案凭证-（苏）网械平台备字（2018）第00052号", "网络文化经营许可证：苏网文〔2018〕10580-203号"],
//         ["本网站直接或间接向消费者推销商品或者服务的商业宣传均属于“广告”（包装及参数、售后保障等商品信息除外）"]

//     ],
//     footlogo: ["https://res.suning.cn/public/v3/images/wxrz.png", "https://res.suning.cn/public/v3/images/chengxin.png", "https://res.suning.cn/public/v3/images/unicom.png", "https://res.suning.cn/public/v3/images/dianxin.jpg", "https://res.suning.cn/public/v3/images/dianzi.png?v=02"]


// }
// console.log(JSON.stringify(guideobj))
// let guide = new Guide(guideobj)
// guide.init();

$.getJSON("../json/guide.json", (json) => (new Guide(json)).init())