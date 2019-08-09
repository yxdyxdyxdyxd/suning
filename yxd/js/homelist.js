class Homelist {
    constructor(data) {
        this.data = data;
    }
    init() {
        this.createList();
    }
    createList() {
        let html = `<div class="floor-show">
        <div class="title">
            <span class="border"></span>
            <p>猜你喜欢</p>
        </div>
        <div class="content">
            <ul class="clearfix">
               ${this.data.map((ele)=>{
                   return ` <li>
                   <a href=""><img src="${ele.src}" alt="">
                       <p class="title">${ele.text}</p>
                       <p class="price">${ele.price}</p>
                       <p class="label">${ele.icon}</p>
                   </a>
                   <div class="fot-label">
                       <span>找相似</span>
                   </div>
               </li>`
               }).join("")}
            </ul>
            <div class="end"><span class="line-left"></span>END<span class="line-right"></span></div>
        </div>
    </div>`
        $("#homelist").append(html);
    }
}
$.ajax({
    type: "get",
    url: "../serve/gethome.php",
    dataType: "json",
    success: function (response) {
        // console.log(response.data)
        let homelist = new Homelist(response.data)
        homelist.init()

    }
});