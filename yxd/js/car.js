var targetData;
getCarInfo();

function getCarInfo() {
    $.ajax({
        type: "get",
        url: "../serve/getCardata.php",

        dataType: "json",
        success: function (response) {
            targetData = response;
            var res = response.map((ele) => {
                return ` <tr data-index=${ele.id}>
                <td><input class="checkbox-class" type="checkbox" ${ele.isActive==1?"checked":""}></td>
                <td><img src="${ele.bigsrc}" alt=""></td>
                <td>${ele.title}</td>
                <td>￥ ${ele.price}</td>
                <td><button class="btnA">-</button> <input type="text" class="num" value=${ele.num}> <button
                        class="btnB">+</button></td>
                <td>￥ ${ele.total}</td>
                <td><a class="del">删除</a></td>
            </tr>`
            }).join("")
            $("tbody").html(res);
            getTotalPrice(response);
        }
    });
}

$("#allSelector").click(function () {
    $(".checkbox-class").prop("checked", $(this).is(":checked"));

    var isActive = $(this).is(":checked");
    $.ajax({
        type: "get",
        url: "../serve/bigActive.php",
        data: `isActive=${isActive}`,

        success: function (response) {
            getCarInfo()
        }
    });
})

function getTotalPrice(data) {
    var res = 0;
    data.forEach((ele) => {
        if (ele.isActive == 1) {
            res += ele.total * 1;
        }
    })
    $(".right").html("共计：￥" + res.toFixed(2))
}

$("tbody").on("click", ".checkbox-class", function () {

    var id = $(this).parents("tr").data("index");
    var isActive = $(this).is(":checked");
    $.ajax({
        type: "get",
        url: "../serve/updataActive.php",
        data: `id=${id}&isActive=${isActive}`,

        success: function (response) {

            getCarInfo()
        }
    });
})


//按数量按钮更新数量和数据
$("tbody").on("click", ".btnA", function () {
    var number = $(this).siblings(".num").val()
    if ($(this).siblings(".num").val() <= 1) {
        $(this).siblings(".num").val(1)
    } else {
        $(this).siblings(".num").val(number - 1)
    }

    var id = $(this).parents("tr").data("index");
    var num = $(this).siblings(".num").val();
    var price = $(this).parent().siblings("td").eq(3).html().slice(2);

    $.ajax({
        type: "get",
        url: "../serve/updataTol.php",
        data: `id=${id}&num=${num}&price=${price}`,

        success: function (response) {
            getCarInfo()
        }
    });
})

$("tbody").on("click", ".btnB", function () {
    var number = $(this).siblings(".num").val() * 1;
    $(this).siblings(".num").val(number + 1)

    var id = $(this).parents("tr").data("index");
    var num = $(this).siblings(".num").val();
    var price = $(this).parent().siblings("td").eq(3).html().slice(2);

    $.ajax({
        type: "get",
        url: "../serve/updataTol.php",
        data: `id=${id}&num=${num}&price=${price}`,

        success: function (response) {
            getCarInfo()
        }
    });

})

//点击删除按钮
$("tbody").on("click", ".del", function () {
    var id = $(this).parents("tr").data("index")
    $.ajax({
        type: "get",
        url: "../serve/delCar.php",
        data: `id=${id}`,
        success: function (response) {
            getCarInfo()
        }
    });
})