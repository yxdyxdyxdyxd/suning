class T_floor {
    constructor(data) {
        this.data = data
    }
    init() {
        this.createf();
        this.createtime();
        this.addEventWithqg();
    }
    //创建满1000减100楼层
    createf() {
        let html = `  <div class="tj-floor">
        <img src="../images/man1000jian.png" class="tj-bg" alt="">
        <img src="../images/man500jian.png" alt="" class="tj-bg-head">
        <div class="conter">
            <div class="hcList">
                <ul>
                    ${this.data.f1.map((ele)=>{
                        return `<li>
                        <a href="#" class="img-warp"><img src="${ele.src}" alt=""></a>
                        <a href="#" class="tj-click">
                            <p class="title">${ele.title}</p>
                            <p class="desc">${ele.text}</p>
                        </a>
                    </li>`
                    }).join("")}

                </ul>
            </div>
        </div>
    </div>`

        $("#tj_floor").append(html);
    }
    //创建限时抢购楼层
    createtime() {

        let html = `    <div class="ms-floor">
        <div class="content-warp">
            <div class="conter">
                <div class="ms-title">
                    <img src="../images/xsqg.png" alt="">
                    <p class="cc-infor">距离下场</p>
                    <p class="time">
                        <span class="hour-num"></span>
                        <i>:</i>
                        <span class="minute-num"></span>
                        <i>:</i>
                        <span class="second-num"></span>
                    </p>
                    <div class="tab-list">
                        <ul>
                            <li><i></i>正在疯抢</li>
                            <li><i></i>即将开抢</li>
                            <li><i></i>即将开抢</li>
                        </ul>
                    </div>
                    <a href="#" class="right-more">更多抢购<i></i></a>
                </div>
                <div class="tab-area">
                    <div class="tab-content">
                      ${this.data.f2.map((ele)=>{
                     return `  <div class="con-list">
                     <ul>
                     ${ele.map((item)=>{
                     return ` <li>
                     <img src="${item.src}" alt="">
                         <p class="title">${item.text}</p>
                         <p class="price">
                         <span class="gbPrice">
                         <i>￥</i>
                        <em>${item.nowprice}</em>
                     </span>
                    <span class="refPrice"> <i>￥</i>
                    <em>${item.delprice}</em>
                      </span>
                     </p>
                    <p class="line">
                     <span style="width:${item.yq}px"></span>
                     </p>
                     <p class="precent">已抢<i>${item.yq}</i>%</p>
                     </li>`
                       }).join("")}
                         </ul>
                        <span class="prev"></span>
                         <span class="next"></span>
                      </div>`
                      }).join("")}

                    </div>
                    <a href="" class="right-img clearfix"><img src="../images/tej.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>`

        $("#tj_floor").append(html);
        //做倒计时效果
        setInterval(function () {
            let nowtime = new Date;
            let year = nowtime.getFullYear(); //获取当前年份
            let month = nowtime.getMonth(); //当前月份
            let day = nowtime.getDate(); //当前日期
            let hours = nowtime.getHours(); //当前小时
            let minute = nowtime.getMinutes(); //当前分钟
            let second = nowtime.getSeconds(); //当前秒


            let overtime = new Date(year, month, day, hours + 1, 0, 0);
            var minus = (overtime.getTime() - nowtime.getTime()) / 1000;
            let h = fn(Math.floor(minus / 60 / 60 % 24));
            let m = fn(Math.floor(minus / 60 % 60));
            let s = fn(Math.floor(minus % 60));

            $(".hour-num").html(h);
            $(".minute-num").html(m);
            $(".second-num").html(s);

            $(".tab-list").find("i").eq(0).html(hours + ".00场-");
            $(".tab-list").find("i").eq(1).html((hours + 1) >= 24 ? 0 + ".00场-" : (hours + 1) + ".00场-");
            $(".tab-list").find("i").eq(2).html((hours + 2) >= 25 ? 1 + ".00场-" : (hours + 2) + ".00场-")
        }, 1000);




        function fn(time) {
            if (time < 10) {
                var num = "0" + time;
            } else {
                var num = time;
            }
            return num;
        }


        //给正在活动的时间添加选中样式
        $(".tab-list").find("li").eq(0).addClass("li-cur")
        $(".con-list").eq(0).addClass("cur");
    }
    //给限时抢购楼层添加功能
    addEventWithqg() {
        $(".tab-list").find("li").hover(function () {
            $(this).addClass("li-cur").siblings().removeClass("li-cur");
            $(".con-list").eq($(this).index()).addClass("cur").siblings().removeClass("cur");

        })
        // 删除没到时间商品的样式
        $(".con-list").eq(1).find(".refPrice").remove();
        $(".con-list").eq(2).find(".refPrice").remove();
        $(".con-list").eq(1).find(".line").remove();
        $(".con-list").eq(2).find(".line").remove();
        $(".con-list").eq(1).find(".precent").remove();
        $(".con-list").eq(2).find(".precent").remove();
        let newp = $(`<p class="pretext">即将秒杀 敬请期待</p>`)
        // console.log($(".con-list").eq(2).find("li"))
        $(".con-list").not('.cur').find("li").append(newp);
        // $(".con-list").eq(1).find("li").append(newp);
        // var li = $(".con-list").eq(1).find('li').last();
        // var p = $(".con-list").eq(1).find('li').last().find('.pretext');
        // console.log(li, p)

        // $(".con-list").eq(2).find("li").append(newp);

        //滑入显示切换按钮，滑出隐藏
        $(".con-list").eq(0).hover(function () {
            $(this).children(".prev").toggleClass("cur")
            $(this).children(".next").toggleClass("cur")
        })
        //点击切换按钮更改内容
        let left = 0;
        //点击右边的按钮
        $(".con-list").eq(0).children(".next").click(function () {
            left -= 1000;
            if (left < -3000) {
                left = 0
            }
            // $(".con-list").children("ul").css({
            //     "left": left + "px"
            // })
            $(".con-list").children("ul").eq(0).animate({
                "left": left + "px"
            }, 200)

        })
        //点击左边的按钮时
        $(".con-list").eq(0).children(".prev").click(function () {
            left += 1000;
            if (left > 0) {
                left = -3000;
            }

            $(".con-list").children("ul").eq(0).animate({
                "left": left + "px"
            }, 200)
        })
    }


}

// let tf = {
//     f1: [{
//         src: "https://image.suning.cn/uimg/b2c/qrqm/0000000000000000000690105194.jpg?ver=2000&format=400w_400h_4e",
//         title: "手机通讯",
//         text: "爆款5折起"
//     }, {
//         src: "https://image.suning.cn/uimg/b2c/qrqm/0000000000000000000125969047.jpg?ver=2000&format=400w_400h_4e",
//         title: "空调战高温",
//         text: "爆款999元抢"
//     }, {
//         src: "http:////image.suning.cn/uimg/b2c/qrqm/0000000000000000010018102758.jpg?ver=2000&amp;format=400w_400h_4e",
//         title: "汽车用品",
//         text: "满199减120"
//     }, {
//         src: "https://image.suning.cn/uimg/b2c/qrqm/0000000000000000000185697002.jpg?ver=2000&format=400w_400h_4e",
//         title: "冰箱洗衣机",
//         text: "限抢100元券"
//     }, {
//         src: "https://image.suning.cn/uimg/b2c/qrqm/0000000000000000010569047144.jpg?ver=2000&format=400w_400h_4e",
//         title: "苏宁极物",
//         text: "满81减8.1"
//     }, {
//         src: "https://image2.suning.cn/uimg/nmps/MBLSPZT/100319264615983579picH_1_200x200.jpg",
//         title: "宝贝放肆购",
//         text: "满199减100"
//     }, {
//         src: "https://image.suning.cn/uimg/b2c/qrqm/0000000000000000010400501623.jpg?ver=2000&format=400w_400h_4e",
//         title: "电脑数码",
//         text: "爆款限量5折秒"
//     }, {
//         src: "https://image.suning.cn/uimg/b2c/qrqm/0000000000000000000102654187.jpg?ver=2000&format=400w_400h_4e",
//         title: "个人护理",
//         text: "专区2件5折"
//     }, {
//         src: "https://image.suning.cn/uimg/b2c/qrqm/0000000000000000000106226593.jpg?ver=2000&format=400w_400h_4e",
//         title: "厨卫电器",
//         text: "爆款499抢"
//     }, {
//         src: "https://image.suning.cn/uimg/b2c/qrqm/0000000000000000010061724538.jpg?ver=2000&format=400w_400h_4e",
//         title: "电视家影",
//         text: "爆款直降1000"
//     }],
//     f2: [
//         [{
//             src: "https://image2.suning.cn/uimg/nmps/MBLSPZT/100319264615983579picH_1_200x200.jpg",
//             text: "狮臣SHICHEN 2019年短袖T恤男夏季港风宽松圆领男士T恤男 潮青少年百搭 五分袖t恤 男 体恤男 TX652湖蓝 XXL",
//             nowprice: 39,
//             delprice: 198,
//             yq: 27
//         }, {
//             src: "https://image1.suning.cn/uimg/nmps/MBLSPZT/10031910310572288140picH_1_200x200.jpg",
//             text: "【满2件送1kg袋装】蓝汰4斤香氛植物薰衣草瓶装洗衣液 手洗机洗洗衣液",
//             nowprice: 12.9,
//             delprice: 39,
//             yq: 96
//         }, {
//             src: "https://image5.suning.cn/uimg/nmps/MBLSPZT/10031916311238685162picH_1_200x200.jpg",
//             text: "狮臣SHICHEN 2019年短袖T恤男夏季港风宽松圆领男士T恤男 潮青少年百搭 五分袖t恤 男 体恤男 TX652湖蓝 XXL",
//             nowprice: 8.8,
//             delprice: 19.9,
//             yq: 33
//         }, {
//             src: "https://image1.suning.cn/uimg/nmps/MBLSPZT/100319203765584915picH_1_200x200.jpg",
//             text: "苗家十八洞 陕西早酥梨青皮梨2.5斤装 单果重130-160g左右 肉质饱满 偶数发货",
//             nowprice: 89,
//             delprice: 198,
//             yq: 35
//         }, {
//             src: "https://image3.suning.cn/uimg/nmps/MBLSPZT/100319103171580409picH_1_200x200.jpg",
//             text: "【卿卿雨】新疆500克*3袋 核桃阿克苏薄皮核桃纸皮核桃孕妇原味一级散装核桃",
//             nowprice: 9.9,
//             delprice: 39,
//             yq: 43
//         }, {
//             src: "https://image5.suning.cn/uimg/nmps/MBLSPZT/10031912311011700960picH_1_200x200.jpg",
//             text: "滋源（SEEYOUNG）生姜强根健发洗护旅行套装60ml*2瓶",
//             nowprice: 19,
//             delprice: 88,
//             yq: 47
//         }, {
//             src: "https://image4.suning.cn/uimg/nmps/MBLSPZT/10031890410893518208picH_1_200x200.jpg",
//             text: "谜草集24k黄金密润寡肽露原液修护精华液100ml 保湿补水提拉紧致收缩毛孔淡化细纹肌底液",
//             nowprice: 25,
//             delprice: 59,
//             yq: 32
//         }, {
//             src: "https://image2.suning.cn/uimg/nmps/MBLSPZT/10031882410612577787picH_1_200x200.jpg",
//             text: "OKSJ【买1送1+充电头】苹果充电线 iPhone数据线苹果xsmax/6s/7/8plus/x手机平板正品快充数据线",
//             nowprice: 198,
//             delprice: 249,
//             yq: 44
//         }, {
//             src: "https://image3.suning.cn/uimg/nmps/MBLSPZT/10031920310569471386picH_1_200x200.jpg",
//             text: "雷萨LESA 4.3寸蓝屏通用后视镜行车记录仪双镜头预警测速1080P高清夜视倒车影像【电子狗】【双镜头】【16G卡】",
//             nowprice: 9.9,
//             delprice: 39.9,
//             yq: 30
//         }, {
//             src: "https://image4.suning.cn/uimg/nmps/MBLSPZT/100318804152411301picH_1_200x200.jpg",
//             text: "立客兴 西式糕点 紫薯味500g箱装(致青春面包早餐办公室夹心零食)",
//             nowprice: 223,
//             delprice: 278,
//             yq: 32
//         }, {
//             src: "https://image5.suning.cn/uimg/nmps/MBLSPZT/10029736710910663716picH_1_200x200.jpg",
//             text: "【买1送6】飞鹤幼儿配方奶粉 星阶优护3段900g克 三段（12-36个月，1-3岁适用）听罐装",
//             nowprice: 328,
//             delprice: 369,
//             yq: 37
//         }, {
//             src: "https://image1.suning.cn/uimg/nmps/MBLSPZT/100318803102005617picH_1_200x200.jpg",
//             text: "【袁姗姗推荐】【2瓶装】Schiff 旭福 Move Free氨基葡萄糖维骨力氨糖软骨素维骨力 红瓶基础款170粒x2瓶",
//             nowprice: 19.9,
//             delprice: 98,
//             yq: 42
//         }, {
//             src: "https://image2.suning.cn/uimg/nmps/MBLSPZT/100319203192571519picH_1_200x200.jpg",
//             text: "青少年中国古典四大名著 西游记 三国演义 红楼梦 水浒传全套4册世界经典文学名著宝库 HC",
//             nowprice: 17.9,
//             delprice: 49.9,
//             yq: 41
//         }, {
//             src: "https://image3.suning.cn/uimg/nmps/MBLSPZT/10031848311219976956picH_1_200x200.jpg",
//             text: "老闫家盐焗南瓜子500g独立小包 农家特产瓜籽熟小包装每日坚果零...",
//             nowprice: 19.9,
//             delprice: 180,
//             yq: 26
//         }, {
//             src: "https://image5.suning.cn/uimg/nmps/MBLSPZT/10031882410518580949picH_1_200x200.jpg",
//             text: "九型人格+微表情心理学+读心术+墨菲定律",
//             nowprice: 39.9,
//             delprice: 68,
//             yq: 44
//         }, {
//             src: "https://image3.suning.cn/uimg/nmps/MBLSPZT/10029736711036568391picH_1_200x200.jpg",
//             text: "百草味 糕点点心 华夫饼 1000g 早餐食品糕点心小吃休闲零食面包整箱",
//             nowprice: 32,
//             delprice: 36.8,
//             yq: 32
//         }, {
//             src: "https://image2.suning.cn/uimg/nmps/MBLSPZT/10031918311193236459picH_1_200x200.jpg",
//             text: "美国Gerber嘉宝3段草莓香蕉米粉227g（8个月以上）婴幼儿辅食米糊 单罐装",
//             nowprice: 218,
//             delprice: 1088,
//             yq: 50
//         }, {
//             src: "https://image5.suning.cn/uimg/nmps/MBLSPZT/10031882311012362718picH_1_200x200.jpg",
//             text: "法国原瓶进口 玛格威堡凯旋波尔多干红葡萄酒 13度波尔多AOC法定产区红酒进口 750ml*6支",
//             nowprice: 39.9,
//             delprice: 49,
//             yq: 33
//         }, {
//             src: "https://image1.suning.cn/uimg/nmps/MBLSPZT/10031838411149191243picH_1_200x200.jpg",
//             text: "劲迈燃油宝汽油添加剂汽车清理除积碳清洗剂燃油添加剂正品5支装立即拼团",
//             nowprice: 9.9,
//             delprice: 18.8,
//             yq: 46
//         }, {
//             src: "https://image2.suning.cn/uimg/nmps/MBLSPZT/10031884410861692927picH_1_200x200.jpg",
//             text: "【中华特色】 六安馆 农家黄泥咸鸭蛋60-70g*5枚 散装熟咸鸭蛋不咸不淡非海鸭蛋240g 华东",
//             nowprice: 95,
//             delprice: 219,
//             yq: 48
//         }],
//         [{
//             src: "https://image5.suning.cn/uimg/nmps/MBLSPZT/10031860410989699909picH_1_200x200.jpg",
//             text: "三星 Galaxy A60 6GB+64GB 元气版 丹宁黑 超广角拍照 黑瞳全视屏 移动联通电信全网通4G全面屏手机",
//             nowprice: 1499,

//         }, {
//             src: "https://image5.suning.cn/uimg/nmps/MBLSPZT/100319104141506121picH_1_200x200.jpg",
//             text: "月月舒（yueyueshu）卫生巾棉柔透气日用240mm超长夜用410mm套装组合9包 无香型护翼纤巧型姨妈巾 无荧光剂",
//             nowprice: 29.9,

//         }, {
//             src: "https://image2.suning.cn/uimg/nmps/MBLSPZT/100318804666291524picH_1_200x200.jpg",
//             text: "适宝康·Forkidcare 丝薄乐动成长裤XL28片 适合12-16kg婴幼儿拉拉裤超薄透气干爽",
//             nowprice: 69,

//         }, {
//             src: "https://image2.suning.cn/uimg/nmps/MBLSPZT/10031880410858625166picH_1_200x200.jpg",
//             text: "谷朗逆时光本色纸30包3层加厚抽纸经以色列严选配方不易破纤柔",
//             nowprice: 29.9,

//         }, {
//             src: "https://image1.suning.cn/uimg/nmps/MBLSPZT/10031886410590860505picH_1_200x200.jpg",
//             text: "苏泊尔（SUPOR）IH电磁电饭煲精铁球釜4L智能电饭锅多功能柴火饭 家用3-5人官方正品CFXB40HC803-120",
//             nowprice: 419,

//         }],
//         [{
//             src: "https://image4.suning.cn/uimg/nmps/MBLSPZT/10031860410894716356picH_1_200x200.jpg",
//             text: "三星 Galaxy A70 6GB+128GB 镭射黑 超大屏幕 屏下指纹 移动联通电信全网通4G全面屏手机",
//             nowprice: 2499,
//         }, {
//             src: "https://image1.suning.cn/uimg/nmps/MBLSPZT/10031910411183957941picH_1_200x200.jpg",
//             text: "【5斤大桶香氛皂液】莹利香水香氛洗衣液2.5kg瓶装香氛皂液持久留香机洗手洗不含荧光剂泡沫丰富深层去污衣物洗护除菌清洁",
//             nowprice: 10.9,

//         }, {
//             src: "https://image4.suning.cn/uimg/nmps/MBLSPZT/10031922410653260236picH_1_200x200.jpg",
//             text: "【第2份半价】川豫情红油面皮105g*5袋装 红油凉皮干拌面 方便面速食宽面条 陕西风味擀面皮 早餐夜宵伴侣",
//             nowprice: 16.8,

//         }, {
//             src: "https://image3.suning.cn/uimg/nmps/MBLSPZT/100318884152710308picH_1_200x200.jpg",
//             text: "长虹(CHANGHONG) 1.5匹 冷暖 定频 3级能效 静音 壁挂式空调KFR-35GW/DHID(W1-J)+2",
//             nowprice: 1699,

//         }, {
//             src: "https://image2.suning.cn/uimg/nmps/MBLSPZT/10031880410990244200picH_1_200x200.jpg",
//             text: "欧啦啦(OHLALA)拉拉裤XL码26片超薄透气 瞬吸干爽 男女宝宝通用",
//             nowprice: 38.8,

//         }]
//     ]

// }

$.getJSON("../json/tj_floor.json", (json) => (new T_floor(json)).init())
// console.log(JSON.stringify(tf))
// let t_f = new T_floor(tf)
// t_f.init()