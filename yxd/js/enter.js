$(".guide").remove();
//给账户登入默认
$(".tab").find("span").eq(1).addClass("span-cur");
$(".user").addClass("user-cur")
//点击扫码登入切换
$(".tab").find("span").click(function () {
    $(this).addClass("span-cur").siblings().removeClass("span-cur")
    if ($(this).index() == 0) {
        $(".copy").addClass("copy-cur");
        $(".user").removeClass("user-cur")
    }
    if ($(this).index() == 1) {
        $(".copy").removeClass("copy-cur");
        $(".user").addClass("user-cur")
    }
})
// -----------------------------------------
let queryString = "";
if (Cookie.hasItem("phone") && Cookie.hasItem("password")) {
    let phone = Cookie.getItem("phone");
    let password = Cookie.getItem("password");
    let o = {
        phone,
        password
    };
    queryString = $.param(o);
    network(queryString)

}
// else {
//     $(".tijiao").click(function () {
//         let usm = $(".phone-inp").eq(0).find("input").val();
//         let pwd = $(".phone-inp").eq(1).find("input").val();
//         if ($("#checkbox").is(":checked")) {
//             Cookie.setItem("phone", usm);
//             Cookie.setItem("password", pwd);
//         }
//         queryString = `phone=${usm}&password=${pwd}`;
//         network(queryString)
//     })
// }


// ------------------------------------------

$(".tijiao").click(function () {
    let phone = "";
    let password = "";
    let obj = {}
    obj.phone = $(".phone-inp").eq(0).find("input").val();
    obj.password = $(".phone-inp").eq(1).find("input").val();
    if (obj.phone.length == 0) {
        $(".hint").html("请输入用户名/邮箱/手机号")
        $(".hint").addClass("hint-cur");
        $(".whitebox").addClass("whitebox-cur")
    }
    if (obj.password.length == 0) {
        $(".hint").html("请输入正确的登入密码")
        $(".hint").addClass("hint-cur");
        $(".whitebox").addClass("whitebox-cur")
    }
    if ($("#checkbox").is(":checked")) {
        Cookie.setItem("phone", obj.phone);
        Cookie.setItem("password", obj.password);
    }
    queryString = $.param(obj);
    network(queryString);
})


function network(queryString) {
    $.ajax({
        type: "post",
        url: "../serve/getregister.php",
        dataType: "json",
        data: queryString,
        success: function (res) {
            alert(res)
            if (res == "恭喜你，登录成功！") {
                window.location.href =
                    "../html/home.html";
            } else {
                Cookie.clear();
            }
        }

    })
}