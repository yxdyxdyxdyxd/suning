$(function () {
    class Head {
        constructor() {}
        init() {
            this.createAdvert();
            this.addEventAdvert();
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
            $("body").append(html)
        }
        //添加头部广告关闭事件
        addEventAdvert() {
            let btn = $(".head").children("span");



            btn.click(function () {
                $(".conter").children("img").toggleClass("active-img")
                $(this).toggleClass("activex")

            })




        }

    }
    let h = new Head();
    h.init()

})
// 特色购物 苏宁互联 苏宁达人 苏宁卡 苏宁国际 易回收 二手优品 领券中心 香港苏宁 苏宁Outlets 节能超市 导购指南 "

// 主题频道 电器城 苏宁超市 手机 运动馆 图书 红孩子母婴 美妆个护 电脑服装城 智能生活 家装馆 苏宁汽车 排行榜 医药馆

// 生活助手 零钱宝 手机充值 转账还款 约服务 水电煤 保险 机票 门店查询 酒店

// 会员服务 会员联盟 延长保修 易付宝 苏宁理财 苏宁金融

// 更多热点 PP视频 合作招商 苏宁联盟 用户体验 苏宁云 苏宁足球 苏宁公益

// 合作招商 服务市场 金融中心 培训中心 易通天下 规则中心 规则众议院

// 苏宁帮客 帮助中心 查找门店 退换/维修 意见反馈 30天包退

// 待支付 待收货 待评价 修改订单

// 我的二手 我的关注 我的金融 苏宁会员 我的任性付 我的优惠券