$(".guide").remove();
let regPhone = /^1[3-9]\d{9}$/;
let regPassword = /^[a-zA-Z0-9]{6,16}$/;
let _phone = "";
let _msg = "";
let _password = "";
let msgCodeText = parseInt(Math.random() * 1000000);
console.log(msgCodeText)

//给手机号码添加事件
$(".phone").eq(0).find("input").blur(function () {
    let text = $.trim($(this).val());
    _phone = text;
    if (text.length == 0) {
        $(this).parent().addClass("error");
        $(this).parent().next(".hint").html("手机号码不能为空")

    } else if (!regPhone.test(text)) {
        $(this).parent().addClass("error");
        $(this).parent().next(".hint").html("请输入正确的手机号码")
    } else {
        $(this).parent().removeClass("error");
        $(this).parent().next(".hint").html("")
    }
})

//给密码添加事件

$(".phone").eq(2).find("input").blur(function () {
    $(this).parent().next(".hint").css({
        "color": "red"
    })
    let text = $.trim($(this).val());
    _password = text;
    if (text.length == 0) {
        $(this).parent().addClass("error");
        $(this).parent().next(".hint").html("密码不能为空")

    } else if (!regPassword.test(text)) {
        $(this).parent().addClass("error");
        $(this).parent().next(".hint").html("密码格式不正确")
    } else {
        $(this).parent().removeClass("error");
        $(this).parent().next(".hint").html("")
    }
})

//密码框获取焦点
$(".phone").eq(2).find("input").focus(function () {
    $(this).parent().next(".hint").html("6-16个字符，由字母，数字和符号的两种以上组合。")
    $(this).parent().next(".hint").css({
        "color": "#333"
    })
})

//手机验证码

//短信接口
function formatterDateTime() {
    var date = new Date()
    var month = date.getMonth() + 1
    var datetime = date.getFullYear() +
        "" // "年"
        +
        (month >= 10 ? month : "0" + month) +
        "" // "月"
        +
        (date.getDate() < 10 ? "0" + date.getDate() : date
            .getDate()) +
        "" +
        (date.getHours() < 10 ? "0" + date.getHours() : date
            .getHours()) +
        "" +
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
            .getMinutes()) +
        "" +
        (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
            .getSeconds());
    return datetime;
}

$(".send-msg").click(function () {
    // msgCodeText = parseInt(Math.random() * 1000000);
    // console.log(msgCodeText)
    /* 检查手机号码是否正确 */
    let text = $.trim($(".phone").eq(0).find("input").val());
    _phone = text;
    console.log(_phone)
    if (text.length != 0 && regPhone.test(text)) {
        /* 发送网络请求：发短信 */
        $.ajax({
            type: 'post',
            url: 'http://route.showapi.com/28-1',
            dataType: 'json',
            data: {
                "showapi_timestamp": formatterDateTime(),
                "showapi_appid": '101244', //这里需要改成自己的appid
                "showapi_sign": '85e282435ab74e139e3208036982580b', //这里需要改成自己的应用的密钥secret
                "mobile": text,
                "content": `{"code":${msgCodeText},"minute":"3","comName":"苏宁易购"}`,
                "tNum": "T150606060601",
                "big_msg": ""
            },
            error: function (XmlHttpRequest, textStatus, errorThrown) {
                alert("操作失败!");
            },
            success: function (result) {
                // console.log(result) //console变量在ie低版本下不能用
                // alert(result.showapi_res_code)
            }
        });
        var count = 60;
        var timer = setInterval(function () {
            count--;
            if (count <= 0) {
                $(".send-msg").html("发送短信验证码");
                clearInterval(timer);
            } else {
                $(".send-msg").html("重试 " + count + "s");
            }
        }, 1000);

    } else {
        alert("手机号码不正确")
    }

})

//给短信添加事件

$(".phone").eq(1).find("input").blur(function () {
    let text = $.trim($(this).val());
    _msg = text;
    if (text.length == 0) {
        $(this).parent().addClass("error");
        $(this).parent().next(".hint").html("短信验证码不能为空")

    } else if (text != msgCodeText) {
        $(this).parent().addClass("error");
        $(this).parent().next(".hint").html("短信验证码不正确")
    } else {
        $(this).parent().removeClass("error");
        $(this).parent().next(".hint").html("")
    }
})



//点击注册按钮
$(".enter").click(function () {
    let isCheck = $("#proto").is(":checked")
    if (!isCheck) {
        alert("请阅读并同意用户协议");
        return;
    }
    console.log(_phone.length, _password.length, _msg.length)

    if (_phone.length != 0 && _password.length != 0 && _msg.length != 0 && $(".error")
        .length == 0) {
        $.ajax({
            type: "post",
            url: "../serve/upregister.php",
            dataType: "json",
            data: `password=${_password}&phone=${ _phone}`,
            // dataType: "dataType",
            success: function (response) {
                console.log(response.status);
                /* 先检查请求的结果，然后做出对应的处理 */
                if (response.status == "success") {
                    // alert(response.msg);
                    /* 跳转到登录页面 */
                    console.log(123)
                    // window.location.href =
                    //     "http://127.0.0.1/code/day31/mycode/html/enter.html";
                } else {
                    alert(response.msg);
                }
            }
        });
    } else(alert(111))
})