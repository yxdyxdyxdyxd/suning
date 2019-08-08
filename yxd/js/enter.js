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





let phone = "";
let password = "";
$(".tijiao").click(function () {
    phone = $(".phone-inp").eq(0).find("input").val();
    password = $(".phone-inp").eq(1).find("input").val();
    if (phone.length == 0) {
        $(".hint").html("请输入用户名/邮箱/手机号")
        $(".hint").addClass("hint-cur");
        $(".whitebox").addClass("whitebox-cur")
    }
    if (password.length == 0) {
        $(".hint").html("请输入正确的登入密码")
        $(".hint").addClass("hint-cur");
        $(".whitebox").addClass("whitebox-cur")
    }
    $.ajax({
        type: "post",
        url: "../serve/getregister.php",
        dataType: "json",
        data: `phone=${phone}&password=${password}`,
        success: function (res) {
            alert(res)
            if (res == "恭喜你，登录成功！") {
                window.location.href =
                    "../html/home.html";
            }
        }

    })
})