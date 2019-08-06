class Threef {
    constructor(data) {
        this.data = data;
    }
    init() {
        this.createbq();
        this.addEventWithBq();
        this.autoplay();
        this.addMouse();
        this.addClick();
        this.addpager();
        this.addEventTop();
        this.createLq();
        this.addEventLq();
    }
    //创建必抢这一楼层
    createbq() {
        let html = ` <div class="three-floor clearfix">
        <div class="little bq-areaa">
            <div class="title">
                <span></span>
                <p class="text">${this.data.first.left.title}</p>
                <a href="#">更多<i></i></a>
            </div>
            <div class="content">
                <ul class="bq-ul">
                    ${this.data.first.left.toggle.map((ele)=>{
                        return `<li>
                        <a href="">
                            <img src="${ele.bigimg}" alt="">
                            <p class="name">${ele.title}</p>
                            <p class="infor">${ele.text}</p>
                        </a>
                        <div class="img-show">
                           ${ele.samllimg.map((item)=>{
                               return ` <img src="${item}" alt="">`
                           }).join("")}
                        </div>
                    </li>`
                    }).join("")}
                 
                </ul>
                <span class="prev"></span>
                <span class="next"></span>
                <div class="pager-wrap">
                    <div class="banner-pager">
                        <div class="pager">${this.data.first.left.toggle.map((ele)=>{
                            return `<a href=""></a>`
                        }).join("")}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="little sh-area">
            <div class="title"> <span></span>
                <p class="text">${this.data.first.content.title}</p>
                <a href="#">更多<i></i></a>
            </div>
            <div class="content">
                <ul>
                   ${this.data.first.content.toggle.map((ele)=>{
                       return ` <li>
                       <a href="#">
                           <p class="name"><i></i>${ele.title}</p>
                           <p class="desc">${ele.text}</p>
                       </a>
                      ${ele.src.map((item)=>{
                          return `<img src="${item}" alt="" class="last-img">`
                      }).join("")}
                      
                   </li>`
                   }).join("")}
                </ul>
            </div>
        </div>
        <div class="little ph-area">
            <div class="title">
                <span></span>
                <p class="text">${this.data.first.right.title}</p>
                <a href="#">更多<i></i></a>
            </div>
            <div class="content">
                <div class="tab-list">
                    <ul>
                      ${this.data.first.right.top.map((ele)=>{
                          return `<li>${ele}</li>`
                      }).join("")}
                    </ul>
                </div>
               ${this.data.first.right.toggle.map((ele)=>{
                   return ` <div class="comm-list">
                   <div class="jx-wrap">
                       <ul>
                          ${ele.map((item)=>{
                              return ` <li><img src="${item.src}" alt="">
                              <div class="right-content">
                                  <p class="name">${item.text}</p>
                                  <p class="price">${item.price}</p>
                                  <p class="top">${item.no}</p>
                              </div>
                          </li>`
                          }).join("")}
                       </ul>
                      
                   </div>
               </div>`
               }).join("")}
            </div>
        </div>
    </div>`

        $("body").append(html);
    }
    //给必抢这一楼层添加功能
    addEventWithBq() {
        //滑过必抢清单出现切换按钮
        $(".bq-areaa").hover(function () {
            $(this).find(".next").toggleClass("cur");
            $(this).find(".prev").toggleClass("cur")
        });

    }
    //自动播放
    autoplay() {
        let self = this;
        this.left = 0;
        this.timer = setInterval(function () {
            self.left -= 390;
            if (self.left < -780) {
                self.left = 0
            }
            // $(".bq-ul").animate({
            //     "left": self.left + "px"
            // }, 200)
            $(".bq-ul").css({
                "left": self.left + "px"
            })
            self.addpager()
        }, 1000)



    }
    //鼠标滑入停止
    addMouse() {
        let self = this;
        $(".bq-areaa").hover(function () {
            clearInterval(self.timer);
        }, function () {
            self.autoplay();
        })
    }
    //鼠标点击切换
    addClick() {
        let self = this;
        $(".bq-areaa").find(".next").click(function () {
            self.left -= 390;
            if (self.left < -780) {
                self.left = 0
            }
            $(".bq-ul").css({
                "left": self.left + "px"
            })
            self.addpager()
        })
        $(".bq-areaa").find(".prev").click(function () {
            self.left += 390;
            if (self.left > 0) {
                self.left = -780
            }
            $(".bq-ul").css({
                "left": self.left + "px"
            })
            self.addpager()
        })

    }
    //给下面图片添加样式
    addpager() {
        let self = this;
        var index = Math.abs(this.left / 390);
        $(".banner-pager").find("a").eq(index).toggleClass("pager-cur").siblings().removeClass("pager-cur");
    }
    //给排行榜添加切换事件
    addEventTop() {
        //给第一个添加选中状态
        $(".ph-area").find(".tab-list").find("li").eq(0).addClass("li-cur")
        $(".comm-list").eq(0).addClass("comm-cur")
        //给列表移动距离
        let left = 0;
        $(".ph-area").find(".tab-list").find("li").click(function () {
            $(this).addClass("li-cur").siblings().removeClass("li-cur");
            $(".comm-list").eq($(this).index()).addClass("comm-cur").siblings().removeClass("comm-cur")
            if ($(this).index() == 3) {
                left = -142
            } else if ($(this).index() == 4) {
                left = -242
            } else if ($(this).index() == 5 || $(this).index() == 6) {
                left = -288
            } else if ($(this).index() == 2) {
                left = 0
            }
            $(".ph-area").find(".tab-list").find("ul").animate({
                "left": left + "px"
            }, 200)
        })

        // $(".ph-area").find(".tab-list").find("li").click(function () {})
    }
    //创建领券楼层
    createLq() {
        let html = ` <div class="three-floor clearfix">
        <div class="little quan-areaa">
            <div class="title">
                <span></span>
                <p class="text">${this.data.second.left.title}</p>
                <a href="#">更多<i></i></a>
            </div>
            <div class="content">
                <ul>
                   ${this.data.second.left.toggle.map((ele)=>{
                       return ` <li>
                       <div class="left-area">
                           <img src="${ele.src}" alt="">
                           <div class="text-area">
                               <p class="price">
                                   <i>￥</i>
                                   ${ele.price}
                               </p>
                               <p class="rule1">${ele.title}</p>
                               <p class="rule2"> ${ele.text}</p>
                           </div>

                       </div>
                       <a href="#">
                           <i>立即领取</i>
                           <span></span>
                       </a>
                   </li>`
                   }).join("")}
                </ul>
            </div>
        </div>
        <div class="little tm-area">
            <div class="title"> <span></span>
                <p class="text">${this.data.second.content.title}</p>
                <a href="#">更多<i></i></a>
            </div>
            <div class="content">
                <ul>
                   ${this.data.second.content.toggle.map((ele)=>{
                       return ` <li>
                       <a href="#" class="click-area">
                           <p class="name">${ele.title}</p>
                           <p class="desc">${ele.text}</p>
                       </a>
                       <a href="#" class="img-infor">
                           <div class="infor-wrapper">
                               <img src="${ele.big}" alt="" class="load">
                               <div class="hide-wrapper">
                                   <img src="${ele.samll}" alt="" class="logo">
                                   <span>立即进入</span>
                               </div>
                           </div>
                       </a>

                   </li>
`
                   }).join("")}
                </ul>
            </div>
        </div>
        <div class="little tm-area last-list">
            <div class="title"> <span></span>
                <p class="text">${this.data.second.right.title}</p>
                <a href="#">更多<i></i></a>
            </div>
            <div class="content">
                <ul>
                   ${this.data.second.right.toggle.map((ele)=>{
                       return ` <li>
                       <a href="#" class="click-area">
                           <p class="name">${ele.text}</p>
                           <p class="like">
                               <i><em></em>${ele.num}</i>人都说好

                           </p>
                       </a>
                       <img src="${ele.src}" alt="" class="load">
                   </li>`
                   }).join("")}

                </ul>
            </div>
        </div>
    </div>`

        $("body").append(html)
    }
    //给领券楼层的第二板块添加事件
    addEventLq() {
        $(".tm-area").eq(0).find("li").hover(function () {
            $(this).find(".infor-wrapper").css({
                "top": "-110px"
            })
        }, function () {
            $(this).find(".infor-wrapper").css({
                "top": "0px"
            })
        })
    }
}

let threefboj = {
    first: {
        left: {
            title: "必抢清单",
            toggle: [{
                bigimg: "https://image3.suning.cn/uimg/MFS/show/156412216050975700.jpg_0-0-702-319a?from=mobile",
                title: "享受运动快乐，运动蓝牙耳机帮你",
                text: "当今随着运动记步软件的出现，运动红包等运动达标返奖励也越来越多，这也促使很多人对开始运动健身。枯噪的…、防水防汗、时尚外形也让很多健身爱好者为之着迷。下面推荐几款优质的运动蓝牙耳机，让你享受运动快乐。",
                samllimg: ["https://image1.suning.cn/uimg/b2c/qrqm/0070831599000000011110458660_200x200.jpg?ver=2000&from=mobile", "https://image1.suning.cn/uimg/b2c/qrqm/0070145693000000011036175476_200x200.jpg?ver=2000&from=mobile", "https://image4.suning.cn/uimg/b2c/qrqm/0070064786000000000163035613_200x200.jpg?ver=2003&from=mobile"]
            }, {
                bigimg: "https://image3.suning.cn/uimg/MFS/show/156402138544683826.jpg_0-0-728-328a?from=mobile",
                title: "聚会开趴狂欢，便携音箱来助兴",
                text: "朋友聚会开趴狂欢，怎么能少了音乐的助兴呢？无线便携蓝牙音箱拥有时尚小巧的精致外观设计，摆在室内是一道…无论是在室内举行party还是在户外开趴，出色的重低音设计更可以营造震撼的气氛，感染在场的每个人。",
                samllimg: ["https://imgservice.suning.cn/uimg1/b2c/image/Us7hgkeByM1Kt4wQ4Hm8hw.jpg", "https://image3.suning.cn/uimg/b2c/qrqm/0000000000000000010307804112_200x200.jpg?ver=2000&from=mobile", "https://image1.suning.cn/uimg/b2c/qrqm/0000000000000000000826193921_200x200.jpg?ver=2000&from=mobile"]
            }, {
                bigimg: "https://image1.suning.cn/uimg/MFS/show/156437120444274277.jpg_0-0-710-319a?from=mobile",
                title: "贴身呵护，平角内裤释放型男魅力",
                text: "内裤作为我们的贴身衣物，其质量的好坏直接影响穿着舒适度，想要打造出更加舒适穿着，男士们对于内裤的选择更偏向于平角内裤，不仅可以将臀部和大腿紧密贴合，还能提升穿着舒适感，更将男士的魅力尽展，舒适不紧勒。",
                samllimg: ["https://image4.suning.cn/uimg/b2c/qrqm/0070150982000000000619039322_200x200.jpg?ver=2000&from=mobile", "https://image5.suning.cn/uimg/b2c/qrqm/0070209038000000010514884595_200x200.jpg?ver=2000&from=mobile", "https://image4.suning.cn/uimg/b2c/qrqm/0070232530000000010726209975_200x200.jpg?ver=2000&from=mobile"]
            }]
        },
        content: {
            title: "生活部落",
            toggle: [{
                title: "爪机党",
                text: "承包你的爱机",
                src: ["https://image1.suning.cn/uimg/cms/img/154684372634166723.jpg?from=mobile", "https://image5.suning.cn/uimg/cms/img/154684372317161806.jpg?from=mobile"]
            }, {
                title: "坚果小当家",
                text: "坚果我只吃精品",
                src: ["https://image2.suning.cn/uimg/cms/img/154684638737063071.png?from=mobile", "https://image2.suning.cn/uimg/cms/img/154684638427136611.jpg?from=mobile"]
            }, {
                title: "怕热星人",
                text: "冷热生活随心",
                src: ["https://image1.suning.cn/uimg/cms/img/154684372634166723.jpg?from=mobile", "https://image5.suning.cn/uimg/cms/img/154684372317161806.jpg?from=mobile"]
            }, {
                title: "宝宝营养师",
                text: "强生健体优选",
                src: ["https://image5.suning.cn/uimg/cms/img/154684645099268324.jpg?from=mobile", "https://image2.suning.cn/uimg/cms/img/154684644827127911.jpg?from=mobile"]
            }]
        },
        right: {
            title: "排行榜",
            top: ["精选", "纸品清洁", "休闲食品", "水饮冲调", "热门手机", "优选空调", "干货调味"],
            toggle: [
                [{
                    text: "洁柔（C&amp;S）抽纸 金尊柔韧系列 三层120抽*6包（S号）抽取式纸巾 面纸餐巾纸（新老包装交替发货",
                    price: "¥11.90",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/HNQioLLD7vL25oydpmmN1A.jpg?format=200h_200w_4e_80q",
                    no: "纸品清洁销量NO1"
                }, {
                    text: "洽洽 盐焗味开心果150g 坚果零食 洽洽出品",
                    price: "¥29.90",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/JglfVYDnJIRgcA55_Sc7Bg.jpg?format=200h_200w_4e_80q",
                    no: "休闲食品销量NO1"
                }, {
                    text: "美汁源果粒橙1.25L*12瓶/箱 可口可乐出品",
                    price: "¥80.00",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/t9qs3UkyZvEhT15dRpyzPw.jpg?format=200h_200w_4e_80q",
                    no: "水饮冲调销量NO1"
                }],
                [{
                    text: "华为/荣耀(honor)10青春 4GB+64GB 渐变蓝 全网通版移动联通电信4G 幻彩渐变 2400万AI自拍 6.21英寸90%屏占比珍珠屏 全面屏手机",
                    price: "¥999.00",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/YIo-9JynGE7_cHwnRzUhTw.jpg?format=200h_200w_4e_80q",
                    no: "热门手机销量NO1"
                }, {
                    text: "太太乐鸡精454克 调味品炒菜调味料替代味精 厨房调料",
                    price: "¥18.50",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/rJo4-O7SmVMRG2zZsXxjzg.jpg?format=200h_200w_4e_80q",
                    no: "干货调味销量NO1"
                }, {
                    text: "美的（Midea）1.5匹变频 静音节能 冷暖 3级能效 智能操控 家用挂机空调 KFR-35GW/WDBN8A3@",
                    price: "¥2399.00",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/rJo4-O7SmVMRG2zZsXxjzg.jpg?format=200h_200w_4e_80q",
                    no: "优选空调销量NO1"
                }, ],
                [{
                    text: "洽洽 盐焗味开心果150g 坚果零食 洽洽出品",
                    price: "¥29.90",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/rJo4-O7SmVMRG2zZsXxjzg.jpg?format=200h_200w_4e_80q",
                    no: "优选食品销量NO1"
                }, {
                    text: "奥利奥(OREO) 夹心饼干 零食 缤纷双果味蓝莓味+树莓味97g",
                    price: "¥8.40",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/7wEm2OnoaNcl7_ijsqTjmQ.jpg?format=200h_200w_4e_80q",
                    no: "优选食品销量NO1"
                }, {
                    text: "达利园 糕点 面包 零食 早餐包5枚200g(品质早餐)",
                    price: "¥8.50",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/gMvaLml94wb9FVhrUfd5uA.jpg?format=200h_200w_4e_80q",
                    no: "优选食品销量NO1"
                }],
                [{
                    text: "美汁源果粒橙1.25L*12瓶/箱 可口可乐出品",
                    price: "¥80.00",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/t9qs3UkyZvEhT15dRpyzPw.jpg?format=200h_200w_4e_80q",
                    no: "优选食品销量NO1"
                }, {
                    text: "屈臣氏（Watsons）苏打汽水330ml*24听 箱装 饮用水",
                    price: "¥86.00",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/HzbiCMUqvqMBxXYks2NcNQ.jpg?format=200h_200w_4e_80q",
                    no: "优选食品销量NO1"
                }, {
                    text: "夫山泉 茶π柚子绿茶500ml*15瓶 整箱",
                    price: "¥65.00",
                    src: "https://image.suning.cn/uimg/b2c/newcatentries/000…-000000000155267607_1.jpg?format=200h_200w_4e_80q",
                    no: "优选食品销量NO1"
                }],
                [{
                    text: "华为/荣耀(honor)10青春 4GB+64GB 渐变蓝 全网通版移动联通电信4G 幻彩渐变 2400万AI自拍 6.21英寸90%屏占比珍珠屏 全面屏手机",
                    price: "¥999.00",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/YIo-9JynGE7_cHwnRzUhTw.jpg?format=200h_200w_4e_80q",
                    no: "优选手机销量NO1"
                }, {
                    text: "小米 (MI) Redmi 红米Note 7 6GB+64GB 亮黑色 移动联通电信全网通4G手机 小水滴全面屏拍照游戏智能手机",
                    price: "¥1199.00",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/GFUlY5gXvlEH7ZhgX26mQw.jpg?format=200h_200w_4e_80q",
                    no: "优选手机销量NO1"
                }, {
                    text: "realme X 4800万像素 升降全面屏 VOOC 闪充 3.0 8GB+128GB蒸汽白 全网通双卡双待 正品智能手机",
                    price: "¥1649.00",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/kIenk4hRk1GDjg61O5f2bA.jpg?format=200h_200w_4e_80q",
                    no: "优选手机销量NO1"
                }],
                [{
                    text: "美的（Midea）1.5匹变频 静音节能 冷暖 3级能效 智能操控 家用挂机空调 KFR-35GW/WDBN8A3@",
                    price: "¥2399.00",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/RBA_kn_3mNsTTGB4DtbfgA.jpg?format=200h_200w_4e_80q",
                    no: "优选空调销量NO1"
                }, {
                    text: "格力（GREE）大1匹 变频 KFR-26GW/(26583)FNCb-A2 冷静享 2级能效 冷暖 挂机空调",
                    price: "¥3099.00",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/RUGXJ9L3wx-j5948_E_E4Q.jpg?format=200h_200w_4e_80q",
                    no: "优选空调销量NO1"
                }, {
                    text: "志高（CHIGO）&nbsp;1匹定频&nbsp;纯铜管链接&nbsp;冷暖&nbsp;挂机空调&nbsp;NEW-GD9F1H3",
                    price: "¥1599.00",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/DChZryIVxC3q5h4WMfCUqQ.jpg?format=200h_200w_4e_80q",
                    no: "优选空调销量NO1"
                }],
                [{
                    text: "太太乐鸡精454克 调味品炒菜调味料替代味精 厨房调料",
                    price: "¥18.50",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/RBA_kn_3mNsTTGB4DtbfgA.jpg?format=200h_200w_4e_80q",
                    no: "优选干货销量NO1"
                }, {
                    text: "百草味 方便主食 花溪牛肉米线260g 盒装方便面泡面速食酸辣粉宿舍即食满减",
                    price: "¥26.90",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/RUGXJ9L3wx-j5948_E_E4Q.jpg?format=200h_200w_4e_80q",
                    no: "优选干货销量NO1"
                }, {
                    text: "禾煜 桃胶200g罐装水蜜桃树脂 桃花泪配皂角米",
                    price: "¥34.90",
                    src: "https://imgservice.suning.cn/uimg1/b2c/image/DChZryIVxC3q5h4WMfCUqQ.jpg?format=200h_200w_4e_80q",
                    no: "优选干货销量NO1"
                }]
            ]
        }
    },
    second: {
        left: {
            title: "领券中心",
            toggle: [{
                src: "https://imgservice.suning.cn/uimg1/b2c/image/h8tD96Xijf66Zqh5GSw20Q.jpg_400w_400h_4e",
                price: "50",
                title: "满195用50",
                text: "限自营婴儿辅食品类部分商品使用",
            }, {
                src: "https://imgservice.suning.cn/uimg1/b2c/image/0oThuunSgFRXmWcq-ypaDg.jpg_400w_400h_4e",
                price: "20",
                title: "满99用20",
                text: "限自营母婴奶粉品类美素佳儿品牌新客户除一段型号商品使用",
            }, {
                src: "https://imgservice.suning.cn/uimg1/b2c/image/aOysHfLBdFro6M8AjV2m7Q.jpg_400w_400h_4e",
                price: "60",
                title: "满900用60",
                text: "限自营母婴奶粉品类雀巢品牌部分商品使用",
            }],
        },
        content: {
            title: "苏宁Outlets",
            toggle: [{
                big: "https://image.suning.cn/uimg/b2c/qrqm/0000000000000000010165732234_200x200.jpg?ver=2000&from=mobile",
                samll: "https://image.suning.cn/uimg/nmps/MPPCLOGO/1003249895C63_3.jpg?from=mobile",
                title: "菲洛嘉",
                text: "今日特价9.4折起"
            }, {
                big: "https://image.suning.cn/uimg/b2c/qrqm/0000000000000000000826229413_200x200.jpg?ver=2000&from=mobile",
                samll: "https://image.suning.cn/uimg/nmps/MPPCLOGO/100324989A396_3.jpg?from=mobile",
                title: "森田",
                text: "大牌精选9.3折起"
            }, {
                big: "https://image.suning.cn/uimg/b2c/qrqm/0010153608000000010604260382_200x200.jpg?ver=2000&from=mobile",
                samll: "https://image.suning.cn/uimg/nmps/MPPCLOGO/10032384608U4_3.jpg?from=mobile",
                title: "科爱元素",
                text: "爆款直降6.5折起"
            }, {
                big: "https://image.suning.cn/uimg/b2c/qrqm/0010153608000000000655612749_200x200.jpg?ver=2000&from=mobile",
                samll: "https://image.suning.cn/uimg/nmps/MPPCLOGO/100323846Y045_3.jpg?from=mobile",
                title: "何浩明",
                text: "限时抢购7.1折起"
            }],
        },
        right: {
            title: "人气好货",
            toggle: [{
                src: "../images/r1.jpg",
                text: "炎魔方多功能电暖茶几",
                num: 412,
            }, {
                src: "../images/r2.jpg",
                text: "索尼无线蓝牙回音壁",
                num: 360,
            }, {
                src: "../images/r3.jpg",
                text: "尤尼佳 柔软纸尿裤",
                num: 530,
            }, {
                src: "../images/r4.jpg",
                text: "小米笔记本电脑Pro",
                num: 635,
            }]
        }

    }
}
let threef = new Threef(threefboj)
threef.init()