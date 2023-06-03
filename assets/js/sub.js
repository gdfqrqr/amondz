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


    // 반품팝업
    $('.btn-return').click(function() {
        $('.return-wrapper.return').addClass('on');
        $('body').addClass('hidden')
    })
    $('.return-wrapper.return .btn-close').click(function(e) {
        e.preventDefault()
        $('.return-wrapper.return').removeClass('on');
        $('body').removeClass('hidden')
    })
  
    $('.return-wrapper.return .btn-view').click(function (e) {
        e.preventDefault()
        if ($('.return-wrapper.return .info-wrap').hasClass('on')) {
            $('.return-wrapper.return .info-wrap').removeClass('on');
            $(this).html('거래조건에 대한 정보 펼치기')
        } else {
            $('.return-wrapper.return .info-wrap').addClass('on');
            $(this).html('거래조건에 대한 정보 접기')
        }
    })
    // as팝업
    $('.btn-as').click(function() {
        $('.return-wrapper.as').addClass('on');
        $('body').addClass('hidden')
    })
    $('.return-wrapper.as .btn-close').click(function(e) {
        e.preventDefault()
        $('.return-wrapper.as').removeClass('on');
        $('body').removeClass('hidden')
    })

})