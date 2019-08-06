class Floor {
    constructor(data) {
        this.data = data;
    }
    init() {
        this.createFloor()
        this.addcssWithF();
    }
    createFloor() {
        let html = `<div class="floor">
       ${this.data.map((ele)=>{
           return ` <div class="floor-left">
           <div class="title">
               <div class="title-name">
                   <span class="border"></span>
                   <p class="name">${ele.title}</p>
                   <div class="code">
                       <img src="../images/smallcode.png" alt="" class="code-img">
                       <div class="code-block">
                           <span></span>
                           <img src="../images/codesao.png" alt="">
                           <p>手机苏宁扫一扫</p>
                       </div>
                   </div>
               </div>
               <div class="navlist clearfix">
                  ${ele.list.map((item)=>{
                      return ` <a href="">${item}</a>`
                  }).join("")}
                  
               </div>
           </div>
           <div class="content">
               <div class="left-img">
                   <img src="${ele.bigimg}" alt="">
                   <div class="cover"></div>
                   <p class="img-name">${ele.bigtit}</p>
                   <p class="img-des">${ele.bigtext}</p>
               </div>
               <ul class="img-list clearfix">
                  ${ele.shoplist.map((item)=>{
                      return ` <li>
                      <p class="img-name">${item.title}</p>
                      <p class="img-desc">${item.text}</p>
                      <a href="" class="img-wrap"><img src="${item.src}" alt=""></a>
                  </li>
`
                  }).join("")}
               </ul>
           </div>
           <div class="bottom-list">
               <ul>
                 ${ele.bottomlist.map((item)=>{
                     return `  <li>
                     <p class="img-name">${item.title}</p>
                     <p class="img-desc">${item.text}</p>
                     <a href="" class="img-wrap"><img src="${item.src}" alt=""></a>
                 </li>`
                 }).join("")}
               </ul>
           </div>
           <div class="logo-list">
               <ul>
                 ${ele.logo.map((item)=>{
                     return `  <li><img src="${item}" alt=""></li>`
                 }).join("")}
               </ul>
           </div>
       </div>`
       }).join("")}

    </div>`
        $("body").append(html)
    }
    //给楼层的一些板块添加样式和事件
    addcssWithF() {
        $(".floor").find(".floor-left:odd").css({
            "margin-left": "10px"
        })

        $(".code").hover(function () {
            $(this).children(".code-block").addClass("code-cur")
        }, function () {
            $(this).children(".code-block").removeClass("code-cur")
        })
    }
}
let Flobj = [
    [{
        title: "热门手机",
        list: ["号卡宽带", "以旧换新", "手机维修", "手机周边", "正品好店"],
        bigimg: "https://image3.suning.cn/uimg/cms/img/156412646684767303.jpg",
        bigtit: "爆款五折起",
        bigtext: "抢818无门槛券",
        shoplist: [{
            title: "vivo Z5",
            text: "定金100至高抵200",
            src: "https://image4.suning.cn/uimg/cms/img/156457249890833752.jpg"
        }, {
            title: "华为Mate20X 5G",
            text: "新品预约",
            src: "https://image2.suning.cn/uimg/cms/img/156457273904812443.jpg"
        }, {
            title: "爆款商品",
            text: "领券立减150元",
            src: "https://image3.suning.cn/uimg/cms/img/156499483472571548.jpg"
        }, {
            title: "荣耀9X PRO",
            text: "预定赠耳机",
            src: "https://image4.suning.cn/uimg/cms/img/156445162057577553.jpg"
        }],
        bottomlist: [{
            title: "红米K20 Pro",
            text: "限时立省",
            src: "https://image4.suning.cn/uimg/cms/img/156457298294168282.jpg"
        }, {
            title: "OPPO K3",
            text: "限时直降",
            src: "https://image3.suning.cn/uimg/cms/img/156457278349186031.jpg"
        }, {
            title: "realmeX",
            text: "限量抢购",
            src: "https://image4.suning.cn/uimg/cms/img/156500473608647907.jpg"
        }],
        logo: ["https://image1.suning.cn/uimg/cms/img/153112822312993708.jpg", "https://image5.suning.cn/uimg/cms/img/154893314624483768.jpg", "https://image1.suning.cn/uimg/cms/img/154182145728746222.jpg", "https://image1.suning.cn/uimg/cms/img/154656458938141082.jpg", "https://image3.suning.cn/uimg/cms/img/153352741429459024.jpg", "https://image2.suning.cn/uimg/cms/img/153715607929280448.jpg"]

    }, {
        title: "电脑办公",
        list: ["企业馆", "电竞馆", "学生惠", "相机频道", "以旧换新"],
        bigimg: "https://image2.suning.cn/uimg/cms/img/156473764816541890.jpg",
        bigtit: "爆款限量五折秒",
        bigtext: "荣耀平板低至499",
        shoplist: [{
            title: "索尼全画幅微单",
            text: "领券最高直降600元",
            src: "https://image1.suning.cn/uimg/cms/img/156458760784529346.jpg"
        }, {
            title: "电脑精选好货",
            text: "鼠标9块9包邮",
            src: "https://image3.suning.cn/uimg/cms/img/156405403152227764.jpg"
        }, {
            title: "小米购物节",
            text: "爆款直降千元",
            src: "https://image1.suning.cn/uimg/cms/img/156499058579664175.jpg"
        }, {
            title: "戴尔劲燃一夏",
            text: "轻薄本2499抢",
            src: "https://image2.suning.cn/uimg/cms/img/156473820489852975.jpg"
        }],
        bottomlist: [{
            title: "机械师精选",
            text: "9代新品直降",
            src: "https://image1.suning.cn/uimg/cms/img/156473907338944141.jpg"
        }, {
            title: "英特尔傲腾",
            text: "加速黑科技",
            src: "https://image3.suning.cn/uimg/cms/img/156352942350972312.jpg"
        }, {
            title: "影音会场",
            text: "新品0元试用",
            src: "https://image2.suning.cn/uimg/cms/img/156306817972830532.jpg"
        }],
        logo: ["https://image1.suning.cn/uimg/cms/img/154656465157825741.jpg", "https://image4.suning.cn/uimg/cms/img/154656517650030469.jpg", "https://image3.suning.cn/uimg/cms/img/153112545299127867.jpg", "https://image1.suning.cn/uimg/cms/img/153112547893244055.jpg", "https://image2.suning.cn/uimg/cms/img/155116249648963624.jpg", "https://image4.suning.cn/uimg/cms/img/153112555323922150.jpg"]

    }],
    [{
        title: "智能数码",
        list: ["鹿客门锁", "平衡车", "智能手表", "智能音箱", "智能频道"],
        bigimg: "https://image2.suning.cn/uimg/cms/img/154708522623243257.jpg",
        bigtit: "智能数码",
        bigtext: "小度1S 万能遥控器",
        shoplist: [{
            title: "智能硬件会场",
            text: "智能手环99元起",
            src: "https://image2.suning.cn/uimg/cms/img/155969822371664753.jpg"
        }, {
            title: "智能数码",
            text: "AirPods 1159抢",
            src: "https://image3.suning.cn/uimg/cms/img/156488912551336361.jpg"
        }, {
            title: "配件专场",
            text: "全场9.9元起",
            src: "https://image1.suning.cn/uimg/cms/img/156101482636468262.jpg"
        }, {
            title: "潮品好货",
            text: "尖货低至79元",
            src: "https://image3.suning.cn/uimg/cms/img/155969954677518189.jpg"
        }],
        bottomlist: [{
            title: "影音会场",
            text: "新品0元试用",
            src: "https://image2.suning.cn/uimg/cms/img/156306817972830532.jpg"
        }, {
            title: "阿尔郎",
            text: "送安全护具",
            src: "https://image4.suning.cn/uimg/cms/img/156497757780377933.jpg"
        }, {
            title: "金霸王",
            text: "限时直降",
            src: "https://image4.suning.cn/uimg/cms/img/156411354338981443.jpg"
        }],
        logo: ["https://image1.suning.cn/uimg/cms/img/153086443546652733.jpg", "https://image4.suning.cn/uimg/cms/img/153086445265073284.png", "https://image2.suning.cn/uimg/cms/img/153086449522262076.jpg", "https://image1.suning.cn/uimg/cms/img/153291737763511242.jpg", "https://image3.suning.cn/uimg/cms/img/155168633768297227.png", "https://image3.suning.cn/uimg/cms/img/153086455003345744.jpg"]

    }, {
        title: "汽车",
        list: ["车管家", "汽车用品", "品质二手车", "特价新车", "苏宁新车"],
        bigimg: "https://image5.suning.cn/uimg/cms/img/156455734893978414.jpg",
        bigtit: "汽车用品",
        bigtext: "满199减120",
        shoplist: [{
            title: "优选新车",
            text: "众筹抽1000苏宁卡",
            src: "https://image1.suning.cn/uimg/cms/img/155747360823126720.jpg"
        }, {
            title: "品质二手车",
            text: "首付低至一成",
            src: "https://image4.suning.cn/uimg/cms/img/153258767323781233.jpg"
        }, {
            title: "分期购车",
            text: "首付5% 妙提新车",
            src: "https://image3.suning.cn/uimg/cms/img/155410178794818335.jpg"
        }, {
            title: "电摩提前抢",
            text: "满3499减618",
            src: "https://image3.suning.cn/uimg/cms/img/156332664966512629.jpg"
        }],
        bottomlist: [{
            title: "壳牌",
            text: "满199减30",
            src: "https://image1.suning.cn/uimg/cms/img/156074069947738881.jpg"
        }, {
            title: "美孚",
            text: "满额赠豪礼",
            src: "https://image5.suning.cn/uimg/cms/img/156074066032127930.jpg"
        }, {
            title: "嘉实多",
            text: "满199减20",
            src: "https://image5.suning.cn/uimg/cms/img/156456025373957382.jpg"
        }],
        logo: ["https://image4.suning.cn/uimg/cms/img/153086457796676728.jpg", "https://image2.suning.cn/uimg/cms/img/153086460354116156.jpg", "https://image5.suning.cn/uimg/cms/img/153086462230911095.jpg", "https://image1.suning.cn/uimg/cms/img/153305082813830649.jpg", "https://image1.suning.cn/uimg/cms/img/153305093405478787.jpg", "https://image3.suning.cn/uimg/cms/img/153305097760658711.jpg"]

    }],
    [{
        title: "生活家电",
        list: ["个护健康", "厨具频道", "生活家电"],
        bigimg: "https://image1.suning.cn/uimg/cms/img/156203761733786633.jpg",
        bigtit: "生活家电",
        bigtext: "玩转夏天",
        shoplist: [{
            title: "除湿防潮",
            text: "除湿机低至79",
            src: "https://image3.suning.cn/uimg/cms/img/156203794363473817.jpg"
        }, {
            title: "个护健康",
            text: "爆款买赠好礼",
            src: "https://image3.suning.cn/uimg/cms/img/156361420642263151.jpg"
        }, {
            title: "清凉风扇",
            text: "暑期清凉趴",
            src: "https://image3.suning.cn/uimg/cms/img/156203799984250901.jpg"
        }, {
            title: "吸尘除螨",
            text: "清洁神器立减",
            src: "https://image3.suning.cn/uimg/cms/img/156203802600621513.jpg"
        }],
        bottomlist: [{
            title: "西式厨电",
            text: "夏日放价",
            src: "https://image4.suning.cn/uimg/cms/img/156267276581046450.jpg"
        }, {
            title: "炊具厨具",
            text: "爆款直降",
            src: "https://image3.suning.cn/uimg/cms/img/156267261892740814.jpg"
        }, {
            title: "空气净化",
            text: "醛力以赴",
            src: "https://image2.suning.cn/uimg/cms/img/156267272956044564.jpg"
        }],
        logo: ["https://image1.suning.cn/uimg/cms/img/155969788159348382.jpg", "https://image5.suning.cn/uimg/cms/img/156134046753126764.jpg", "https://image1.suning.cn/uimg/cms/img/155969831422496608.jpg", "https://image5.suning.cn/uimg/cms/img/156013163300048834.jpg", "https://image2.suning.cn/uimg/cms/img/154461799067479251.jpg", "https://image1.suning.cn/uimg/cms/img/154449568300349153.jpg"]

    }, {
        title: "家装建材",
        list: ["家装馆", "门浴馆", "家居馆", "家装狂欢购"],
        bigimg: "https://image4.suning.cn/uimg/cms/img/154653870609348462.jpg",
        bigtit: "家装盛典",
        bigtext: "精选大牌聚惠",
        shoplist: [{
            title: "A家家具",
            text: "领券立减50",
            src: "https://image1.suning.cn/uimg/cms/img/154129821852910049.png"
        }, {
            title: "卫浴馆",
            text: "每100减20",
            src: "https://image3.suning.cn/uimg/cms/img/153717857974338360.png"
        }, {
            title: "五金电工",
            text: "爆款3件7折",
            src: "https://image1.suning.cn/uimg/cms/img/156353784338011356.jpg"
        }, {
            title: "多乐士品牌日",
            text: "爆款限时特价",
            src: "https://image4.suning.cn/uimg/cms/img/155920224253389721.jpg"
        }],
        bottomlist: [{
            title: "家具馆",
            text: "爆款直降",
            src: "https://image2.suning.cn/uimg/cms/img/153112617006914404.png"
        }, {
            title: "卫浴馆",
            text: "大牌抢先定",
            src: "https://image5.suning.cn/uimg/cms/img/153112620958496162.png"
        }, {
            title: "家装馆",
            text: "极速物流",
            src: "https://image5.suning.cn/uimg/cms/img/153136839358170815.png"
        }],
        logo: ["https://image5.suning.cn/uimg/cms/img/153121682599711588.jpg", "https://image1.suning.cn/uimg/cms/img/154701587891158675.png", "https://image4.suning.cn/uimg/cms/img/155780118538879428.jpg", "https://image3.suning.cn/uimg/cms/img/153995065229987856.jpg", "https://image5.suning.cn/uimg/cms/img/154038128234705843.jpg", "https://image5.suning.cn/uimg/cms/img/156025837851586059.jpg"]

    }],
    [{
        title: "美妈萌娃",
        list: ["营养奶粉", "尿裤精选", "玩具装备", "车床座椅"],
        bigimg: "https://image1.suning.cn/uimg/cms/img/156076553681033082.jpg",
        bigtit: "母婴优选",
        bigtext: "每日爆款限量抢",
        shoplist: [{
            title: "营养奶粉",
            text: "爆款8折起",
            src: "https://image4.suning.cn/uimg/cms/img/156378505433422583.jpg"
        }, {
            title: "品质尿裤",
            text: "限量抢神券",
            src: "https://image3.suning.cn/uimg/cms/img/156342086539221142.jpg"
        }, {
            title: "用品洗护",
            text: "2件7折",
            src: "https://image5.suning.cn/uimg/cms/img/156378615394295460.jpg"
        }, {
            title: "孕妈必备",
            text: "满99减30",
            src: "https://image5.suning.cn/uimg/cms/img/155644458060563713.jpg"
        }],
        bottomlist: [{
            title: "玩具钜惠",
            text: "满199减50",
            src: "https://image1.suning.cn/uimg/cms/img/156378513554742571.jpg"
        }, {
            title: "童装童鞋",
            text: "99元4件",
            src: "https://image2.suning.cn/uimg/cms/img/155644481295877502.jpg"
        }, {
            title: "车床座椅",
            text: "每99减20",
            src: "https://image5.suning.cn/uimg/cms/img/156378525724365878.jpg"
        }],
        logo: ["https://image3.suning.cn/uimg/cms/img/153084810240375579.jpg", "https://image3.suning.cn/uimg/cms/img/154237690422832855.jpg", "https://image1.suning.cn/uimg/cms/img/155013941321072956.jpg", "https://image2.suning.cn/uimg/cms/img/155539665432418996.jpg", "https://image3.suning.cn/uimg/cms/img/155539665871386873.jpg", "https://image2.suning.cn/uimg/cms/img/156024768567436777.png"]

    }, {
        title: "美妆个护",
        list: ["洗护发", "面霜", "卫生巾", "面膜"],
        bigimg: "https://image1.suning.cn/uimg/cms/img/156498787230307831.jpg",
        bigtit: "美妆狂欢",
        bigtext: "满99减50",
        shoplist: [{
            title: "个人护理",
            text: "专区2件5折",
            src: "https://image4.suning.cn/uimg/cms/img/155278768066287705.png"
        }, {
            title: "百雀羚",
            text: "爆款直降",
            src: "https://image5.suning.cn/uimg/cms/img/155619078923106434.jpg"
        }, {
            title: "欧莱雅",
            text: "满199减100",
            src: "https://image2.suning.cn/uimg/cms/img/156042832459612941.jpg"
        }, {
            title: "宝洁",
            text: "爆款5折起",
            src: "https://image1.suning.cn/uimg/cms/img/153112744705616323.jpg"
        }],
        bottomlist: [{
            title: "黑人",
            text: "爆款直降",
            src: "https://image1.suning.cn/uimg/cms/img/154163975780314188.jpg"
        }, {
            title: "自然堂",
            text: "爆款低至5折",
            src: "https://image3.suning.cn/uimg/cms/img/154468874915893263.jpg"
        }, {
            title: "七度空间",
            text: "爆款直降",
            src: "https://image1.suning.cn/uimg/cms/img/154200834926553870.jpg"
        }],
        logo: ["https://image4.suning.cn/uimg/cms/img/153112633223252395.jpg", "https://image2.suning.cn/uimg/cms/img/154450024583034113.jpg", "https://image1.suning.cn/uimg/cms/img/153112645196800188.jpg", "https://image5.suning.cn/uimg/cms/img/153112649164540828.png", "https://image2.suning.cn/uimg/cms/img/153112652019542033.jpg", "https://image2.suning.cn/uimg/cms/img/153112656578074845.jpg"]

    }],
    [{
        title: "金融",
        list: ["万份豪礼", "一折过高速", "新客反20元", "返利12%"],
        bigimg: "https://image5.suning.cn/uimg/cms/img/156456409794516358.png",
        bigtit: "开通任性贷",
        bigtext: "最高得￥30万额度",
        shoplist: [{
            title: "优惠出行嗨一夏",
            text: "一折过高速",
            src: "https://image4.suning.cn/uimg/cms/img/155927162090121114.jpg"
        }, {
            title: "光大信用卡",
            text: "最高立减50元",
            src: "https://image1.suning.cn/uimg/cms/img/155780263945184835.jpg"
        }, {
            title: "抽华为手机",
            text: "玩转818",
            src: "https://image1.suning.cn/uimg/cms/img/156453930702223743.jpg"
        }, {
            title: "Apple品牌专属",
            text: "抢6期免息券",
            src: "https://image5.suning.cn/uimg/cms/img/156453943101571517.jpg"
        }],
        bottomlist: [{
            title: "燃购一夏SU说惊喜",
            text: "每天赢￥4999",
            src: "https://image2.suning.cn/uimg/cms/img/156453961286407317.jpg"
        }, {
            title: "把握基遇",
            text: "获超额收益",
            src: "https://image2.suning.cn/uimg/cms/img/155927145496247166.jpg"
        }, {
            title: "购物+延保",
            text: "换新无忧",
            src: "https://image5.suning.cn/uimg/cms/img/156453995595657965.png"
        }],
        logo: ["https://image1.suning.cn/uimg/cms/img/153112603799851699.jpg", "https://image3.suning.cn/uimg/cms/img/154840406561843426.jpg", "https://image1.suning.cn/uimg/cms/img/153112612302055479.jpg", "https://image4.suning.cn/uimg/cms/img/155746891003344486.jpg", "https://image1.suning.cn/uimg/cms/img/153112618564970184.jpg", "https://image3.suning.cn/uimg/cms/img/156263958970455448.jpg"]

    }, {
        title: "阅读",
        list: ["人文社科", "教辅", "文学", "童书", "经管励志"],
        bigimg: "https://image5.suning.cn/uimg/cms/img/155376595795622365.jpg",
        bigtit: "苏宁图书",
        bigtext: "多读书 读好书",
        shoplist: [{
            title: "果麦文化",
            text: "更好的精神食粮",
            src: "https://image2.suning.cn/uimg/cms/img/155376600967724312.jpg"
        }, {
            title: "华研图书",
            text: "轻松考高分",
            src: "https://image5.suning.cn/uimg/cms/img/155376614034881640.jpg"
        }, {
            title: "看客图书",
            text: "童书天地",
            src: "https://image5.suning.cn/uimg/cms/img/153441420931757920.jpg"
        }, {
            title: "童书频道",
            text: "孩子的书都在这里",
            src: "https://image2.suning.cn/uimg/cms/img/153441423498533033.jpg"
        }],
        bottomlist: [{
            title: "当当网",
            text: "敢做敢当当",
            src: "https://image1.suning.cn/uimg/cms/img/154865594191201317.png"
        }, {
            title: "华阳文化",
            text: "读书正当时",
            src: "https://image1.suning.cn/uimg/cms/img/153441428342744216.jpg"
        }, {
            title: "凤凰高端",
            text: "童书放肆购",
            src: "https://image2.suning.cn/uimg/cms/img/153441431372446525.jpg"
        }],
        logo: ["https://image3.suning.cn/uimg/cms/img/153112629592786431.jpg", "https://image2.suning.cn/uimg/cms/img/153112633447222227.jpg", "https://image2.suning.cn/uimg/cms/img/153112635803645323.jpg", "https://image5.suning.cn/uimg/cms/img/155540610620776428.jpg", "https://image4.suning.cn/uimg/cms/img/153112643045065340.jpg", "https://image4.suning.cn/uimg/cms/img/153112645612626045.jpg"]

    }]
]