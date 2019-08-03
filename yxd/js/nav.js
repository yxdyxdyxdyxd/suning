class Nav {
    constructor(data) {
        this.data = data
    }
    init() {
        //创建导航标签
        this.createNva();
        //创建banner部分
        this.createBanner();
        //给导航添加滑过显示事件
        this.addEventNav();

    }
    //创建导航标签
    createNva() {
        let html = `  <div class="nav-head">
        <div class="conter">
        <div class="nav-box">
        <div class="nav-box-head">
        <a href=""><i></i>全部商品分类</a>
         </div>
          <div class="nav-box">
           <ul>
           ${this.data.navlist.map((ele)=>{
               return `<li>
            ${ele.map((item)=>{
                return `   <a href="">${item}</a><em></em>`
            }).join("")}
                </li>`
           }).join("")}
            
             </ul>
           ${this.data.navblock.map((ele)=>{
               return `  <div class="nav-block ">
               <div class="nav-block-head">
              ${ele.head.map((head)=>{
                  return `<a href="">${head}</a>`
              }).join("")}
            </div>
            <div class="nav-block-main">
                      ${ele.text.map((text)=>{
                          return `       <dl>
                          <dt><a href="">${text.title}</a></dt>
                          <dd>
      ${text.list.map((alist)=>{
          return `<a href="">${alist}</a>`
      }).join("")}
      
                          </dd>
                      </dl>`
                      }).join("")}
 
                         </div>
                         <div class="nav-block-right">
                             <div class="nav-samll-img clearfix">
                                 ${ele.src.map((msrc)=>{
                                     return `<a href=""><img src="${msrc}" alt=""></a>`
                                 }).join("")}
                             </div>
                             <div class="nav-big-img clearfix">
                               ${ele.bigsrc.map((mbigsrc)=>{
                                   return `  <a href=""><img src="${mbigsrc}" alt=""></a>
                                   `
                               }).join("")}
                             </div>
                         </div>
                     </div>`
           }).join("")}
                </div>


            </div>
            <div class="nav-index">
                <ul>
                ${this.data.navtype.map((ele)=>{
                return `<li>${ele}<span></span></li>`
                }).join("")}
                    
                    
                </ul>
            </div>
            <img src="../images/xieyi.png" alt="" class="xieyi">
        </div>
    </div>`

        $("body").append(html);
    }
    //创建banner部分
    createBanner() {
        let html = `  <div class="banner">
        <div class="banner-right">
            <div class="banner-right-head">
                <div class="banner-user"></div>
                <p>Hi,你好</p>
                <div class="banner-user-btn"><a href="">新人有礼</a><a href=""></a></div>
                <div class="banner-user-enter"><a href=""></a><a href=""></a></div>
            </div>
            <div class="banner-right-center">
                <ul>
                   ${this.data.banlist.map((ele)=>{
                       return ` <li>
                       <p><span>[热点]</span> <span>${ele}</span></p>
                   </li>`
                   }).join("")}
                   
                </ul>
            </div>
            <div class="banner-right-foot">
                <ul>
                    ${this.data.cost.map((ele)=>{
                        return `<li><i class="iconfont ${ele.costimg}"></i>
                        <p>${ele.costtext}</p>
                    </li>`
                    }).join("")}
                  
                </ul>
            </div>
        </div>
        <ul class="slider-box">
           ${this.data.bannerimg.map((ele)=>{
               return ` <span class="slider-box-item"><img src="${ele}" alt=""></span>`
           }).join("")}
          
        </ul>
        <div class="slider-control">
            <span class="prev">&lt;</span>
            <span class="next">&gt;</span>
        </div>
        <div class="slider-warp">
            <ol class="slider-nav">
               ${this.data.bannerimg.map((ele,i)=>{
                   return ` <span class="slider-nav-item"></span>`
               }).join("")}
            </ol>
        </div>
        <div class="first-hc">
            <div class="four-hc">
                <ul>
                   ${this.data.fourhc.map((ele)=>{
                       return ` <li>
                       <p class="title">${ele.title}</p>
                       <p class="desc">${ele.desc}</p>
                       <img src="${ele.src}" alt="">
                   </li>`
                   }).join("")}
                    
                </ul>
            </div>
            <div class="animate-hc">
                <ul>
                    <li>
                        <div class="hc-lable">
                            <p>极物出行</p>
                        </div>
                        <div class="hclist">
                            <div class="hclist-zhc">
                                <p class="title">极物出行</p>
                                <p class="desc">夏日出行礼</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>`

        $("body").append(html);
    }
    //给导航添加滑过显示事件
    addEventNav() {
        let navList = $(".nav-box").children("ul").children("li");
        this.navblock = $(".nav-block");
        let self = this;
        let oNavA = $(".nav-box").children("ul").children("li").children("a");
        navList.hover(function () {
            $(this).toggleClass("nav-li-active");

            self.navblock.eq($(this).index()).toggleClass("nav-block-active");

        })
        //给导航里的文字添加滑过变成橙色
        oNavA.hover(function () {
            $(this).toggleClass("nav-li-a")
        })

        //滑入导航
        this.navblock.hover(function () {
            $(this).toggleClass("nav-block-active");
        })
        //滑过导航隐藏显示文字时文字变成橙色
        let navblockA = $(".nav-block-main").find("a");
        navblockA.hover(function () {
            $(this).toggleClass("nav-main-active")
        })

        //删除导航多余的标签
        navList.each((i, ele) => {
            $(ele).children("em:last").remove()
        })

        //给导航大标题添加滑过文字变橙色事件
        let navBlist = $(".nav-index").find("li");
        navBlist.hover(function () {
            $(this).toggleClass("nav-index-active")
        })
        navBlist.eq(2).append(`<i class="hot"></i>`)

    }

}





let obj = {
    fourhc: [{
        title: "极物出行",
        desc: "夏日出行礼",
        src: "../images/x1.jpg"
    }, {
        title: "汽车用品",
        desc: "满199减120",
        src: "../images/x2.jpg"
    }, {
        title: "电视家影",
        desc: "爆款直降1000",
        src: "../images/x3.jpg"
    }, {
        title: "营养奶粉",
        desc: "爆款8折起",
        src: "../images/x4.jpg"
    }],
    bannerimg: ["../images/b1.jpg", "../images/b2.jpg", "../images/b3.jpg", "../images/b4.jpg", "../images/b5.jpg", "../images/b6.jpg", "../images/b7.jpg", "../images/b8.jpg"],
    cost: [{
        costimg: "icon-shouji",
        costtext: "话费"
    }, {
        costimg: "icon-jiudian",
        costtext: "水电煤"
    }, {
        costimg: "icon-jiaotongqia",
        costtext: "苏宁卡"
    }, {
        costimg: "icon-icon--copy",
        costtext: "理财"
    }, {
        costimg: "icon-yiriyou",
        costtext: "分期"
    }, {
        costimg: "icon-menpiao",
        costtext: "公益"
    }],
    banlist: ["冰箱竟用错了这么多年 ！了解这些教你在冰箱里放食物", "天天减肥天天错，这十条减肥谣言你信了吗 （上）", "天虽热，可别忘记健康饮水", "UHD搭配4K更有优势？它与4K电视的区别在哪？", "空调到底该怎么选？看完这三点就明白", "小户型冰箱应该怎么选？教你两点让你不掉坑", "冰箱竟用错了这么多年 ！了解这些教你在冰箱里放食物", "天天减肥天天错，这十条减肥谣言你信了吗 （上）", "天虽热，可别忘记健康饮水", "UHD搭配4K更有优势？它与4K电视的区别在哪？", "空调到底该怎么选？看完这三点就明白", "小户型冰箱应该怎么选？教你两点让你不掉坑"],

    navtype: ["限时抢购", "红孩子", "苏宁超市", "电器城", "生活家电", "时尚服饰", "苏宁国际", "苏宁Outlets", "金融", "直播"],
    navtitle: "全部商品分类",
    navlist: [
            ["手机", "运营商", "智能数码"],
            ["空调", "电视", "冰箱", "洗衣机"],
            ["厨卫大电", "生活家电", "厨具"],
            ["电脑办公", "相机", "DIY"],
            ["家居", "家具", "家装", "家纺"],
            ["食品", "酒水", "生鲜", "特产"],
            ["美妆", "个护", "清洁", "宠物"],
            ["母婴", "玩具", "车床", "童装"],
            ["运动", "户外", "足球", "跑步机"],
            ["男装", "女装", "内衣", "鞋靴"],
            ["箱包", "钟表", "珠宝", "艺术"],
            ["汽车", "汽摩", "二手车", "车品"],
            ["图书", "艺术", "原版", "文学"],
            ["医药健康", "计生情趣"],
            ["理财", "分期", "保险", "房产"]
        ]

        ,
    navblock: [{
        head: ["手机频道", "智能数码", "以旧换新", "网上营业厅", "企业采购", "苏宁国际", "二手优品"],
        text: [{
            title: "手机通信",
            list: ["【抢818元大额手机券】", "全部手机", "iPhone", "华为", "小米", "荣耀", "vivo", "OPPO", "realme", "诺基亚", "三星", "魅族", "努比亚", "联想", "守护宝", "飞利浦", "天语", "正品好货", "以旧换新", "手机维修"],
        }, {
            title: "手机配件",
            list: ["【配件精选会场，全场9.9元起】", "手机壳", "手机耳机", "蓝牙耳机", "蓝牙音箱", "手机贴膜", "手机存储卡", "数据线", "充电器", "无线充电器", "手机电池", "苹果周边", "移动电源", "自拍杆", "手机支架", "手机U盘", "车载配件", "手机饰品"],
        }, {
            title: "智能设备",
            list: ["【智能数码开门红，领券满499减50】", "智能音箱", "智能门锁", "平衡车", "无人机", "智能摄像头", "智能机器人", "智能手环", "智能手表", "VR眼镜", "智能家居", "智能健康监测", "智能翻译机"],
        }, {
            title: "影音电子",
            list: ["音箱", "耳机/耳麦", "智能音箱", "运动耳机", "MP3/MP4", "收音/收音机", "录音笔", "无线耳机", "蓝牙耳机"],
        }, {
            title: "电子教育",
            list: ["儿童手表", "学生电脑/学习机", "故事机", "翻译机", "步步高点读机", "小天才儿童手表", "点读机/笔", "电子书", "电子词典", "复读机"],
        }, {
            title: "二手优品",
            list: ["iphone 7", "iphone 8", "iPhone X", "iphone 8p", "iphone 7P", "oppo", "vivo", "三星", "华为", "小米"],
        }, {
            title: "苏宁互联",
            list: ["尾号888靓号", "0月租号卡", "2元流量畅享", "20GB大流量", "超级靓号", "立即选号"],
        }, {
            title: "营业厅",
            list: ["【49元/年每月40GB+100分钟】", "手机卡", "大流量卡", "宽带", "办套餐", "充话费/流量", "中国移动", "中国电信", "中国联通"],
        }, {
            title: "数码服务产品",
            list: ["数码综合服务馆：数码服务三十六计"],
        }],
        src: ["https://image.suning.cn/uimg/cms/img/154380730958445320.jpg", "https://image.suning.cn/uimg/cms/img/152583830114304733.jpg", "https://image.suning.cn/uimg/cms/img/154175492822125456.jpg", "https://image.suning.cn/uimg/cms/img/154380731599688154.jpg", "https://image.suning.cn/uimg/cms/img/152764919535057422.jpg", "https://image.suning.cn/uimg/cms/img/155255202732542882.jpg", "https://image.suning.cn/uimg/cms/img/154339130220195777.jpg", "https://image.suning.cn/uimg/cms/img/154339145516257563.jpg"],
        bigsrc: ["https://image.suning.cn/uimg/cms/img/156454297886967587.jpg", "https://image.suning.cn/uimg/cms/img/156454327114995555.jpg"]
    }, {
        head: ["电器城", "空调频道", "冰箱/洗衣机频道", "彩电频道", "以旧换新", "智能家电", "企业采购", "海外购"],
        text: [{
            title: "空调",
            list: ["【空调开门红 爆款低至899元】", "挂机", "柜机", "变频", "美的", "格力", "奥克斯", "TCL", "海尔", "海信", "志高", "科龙", "空调24小时闪装", "移动空调", "以旧换新", "0元安装", "空调热卖精选特惠"],
        }, {
            title: "电视",
            list: ["【电视家影 最高直降1000】", "65英寸", "55英寸", "32英寸及以下", "海信", "小米", "创维", "夏普", "TCL", "索尼", "三星", "4K超高清", "智能", "8K超高清", "曲面", "OLED", "全面屏", "店铺热卖", "精选好店"],
        }, {
            title: "冰箱",
            list: ["【冰洗爆款5折限量抢】", "变频冰箱", "多门", "对开门", "十字对开", "三门", "双门", "风冷（无霜）", "海尔", "松桥", "容声", "西门子", "美的", "美菱", "海信", "三星", "松下", "博世", "冰洗以旧换新", "冰洗配件"],
        }, {
            title: "洗衣机",
            list: ["【保鲜好冰箱 风冷对开低至1999】", "小biu洗烘一体机", "滚筒", "洗干一体机", "波轮", "烘干机", "大容量", "迷你洗衣机", "变频", "海尔", "松桥", "美的", "西门子", "小天鹅", "海信", "松下", "三洋", "三星", "冰洗以旧换新", "冰洗配件"],
        }, {
            title: "冷柜",
            list: ["【冰洗放价 冰箱198元起】", "家用冷柜", "商用展示柜", "商用冰柜", "冰吧", "酒柜", "厨房冷柜", "海尔", "美的", "美菱", "容声", "星星", "欧驰宝", "雪村", "松桥", "澳柯玛", "五洲伯乐"],
        }, {
            title: "家庭影音",
            list: ["【影音热卖，低至39元起】", "家庭影院", "回音壁", "迷你音响", "DVD", "功放"],
        }, {
            title: "帮客服务",
            list: ["安装服务", "清洗服务", "维修服务", "上门服务卡", "清洗产品", "帮客材配", "帮客蓝狮", "帮客套餐服务", "日常保洁", "深度保洁", "开荒保洁", "玻璃清洁", "洗衣服务", "租赁服务"],
        }],
        src: ["https://image.suning.cn/uimg/cms/img/152638776200147340.jpg", "https://image.suning.cn/uimg/cms/img/150409581845628171.jpg", "https://image.suning.cn/uimg/cms/img/151634532504213637.jpg", "https://image.suning.cn/uimg/cms/img/149433748819374723.jpg", "https://image.suning.cn/uimg/cms/img/149433750376504498.jpg", "https://image.suning.cn/uimg/cms/img/149083918466633686.jpg", "https://image.suning.cn/uimg/cms/img/150677445857981069.jpg", "https://image.suning.cn/uimg/cms/img/152101859428779269.jpg"],
        bigsrc: ["https://image.suning.cn/uimg/cms/img/156414368016361258.jpg", "https://image.suning.cn/uimg/cms/img/156041101517167380.png"]
    }, {
        head: ["电器城", "厨卫家装馆", "生活家电", "个护健康", "餐厨水具", "苏宁国际", "商用电器"],
        text: [{
            title: "厨卫大电",
            list: ["【厨卫5折抢】", "烟灶套餐", "油烟机", "燃气灶", "集成灶", "消毒柜", "洗碗机", "嵌入式厨电", "垃圾处理器", "商用厨房电器", "老板", "方太", "精选好店", "小biu垃圾处理器"],
        }, {
            title: "卫浴电器",
            list: ["热水器", "电热水器", "燃气热水器", "厨宝", "即热热水器", "浴霸/排气扇", "智能马桶盖", "采暖炉"],
        }, {
            title: "中式厨房",
            list: ["【引爆8月 9.9元限量秒杀】", "电饭煲", "电压力锅", "豆浆机", "电磁炉", "电水壶", "电火锅", "电饼铛", "电炖锅", "电蒸锅", "煮蛋器", "养生壶/煎药壶", "电热饭盒", "电陶炉", "进口电饭煲"],
        }, {
            title: "西式厨房",
            list: ["电烤箱", "微波炉", "破壁机", "榨汁机/原汁机", "面包机", "酸奶机", "咖啡机", "多士炉", "空气炸锅", "搅拌机", "打蛋器", "面条机", "进口咖啡机"],
        }, {
            title: "生活电器",
            list: ["电风扇", "空调扇", "吸尘器", "香薰仪", "扫地机器人", "挂烫机", "空气净化器", "清洁机", "除湿机", "干衣机", "加湿器", "除螨仪", "进口吸尘器", "进口空气净化器"],
        }, {
            title: "个护健康",
            list: ["剃须刀", "电吹风", "美容仪", "电动牙刷", "脱毛仪", "美发器", "按摩椅", "足浴盆", "体脂秤", "按摩器", "毛球修剪器", "进口剃须刀", "进口电动牙刷", "进口美容仪"],
        }, {
            title: "炊具水具",
            list: ["烹饪锅具", "炒锅", "蒸锅", "套锅", "刀具", "餐具", "玻璃杯", "保鲜盒", "保温杯", "保温壶", "压力锅", "煎锅", "汤锅", "厨房工具", "凉水壶", "密封罐", "塑料杯"],
        }, {
            title: "饮水设备",
            list: ["净水器", "饮水机", "净水杯", "净水滤芯", "A.O.史密斯", "沁园", "美的", "安吉尔", "3M", "海尔"],
        }, {
            title: "商用电器",
            list: ["豆浆机", "电磁炉", "面条机", "打蛋器", "制冰机", "烤箱", "咖啡机", "炸锅", "封口机", "饮料机", "热狗机", "切片机", "炒冰机", "烤饼机", "甜筒机", "棉花糖机", "爆米花机", "关东煮机", "章鱼丸机", "肠粉机"],
        }],
        src: ["https://image.suning.cn/uimg/cms/img/149009977471794235.jpg", "https://image.suning.cn/uimg/cms/img/156026041156830060.png", "https://image.suning.cn/uimg/cms/img/149009979146911946.jpg", "https://image.suning.cn/uimg/cms/img/155125670447502378.jpg", "https://image.suning.cn/uimg/cms/img/149086201465357242.jpg", "https://image.suning.cn/uimg/cms/img/151643143274399137.jpg", "https://image.suning.cn/uimg/cms/img/150003200859968776.jpg", "https://image.suning.cn/uimg/cms/img/151031556202848761.jpg"],
        bigsrc: ["https://image.suning.cn/uimg/cms/img/156352321214383168.jpg", "https://image.suning.cn/uimg/cms/img/156099512524057343.jpg"]
    }, {
        head: ["电器城", "电脑频道", "相机频道", "以旧换新", "企业采购", "苏宁国际电脑", "二手优品"],
        text: [{
            title: "电脑整机",
            list: ["【限量抢818元神券】", "笔记本", "游戏本", "轻薄本", "台式电脑", "电脑一体机", "创意设计PC", "服务器/工作站", "商用台式电脑"],
        }, {
            title: "平板电脑",
            list: ["【iPad低至2038】", "iPad", "小米平板", "华为平板", "电子书", "Kindle", "二合一 ", "微软平板", "荣耀平板"],
        }, {
            title: "电脑配件",
            list: ["【领组装机600元券】", "显示器", "CPU", "主板", "显卡", "硬盘", "SSD固态硬盘", "内存", "机箱", "散热器", "电源", "组装电脑", "刻录机/光驱", "装机配件", "商用显示器"],
        }, {
            title: "网络设备",
            list: ["路由器", "无线网卡", "交换机", "随身wifi", "网络存储"],
        }, {
            title: "外设附件",
            list: ["鼠标", "键盘", "机械键盘", "键鼠套装", "U盘", "移动硬盘", "鼠标垫", "电脑包", "电脑音箱", "插线板", "摄像头"],
        }, {
            title: "摄影摄像",
            list: ["【领券最高减600】", "数码相机", "单反", "微单/单电", "拍立得", "佳能 ", "索尼", "尼康", "摄像机", "镜头", "运动相机", "数码相框", "相机以旧换新"],
        }, {
            title: "数码配件",
            list: ["三脚架/云台", "相机包", "闪光灯手柄", "滤镜", "电池/充电器", "机身附件", "望远镜", "读卡器", "相机清洁/贴膜", "储存卡", "相纸胶片", "影棚器材"],
        }, {
            title: "办公文具",
            list: ["【智能投影99元抢】", "投影仪", "打印机", "复印/复合机", "保险柜", "扫描仪", "点验钞机", "电话机", "标签机", "复印纸", "投影幕布", "硒鼓", "墨盒", "办公文具", "本册/便签", "财务用品", "文件管理", "得力"],
        }, {
            title: "电脑服务产品",
            list: ["【以旧换新最高补贴760元】", "苏宁电脑服务", "30天退 180天换", "帮客电脑上门服务"],
        }],
        src: ["https://image.suning.cn/uimg/cms/img/149922071313642211.jpg", "https://image.suning.cn/uimg/cms/img/149076993605637103.jpg", "https://image.suning.cn/uimg/cms/img/149076994236824282.jpg", "https://image.suning.cn/uimg/cms/img/149076994892781391.jpg", "https://image.suning.cn/uimg/cms/img/149084095024481429.jpg", "https://image.suning.cn/uimg/cms/img/149084101757956453.jpg", "https://image.suning.cn/uimg/cms/img/153181802268081238.jpg", "https://image.suning.cn/uimg/cms/img/150105610899232366.jpg"],
        bigsrc: ["https://image.suning.cn/uimg/cms/img/156465298762569367.jpg", "https://image.suning.cn/uimg/cms/img/155265411492841494.jpg"]
    }, {
        head: ["家具馆", "卫浴馆", "家装馆", "装修馆", "苏宁极物", "企业采购"],
        text: [{
            title: "家纺",
            list: ["【家纺清仓 满188减100】", "床品套件", "被子", "毛巾", "枕芯", "凉席", "蚊帐", "蚕丝被", "毛巾被/毯", "床垫/床褥", "坐垫/抱枕", "床单/被罩/床笠", "地毯/地垫", "餐桌布艺"],
        }, {
            title: "家具",
            list: ["沙发", "床", "床垫", "电视柜", "电脑椅", "衣柜", "茶几", "餐桌", "电脑桌", "置物架", "鞋柜", "红木家具", "客厅成套家具", "餐厅成套家具", "卧室成套家具", "儿童成套家具", "书房家具"],
        }, {
            title: "灯具灯饰",
            list: ["客厅灯", "水晶灯", "卧室灯", "吸顶灯", "吊灯", "灯具套餐", "台灯", "集成吊顶", "筒灯", "射灯", "灯带"],
        }, {
            title: "厨房卫浴",
            list: ["花洒", "水槽", "马桶", "坐便器盖板", "龙头", "地漏", "浴室柜", "卫浴挂件", "浴缸", "淋浴花洒"],
        }, {
            title: "五金建材",
            list: ["插座", "开关", "指纹锁", "电钻", "工具箱", "电动晾衣架", "监控摄像头", "电线", "接线板", "门锁", "家具五金", "手动工具", "电动工具", "油漆涂料", "开关插座套装", "墙纸壁纸", "瓷砖", "地板", "精选好店"],
        }, {
            title: "定制装修",
            list: ["定制衣柜", "定制电视柜", "定制柜类", "全屋定制", "门", "木门", "整体橱柜", "特权定金", "榻榻米", "装修服务", "设计服务", "暖气片", "楼梯"],
        }, {
            title: "生活日用",
            list: ["收纳箱", "收纳柜", "压缩袋", "收纳用品", "晴雨用具", "口罩", "暖宝宝/暖贴", "日常防护", "衣架/晒架", "电动晾晒架", "净化除味", "置物架", "浴室用品", "缝纫针织", "辅助工具", "家庭整理用品", "家居饰品", "香薰用品", "园艺用品", "节庆用品"],
        }, {
            title: "集成家电",
            list: ["中央空调", "美的", "海尔", "奥克斯", "志高", "变频中央空调", "1级能效", "风管机", "嵌入机", "商用柜机", "新风系统", "空气能热水器", "中央净水", "壁挂炉", "美的空气能", "海尔空气能", "博世", "能率", "林内"],
        }],
        src: ["https://image.suning.cn/uimg/cms/img/155296586938119437.jpg", "https://image.suning.cn/uimg/cms/img/151307075734351371.jpg", "https://image.suning.cn/uimg/cms/img/150521542514379861.jpg", "https://image.suning.cn/uimg/cms/img/150358808683323274.png", "https://image.suning.cn/uimg/cms/img/152706820197053388.jpg", "https://image.suning.cn/uimg/cms/img/152102584573812116.jpg", "https://image.suning.cn/uimg/cms/img/149749374148727485.jpg", "https://image.suning.cn/uimg/cms/img/149630410336400745.jpg"],
        bigsrc: ["https://image.suning.cn/uimg/cms/img/156075306840534374.jpg", "https://image.suning.cn/uimg/cms/img/156413978070023311.jpg"]
    }, {
        head: ["苏宁超市", "苏宁生鲜", "中华特色馆", "医药馆", "企业采购", "苏宁国际"],
        text: [{
            title: "牛奶冲调",
            list: ["【牛奶部分2件8折】", "纯牛奶", "奶茶", "酸奶", "成人奶粉", "速溶咖啡", "谷物麦片", "蜂蜜"],
        }, {
            title: "进口食品",
            list: ["【进口牛奶部分2件8折】", "进口牛奶", "进口休闲零食", "进口饼干糕点", "进口葡萄酒/果酒", "进口膨化食品", "进口橄榄油"],
        }, {
            title: "生鲜食品",
            list: ["牛肉", "车厘子", "虾类", "牛排", "鸡肉", "水果", "鱼类", "猪肉", "鸭肉", "蔬菜", "榴莲", "羊肉"],
        }, {
            title: "中外名酒",
            list: ["【中外名酒 部分2件5折】", "白酒", "啤酒", "精酿啤酒", "葡萄酒", "黄酒", "洋酒", "年份老酒", "起泡酒", "预调酒", "保健酒"],
        }, {
            title: "休闲食品",
            list: ["【休闲零食 满199减129 】", "饼干", "礼盒", "零食", "面包", "巧克力", "坚果", "蜜饯", "糕点", "肉松肉脯", "膨化食品", "糖果", "薯片"],
        }, {
            title: "粮油调味",
            list: ["【粮油开门红  满199减60】", "食用油", "大米", "面粉", "厨房调料", "南北干货", "方便速食", "酱油", "麻油", "面条", "白木耳/银耳"],
        }, {
            title: "饮料饮品",
            list: ["碳酸饮料", "茶饮料", "果汁/果蔬汁", "含乳饮料", "功能饮料", "苏打水", "咖啡饮料", "植物蛋白饮料", "饮用水"],
        }, {
            title: "中华特色馆",
            list: ["华北", "华东", "华南", "华中", "东北", "西北", "西南"],
        }, {
            title: "茗茶",
            list: ["铁观音", "龙井", "红茶", "乌龙茶", "花草茶", "花果茶", "黑茶", "白茶", "养生茶", "茶礼盒"],
        }],
        src: ["https://image.suning.cn/uimg/cms/img/154751901883578712.jpg", "https://image.suning.cn/uimg/cms/img/150478404472023364.jpg", "https://image.suning.cn/uimg/cms/img/150824218703325434.jpg", "https://image.suning.cn/uimg/cms/img/154864142402581542.jpg", "https://image.suning.cn/uimg/cms/img/154520366686023832.png", "https://image.suning.cn/uimg/cms/img/150103734134534202.jpg", "https://image.suning.cn/uimg/cms/img/149735424647459484.jpg", "https://image.suning.cn/uimg/cms/img/155730819284718178.jpg"],
        bigsrc: ["https://image.suning.cn/uimg/cms/img/156075306840534374.jpg", "https://image.suning.cn/uimg/cms/img/156413978070023311.jpg"]
    }, {
        head: ["苏宁超市", "美妆个护", "医药馆", "苏宁国际护肤", "苏宁极物", "企业采购"],
        text: [{
            title: "面部护肤",
            list: ["护肤套装", "面膜", "洗面奶", "防晒", "喷雾", "爽肤水", "乳液", "面霜", "眼霜", "日霜", "晚霜", "精华", "卸妆", "T区护理", "润唇膏", "海外尖货", "进口水乳套装", "进口护肤"],
        }, {
            title: "口腔护理",
            list: ["牙刷", "口腔套装", "漱口水/口喷", "儿童牙膏", "牙膏"],
        }, {
            title: "洗发护发",
            list: ["护发素", "洗护套装", "洗发水", "造型", "无硅油", "去屑", "染发"],
        }, {
            title: "身体护理",
            list: ["沐浴露", "润体乳", "护手霜", "足部护理", "瘦身纤体", "洗手液", "手部护理", "防蚊露/花露水", "脱毛膏 ", "走珠"],
        }, {
            title: "彩妆香水",
            list: ["隔离", "粉底/遮瑕", "口红/唇膏", "唇釉/唇彩", "BB/CC霜", "腮红", "气垫BB", "睫毛膏", "眼影", "眼线", "眉笔", "眉粉", "散粉", "美甲/指甲油", "女士香水", "男士香水", "彩妆工具", "彩妆套装"],
        }, {
            title: "女性护理",
            list: ["日用", "夜用", "组合套装", "护垫", "卫生巾"],
        }, {
            title: "清洁洗护",
            list: ["垃圾袋", "洗衣液", "垃圾桶", "洗衣粉/皂", "家庭清洁", "洗洁精", "洁厕剂", "消毒液", "衣物洗护", "清洁工具", "驱蚊驱虫", "拖把/扫把", "保鲜膜/袋", "清洁用品", "纸杯", "一次性用品"],
        }, {
            title: "生活用纸",
            list: ["卷纸", "湿纸巾", "手帕纸", "厨房用纸", "平板纸", "抽纸"],
        }, {
            title: "宠物生活",
            list: ["宠物零食", "宠物玩具", "宠物日用", "出行装备", "宠物服饰", "宠物保健", "宠物主食"],
        }],
        src: ["https://image.suning.cn/uimg/cms/img/150676099980283053.jpg", "https://image.suning.cn/uimg/cms/img/150676108181363022.jpg", "https://image.suning.cn/uimg/cms/img/149424864938569409.jpg", "https://image.suning.cn/uimg/cms/img/150098379925637163.jpg", "https://image.suning.cn/uimg/cms/img/149085909490733443.jpg", "https://image.suning.cn/uimg/cms/img/153907119604311586.jpg", "https://image.suning.cn/uimg/cms/img/153907123926438208.jpg", "https://image.suning.cn/uimg/cms/img/153907126709816128.jpg"],
        bigsrc: ["https://image.suning.cn/uimg/cms/img/154036663788016237.jpg", "https://image.suning.cn/uimg/cms/img/156456156617878874.jpg"]
    }, {
        head: ["车床座椅", "儿童玩具", "奶粉辅食", "童装童鞋", "孕产/摄影", "苏宁国际", "企业采购"],
        text: [{
            title: "奶粉",
            list: ["1段", "2段", "3段", "4段", "孕妈奶粉", "特配奶粉", "有机奶粉", "母婴精选好店"],
        }, {
            title: "宝宝尿裤",
            list: ["新生儿", "S", "M", "L", "XL", "XXL", "拉拉裤", "宝宝湿巾", "成人尿裤"],
        }, {
            title: "宝宝尿裤",
            list: ["米粉", "肉松", "饼干", "果汁果泥", "零食", "钙铁锌", "清火开胃", "DHA", "孕婴营养品", "宝宝面食"],
        }, {
            title: "喂养用品",
            list: ["奶瓶", "奶嘴", "吸奶器", "牙胶安抚", "暖奶消毒", "儿童餐具", "水杯/水壶", "口腔清洁", "围兜/口水巾", "辅食机/料理机"],
        }, {
            title: "孕婴洗护",
            list: ["防晒", "洗衣液", "洗发/沐浴", "防蚊/驱蚊", "浴盆/浴桶", "孕婴童护肤", "理发器", "婴童护臀", "坐便器", "爽身粉"],
        }, {
            title: "童装童鞋",
            list: ["套装", "T恤/衬衫", "卫衣", "裙子", "毛衣/针织衫", "外套/风衣", "裤子", "婴童泳装", "亲子装", "婴儿礼盒", "袜子", "帽子", "棉服/羽绒服", "运动鞋", "休闲鞋", "帆布鞋", "学步鞋", "凉鞋", "皮鞋", "舞蹈鞋"],
        }, {
            title: "童车童床",
            list: ["安全座椅", "婴儿推车", "婴儿床", "自行车", "电动车", "滑板车", "学步车", "三轮车", "扭扭车", "儿童餐椅", "儿童家具"],
        }, {
            title: "儿童玩具",
            list: ["爬行垫/游戏毯", "积木", "益智玩具", "戏水玩沙", "运动户外", "遥控玩具", "手工彩泥", "智能娃娃", "毛绒公仔", "动漫周边", "仿真模型", "轨道车", "电动玩具"],
        }, {
            title: "孕妈专区",
            list: ["孕妈护肤", "孕妇装", "防辐射服", "文胸/内裤", "待产包", "月子服", "产后塑身", "妈咪包", "婴儿背带", "亲子门票", "月子护理"],
        }],
        src: ["https://image.suning.cn/uimg/cms/img/149084098909555371.jpg", "https://image.suning.cn/uimg/cms/img/149084099503582643.jpg", "https://image.suning.cn/uimg/cms/img/149084100149194151.jpg", "https://image.suning.cn/uimg/cms/img/149084100879634886.jpg", "https://image.suning.cn/uimg/cms/img/149101516054856626.jpg", "https://image.suning.cn/uimg/cms/img/149084102190976003.jpg", "https://image.suning.cn/uimg/cms/img/149084103148540361.jpg", "https://image.suning.cn/uimg/cms/img/149301434853188501.jpg"],
        bigsrc: ["https://image.suning.cn/uimg/cms/img/152401446269647637.jpg", "https://image.suning.cn/uimg/cms/img/152404564540937377.jpg"]
    }, {
        head: ["运动馆", "服装城", "大牌特卖", "皮具箱包", "珠宝馆", "苏宁国际运动鞋", "818提前抢"],
        text: [{
            title: "运动户外馆",
            list: ["哥伦比亚", "斯凯奇", "耐克", "彪马", "特步", "鸿星尔克", "李宁", "安踏", "匡威", "361°", "骆驼", "阿迪达斯"],
        }, {
            title: "运动鞋",
            list: ["跑步鞋", "休闲板鞋", "篮球鞋", "足球鞋", "羽毛球鞋", "训练鞋", "帆布鞋", "运动凉鞋/拖鞋", "涉水鞋", "滑板鞋"],
        }, {
            title: "运动服饰",
            list: ["运动T恤", "POLO衫", "运动长裤", "运动短裤", "卫衣", "运动夹克", "健身裤", "运动套装"],
        }, {
            title: "健身训练",
            list: ["跑步机", "健身车", "甩脂机", "仰卧板", "踏步机", "哑铃", "综合训练器", "椭圆机", "臂力器", "动感单车", "划船机"],
        }, {
            title: "户外鞋服",
            list: ["户外T恤", "皮肤风衣", "徒步鞋", "登山鞋", "户外休闲鞋", "溯溪鞋", "速干衣裤", "冲锋衣"],
        }, {
            title: "户外装备",
            list: ["帐篷", "手电筒", "望远镜", "野餐炊具", "睡袋", "吊床", "户外包", "野餐垫", "便携桌椅床", "军迷用品"],
        }, {
            title: "骑行",
            list: ["自行车", "儿童自行车", "折叠自行车", "山地车", "公路车", "骑行服饰", "通勤车", "思维车"],
        }, {
            title: "体育用品",
            list: ["乒乓球", "羽毛球", "篮球", "足球", "轮滑滑板", "瑜伽用品", "网球", "排球", "足球装备"],
        }, {
            title: "游泳用品",
            list: ["女士泳衣", "比基尼", "男士泳衣", "泳镜", "游泳圈", "游泳包", "泳帽"],
        }, {
            title: "垂钓",
            list: ["本汀", "佳钓尼", "鱼竿", "鱼线", "鱼钩", "路亚", "鱼伞", "鱼包", "鱼护"],
        }],
        src: ["https://image.suning.cn/uimg/cms/img/149017759924222931.jpg", "https://image.suning.cn/uimg/cms/img/152154508522798875.jpg", "https://image.suning.cn/uimg/cms/img/154997435905301330.jpg", "https://image.suning.cn/uimg/cms/img/154647994775228407.jpg", "https://image.suning.cn/uimg/cms/img/149017764752526674.jpg", "https://image.suning.cn/uimg/cms/img/156022197574274949.jpg", "https://image.suning.cn/uimg/cms/img/155428176379072853.jpg", "https://image.suning.cn/uimg/cms/img/152154545434950635.jpg"],
        bigsrc: ["https://image.suning.cn/uimg/cms/img/156336573816603143.jpg", "https://image.suning.cn/uimg/cms/img/156459060272693494.jpg"]
    }, {
        head: ["服装城", "大牌特卖", "皮具箱包", "珠宝馆", "运动馆", "钟表馆", "苏宁国际潮服", "苏宁极物"],
        text: [{
            title: "当季流行",
            list: ["【时尚服饰 满199减100】", "连衣裙", "卫衣女", "男士衬衫", "牛仔裤女", "牛仔裤", "时髦外套", "文胸", "夹克男"],
        }, {
            title: "女士上装",
            list: ["T恤", "雪纺衫", "荷叶边衬衫", "衬衫", "针织衫", "短外套", "个性卫衣", "牛仔外套", "小西装", "风衣", "皮衣", "毛呢大衣", "羽绒服", "棉服", "毛衣", "羊绒衫", "时尚套装", "当季热卖"],
        }, {
            title: "女士裤/裙装",
            list: ["半身裙", "荷叶短裙", "牛仔裤", "皮裤", "小脚裤", "休闲裤", "阔腿裤", "哈伦裤", "打底裤", "包臀裙"],
        }, {
            title: "男士上装",
            list: ["【马克华菲 满199减100】", "POLO衫", "长袖", "衬衫", "卫衣", "针织衫", "夹克", "西服", "牛仔服", "风衣", "皮衣", "男士长袖T恤"],
        }, {
            title: "男士裤装",
            list: ["牛仔裤", "休闲裤", "小脚裤", "工装裤", "九分裤", "哈伦裤", "运动裤", "针织裤", "束脚裤", "长裤"],
        }, {
            title: "文胸内衣",
            list: ["蕾丝文胸", "运动文胸", "纯棉睡衣", "情侣睡衣", "纯棉内裤", "莫代尔内裤", "女士内裤", "男士内裤", "男士背心", "无痕内裤", "保暖内衣", "秋衣秋裤", "船袜", "棉袜", "连裤袜", "帽子", "男士丝巾/围巾", "领带"],
        }, {
            title: "童装童鞋",
            list: ["T恤", "套装", "毛衣/针织衫", "裤子", "卫衣", "外套/风衣", "棉服", "羽绒服", "运动鞋", "皮鞋", "帆布鞋", "内裤", "袜/袜裤"],
        }, {
            title: "特色服装",
            list: ["妈妈装", "大码女装", "职业套装", "婚纱礼服", "运动套装", "唐装", "旗袍", "情趣内衣", "塑身衣"],
        }, {
            title: "精品鞋靴",
            list: ["商务鞋", "商务休闲鞋", "休闲鞋", "板鞋", "高帮鞋", "乐福鞋", "豆豆鞋男", "正装皮鞋", "布洛克", "帆布鞋", "单鞋", "居家鞋/室内拖鞋", "高跟鞋", "小白鞋", "凉鞋", "鱼嘴鞋", "坡跟鞋", "拖鞋/人字拖"],
        }],
        src: ["https://image.suning.cn/uimg/cms/img/150417938213131702.jpg", "https://image.suning.cn/uimg/cms/img/149077706302462215.jpg", "https://image.suning.cn/uimg/cms/img/155498534727118874.jpg", "https://image.suning.cn/uimg/cms/img/155642324072188515.jpg", "https://image.suning.cn/uimg/cms/img/155498531694886705.jpg", "https://image.suning.cn/uimg/cms/img/149077791451078257.jpg", "https://image.suning.cn/uimg/cms/img/154172975501096119.jpg", "https://image.suning.cn/uimg/cms/img/154172976604255506.jpg"],
        bigsrc: ["https://image.suning.cn/uimg/cms/img/156419384718326831.jpg", "https://image.suning.cn/uimg/cms/img/156457789871455547.jpg"]
    }, {
        head: ["自营腕表", "皮具箱包", "钟表馆", "珠宝馆", "大牌特卖", "服装城", "礼品乐器", "苏宁国际手表", "自营手表"],
        text: [{
            title: "时尚女包",
            list: ["【时尚服饰 满199减100】", "双肩包", "单肩包", "斜挎包", "手提包", "手拿包", "女士钱包", "卡包", "钥匙包", "胸包", "腰包"],
        }, {
            title: "精品男包",
            list: ["单肩包", "双肩包", "斜挎包", "手提包", "商务公文包", "手拿包", "男士钱包", "卡包", "腰包", "胸包", "钥匙包", "腰带"],
        }, {
            title: "功能箱包",
            list: ["女士拉杆箱", "拉杆箱", "20寸登机箱", "旅行包", "万向轮箱", "运动休闲包", "电脑包", "登山包", "书包", "箱包配件"],
        }, {
            title: "钟表眼镜",
            list: ["天梭", "浪琴", "欧米茄", "DW", "卡西欧", "西铁城", "天王", "瑞士名表", "国产名表", "日韩名表", "欧美名表", "电子表", "智能手表", "闹钟", "挂钟", "座钟", "钟表配件", "太阳镜"],
        }, {
            title: "珠宝饰品",
            list: ["【七夕珠宝抢大牌】", "【周大生品牌日 每满300减30】", "黄金", "钻戒", "铂金", "翡翠玉石", "钻石", "彩宝", "时尚饰品", "珍珠项链", "金银投资", "银饰", "木手串", "施华洛世奇", "水晶玛瑙"],
        }, {
            title: "精选礼品",
            list: ["打火机", "军刀军具", "毛绒玩具", "创意礼品", "电子礼品", "工艺礼品", "礼盒礼券", "婚庆节庆", "礼品及周边", "永生花"],
        }, {
            title: "邮币收藏",
            list: ["钱币", "纪念币", "纪念钞", "古币", "连体钞", "金银币", "外币", "铜元", "邮票", "琉璃", "漆器", "青铜器"],
        }, {
            title: "流行乐器",
            list: ["雅马哈", "郎朗推荐钢琴", "卡西欧", "电钢琴", "电子琴", "吉他", "尤克里里", "管乐", "弦乐", "打击乐器", "乐器配件", "罗兰"],
        }, {
            title: "艺术陶瓷",
            list: ["油画", "书画", "雕刻工艺品", "雕塑", "陈设瓷", "艺术瓷", "日用瓷"],
        }],
        src: ["https://image.suning.cn/uimg/cms/img/154276308419431833.jpg", "https://image.suning.cn/uimg/cms/img/154276319069886763.jpg", "https://image.suning.cn/uimg/cms/img/153420766121363735.jpg", "https://image.suning.cn/uimg/cms/img/153420768975885471.jpg", "https://image.suning.cn/uimg/cms/img/153420773364253951.jpg", "https://image.suning.cn/uimg/cms/img/153420774599993624.jpg", "https://image.suning.cn/uimg/cms/img/153420778451358305.jpg", "https://image.suning.cn/uimg/cms/img/153420781517597664.jpg"],
        bigsrc: ["https://image.suning.cn/uimg/cms/img/156439344503052638.jpg", "https://image.suning.cn/uimg/cms/img/156455325510711941.jpg"]
    }, {
        head: ["苏宁汽车", "特价新车", "品质二手车", "汽车用品", "苏宁车管家", "企业采购"],
        text: [{
            title: "汽车电摩",
            list: ["【二手车拍卖 好车卖好价】", "汽车", "定金购车", "分期购车", "二手车", "电动车", "摩托车", "精选好店"],
        }, {
            title: "系统养护",
            list: ["【8月开门红 领券满199减120】", "机油", "燃油添加剂", "机油添加剂", "系统清洁剂", "防冻液/附属油", "美孚", "胜牌"],
        }, {
            title: "电子/电器",
            list: ["行车记录仪", "车载冰箱", "空气净化器", "车载充电器", "车载生活电器", "车载吸尘器", "车载存储", "手机支架", "数据线", "电子烟"],
        }, {
            title: "清洁美容",
            list: ["玻璃水", "洗车机", "洗车水枪", "车蜡", "漆面修复", "点漆笔", "内饰清洁", "外部清洁", "清洁工具", "毛巾掸子"],
        }, {
            title: "汽车装饰",
            list: ["座垫/套", "脚垫", "头枕腰靠", "香水", "挂件摆件", "方向盘套", "后备箱垫", "车载充气床", "车钥匙扣", "炭包/净化剂", "车用收纳袋/盒", "车衣", "车贴", "雨眉"],
        }, {
            title: "汽车配件",
            list: ["雨刮/雨刷", "轮胎", "滤清器", "空滤", "车灯", "刹车片", "刹车盘", "火花塞", "轮毂", "喇叭", "电瓶", "防爆膜", "千斤顶"],
        }, {
            title: "安全自驾",
            list: ["车载灭火器", "维修工具", "自驾野营", "应急救援", "车锁/地锁", "摩托用品", "保温箱", "充气泵", "胎压监测"],
        }, {
            title: "流行乐器",
            list: ["加油卡", "保养服务", "安装服务", "保养套餐", "汽车延保"],
        }],
        src: ["https://image.suning.cn/uimg/cms/img/156030823091223763.jpg", "https://image.suning.cn/uimg/cms/img/156283149828902179.jpg", "https://image.suning.cn/uimg/cms/img/155144657641178811.jpg", "https://image.suning.cn/uimg/cms/img/155650576459267646.jpg", "https://image.suning.cn/uimg/cms/img/155643521226452053.jpg", "https://image.suning.cn/uimg/cms/img/156015057762038227.jpg", "https://image.suning.cn/uimg/cms/img/155642369351221714.jpg", "https://image.suning.cn/uimg/cms/img/154717398483036378.jpg"],
        bigsrc: ["https://image.suning.cn/uimg/cms/img/156455730168894513.jpg", "https://image.suning.cn/uimg/cms/img/156315910194115171.jpg"]
    }, {
        head: ["当当网", "文轩网", "武志红", "斗罗大陆", "少儿图书", "图书频道", "企业采购"],
        text: [{
            title: "少儿频道",
            list: ["0-2岁", "3-6岁", "7-10岁", "10-14岁", "幼儿启蒙", "精装图画书", "益智游戏", "玩具书", "中国儿童文学", "外国儿童文学", "科普百科", "少儿英语", "励志成长", "动漫卡通", "少儿期刊", "少儿影视", "阅读工具书"],
        }, {
            title: "文学",
            list: ["散文随笔", "名人传记", "青春文学", "悬疑/推理", "动漫", "武侠", "名著", "大陆原创", "爆笑", "爱情/情感"],
        }, {
            title: "人文社科",
            list: ["历史", "中国文化", "心理学", "哲学/宗教", "政治", "地域文化", "法律", "社会教学", "军事", "中国民俗"],
        }, {
            title: "小说",
            list: ["当代小说", "近代小说", "古典小说", "四大名著", "外国小说", "历史小说", "科幻小说", "言情小说"],
        }, {
            title: "期刊/杂志",
            list: ["时尚/美妆", "生活休闲", "健康美食", "母婴育儿", "旅游地理", "财经管理", "数码/计算机"],
        }, {
            title: "经管励志",
            list: ["经济", "金融", "管理", "投资理财", "市场营销", "励志与成功", "创业", "领导力", "股票", "自我完善"],
        }, {
            title: "健康生活",
            list: ["旅游", "美食", "育儿百科", "塑身美颜", "时尚", "性", "休闲运动"],
        }, {
            title: "教育辅助",
            list: ["外语", "英语四六级", "公务员考试", "会计类考试", "office办公", "工具书", "中小学教辅"],
        }, {
            title: "艺术",
            list: ["绘画", "摄影", "音乐", "书法", "连环画", "建筑艺术", "影视/媒体艺术", "艺术理论", "设计", "艺术类考试", "收藏/鉴赏", "民间艺术", "工艺美术", "世界艺术概况", "戏剧艺术", "人体艺术"],
        }],
        src: ["https://image.suning.cn/uimg/cms/img/155480180353462396.jpg", "https://image.suning.cn/uimg/cms/img/153457228713113666.jpg", "https://image.suning.cn/uimg/cms/img/155478988719373191.jpg", "https://image.suning.cn/uimg/cms/img/153457243155216783.jpg", "https://image.suning.cn/uimg/cms/img/153457247637140538.jpg", "https://image.suning.cn/uimg/cms/img/155063393731618280.jpg", "https://image.suning.cn/uimg/cms/img/155436662758687944.jpg", "https://image.suning.cn/uimg/cms/img/155436750670687310.jpg"],
        bigsrc: ["https://image.suning.cn/uimg/cms/img/155479003396789607.jpg", "https://image.suning.cn/uimg/cms/img/155479011283777405.jpg"]
    }, {
        head: ["医药馆", "超市频道"],
        text: [{
            title: "中西药品",
            list: ["【中西药品 满99减30】", "感冒咳嗽", "维矿物质", "心脑血管", "健脾益肾", "风湿骨伤", "解热镇痛", "妇科用药", "胃肠用药", "肝胆用药", "男科用药", "儿科用药", "泌尿生殖", "皮肤用药", "五官用药", "避孕药"],
        }, {
            title: "保健食品",
            list: ["【医药健康 满199减60】", "左旋肉碱", "蛋白质", "胶原蛋白", "螺旋藻", "鱼油", "卵磷脂", "益生菌", "酵素", "膳食纤维", "番茄红素", "维生素/钙", "辅酶Q10", "花青素", "叶酸"],
        }, {
            title: "传统滋补",
            list: ["阿胶膏", "三七", "当归", "冬虫夏草", "蜂蜜", "藏红花", "参类", "黄芪", "灵芝", "燕窝", "石斛/枫斗", "天麻", "鹿茸", "枸杞", "大枣"],
        }, {
            title: "医疗器械",
            list: ["血压计", "轮椅", "护理床", "制氧机", "雾化器", "助行器", "体温计", "拔罐器", "贴膏", "呼吸机", "洗鼻器", "血糖试纸", "血糖仪", "坐厕椅", "听诊器"],
        }, {
            title: "保健理疗",
            list: ["消毒护理", "中医保健", "药箱", "口腔健康", "面部健康", "私处护理", "康复护理", "按摩器材", "足部护理", "急救用品"],
        }, {
            title: "成人用品",
            list: ["避孕套", "情爱玩具", "验孕测孕", "情趣内衣", "飞机杯", "震动棒", "延迟喷剂", "人体润滑", "SM用品", "跳蛋"],
        }, {
            title: "隐形眼镜",
            list: ["透明隐形", "彩色隐形", "护理液", "润眼液", "隐形眼镜伴侣"],
        }, {
            title: "健康服务",
            list: ["基因检测", "健康体检"],
        }],
        src: ["https://image.suning.cn/uimg/cms/img/153988091613529478.jpg", "https://image.suning.cn/uimg/cms/img/153988092942433599.jpg", "https://image.suning.cn/uimg/cms/img/153988094905815695.jpg", "https://image.suning.cn/uimg/cms/img/153988096649548936.jpg", "https://image.suning.cn/uimg/cms/img/153988097948417839.jpg", "https://image.suning.cn/uimg/cms/img/155168915258736673.jpg", "https://image.suning.cn/uimg/cms/img/153988099986236736.jpg", "https://image.suning.cn/uimg/cms/img/153988100758355933.jpg"],
        bigsrc: ["https://image.suning.cn/uimg/cms/img/156456578555751187.jpg", "https://image.suning.cn/uimg/cms/img/156350119839848466.jpg"]
    }, {
        head: ["理财", "分期", "保险"],
        text: [{
            title: "苏宁金融",
            list: ["投资理财", "保险", "消费贷款", "苏宁卡", "企业贷款", "财富资讯", "苏宁金融APP"],
        }, {
            title: "投资理财",
            list: ["我的理财", "苏宁零钱宝", "基金", "保险理财", "票据理财", "企业理财"],
        }, {
            title: "消费贷款",
            list: ["开通攻略", "我的任性付", "我的账单"],
        }, {
            title: "保险",
            list: ["旅行险", "意外险", "健康险", "财产险", "延保"],
        }, {
            title: "便民",
            list: ["手机充值", "还款", "转账", "水电煤", "加油卡", "固话宽带", "有线电视"],
        }, {
            title: "旅行",
            list: ["机票", "酒店", "企业差旅"],
        }, {
            title: "苏宁卡",
            list: ["电子卡", "实体卡", "SU说卡"],
        }, {
            title: "苏宁有房务",
            list: ["二手房", "地图找房", "房产工具"],
        }, {
            title: "卡券充值",
            list: ["游戏充值", "Q币", "DNF", "LOL", "网易游戏", "盛大游戏", "视频会员"],
        }],
        src: ["https://image.suning.cn/uimg/cms/img/153993211986301577.jpg", "https://image.suning.cn/uimg/cms/img/153993212895262271.jpg", "https://image.suning.cn/uimg/cms/img/153993213866984722.jpg", "https://image.suning.cn/uimg/cms/img/153993214591046608.jpg", "https://image.suning.cn/uimg/cms/img/153993215357363949.jpg", "https://image.suning.cn/uimg/cms/img/153993216819351825.jpg"],
        bigsrc: ["https://image.suning.cn/uimg/cms/img/155125782519642597.jpg", "https://image.suning.cn/uimg/cms/img/153988051973837785.jpg"]
    }]
}
let n = new Nav(obj)
n.init()