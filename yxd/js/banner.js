class BannerManager {
    constructor() {
        this.sliderBox = $(".slider-box-item");
        this.index = 0;
        this.sliderItemCount = $(".slider-box-item").length;
        this.timer = null;
    }
    init() {
        this.autoPlay();
        this.addClickHandle();
        this.addMouseHandle();
        this.switchSlideNavItem();
        this.addClickNacItemHandle();
    }
    autoPlay() {
        this.sliderBox.eq(0).css({
            "display": "block"
        })
        this.timer = setInterval(() => {
            this.next();
        }, 2000);
    }
    //点击事件
    addClickHandle() {
        let self = this;
        $(".slider-control").on("click", "span", function (e) {
            if (e.target.className == "prev") {
                self.prev();

            } else if (e.target.className == "next") {
                self.next();

            }

        })
    }
    next() {
        this.index++;
        if (this.index > (this.sliderItemCount - 1)) {
            this.index = 0;
        }
        this.sliderBox.eq(this.index).stop().fadeIn(100).siblings().fadeOut(100);
        this.switchSlideNavItem();
    }
    prev() {
        this.index--;
        /* 临界值检查 */
        if (this.index < 0) {
            this.index = this.sliderItemCount - 1;
        }
        this.sliderBox.eq(this.index).stop().fadeIn(100).siblings().fadeOut(100);
        this.switchSlideNavItem();
    }
    //鼠标移入图片停止
    addMouseHandle() {
        let self = this;
        this.sliderBox.children("img").hover(function () {
            clearInterval(self.timer);
        }, function () {
            self.autoPlay();
        })

        $(".slider-control").hover(function () {
            clearInterval(self.timer);
        }, function () {
            self.autoPlay();
        })

        $(".slider-warp").hover(function () {
            clearInterval(self.timer);
        }, function () {
            self.autoPlay();
        })
    }
    switchSlideNavItem() {

        $(".slider-nav-item").eq(this.index).toggleClass("current").siblings().removeClass("current");
    }
    addClickNacItemHandle() {
        let self = this;
        $(".slider-nav-item").mouseover(function () {
            self.index = $(this).index();
            self.switchSlideNavItem();
            self.sliderBox.eq($(this).index()).stop().fadeIn(100).siblings().fadeOut(100);
        })
    }
}
let b = new BannerManager();
b.init();