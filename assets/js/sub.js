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

    



})