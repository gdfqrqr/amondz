$(function () {
    var swiper = new Swiper(".sc-visual .swiper5", {
        pagination: {
            el: ".sc-visual .pagination",
        },
    });


    // 탭
    $('.sc-img .tab-item').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tab-item').removeClass('curr');
        $('.tab-content').removeClass('curr');

        $(this).addClass('curr');
        $("#"+tab_id).addClass('curr');
    });

    //탭 클릭시 스크롤 이동 
    $('.tab-item').click(function () {
        var offset = $(".tab-item").offset(); 
        $("html, body").animate({scrollTop: offset.top},200);

    })
})