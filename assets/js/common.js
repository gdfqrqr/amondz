$(function () {
    var swiper = new Swiper(".sc-visual .swiper", {
        pagination: {
            el: ".sc-visual .pagination",
            type: "fraction",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
    });

    var swiper1 = new Swiper(".swiper1", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper1 .pagination",
        },
    });

    var swiper2 = new Swiper(".swiper2", {
        slidesPerView: 1.5,
        spaceBetween: 10,
    });

    var swiper3 = new Swiper(".swiper3", {
        slidesPerView: 2.5,
        spaceBetween: 15,
    });

    var swiper4 = new Swiper(".swiper4", {
        slidesPerView: 1.1,
        spaceBetween: 10,
    });

    // 스크롤down시 fixed-wrap숨김
    let lastScroll = 0;
  
    $(window).scroll(function(){
        curr = $(this).scrollTop();

        if (curr > lastScroll) {
            $('.fixed-wrap').addClass('hide');
        } 
        else {
            $('.fixed-wrap').removeClass('hide');
        }

        lastScroll = curr;
    })

    //최상단 광고 닫기버튼
    $('.ad-wrap .btn-close').click(function(){
        $('.ad-wrap').hide()
    })

    //아코디언 메뉴   
    $('.privacy-item .title-wrap').click(function(e){
        e.preventDefault();
        $(this).siblings('.sub-wrap').toggleClass('show');
    })


    //search popup 띄우기, 닫기
    $('.header .btn-search').click(function() {
        $('body').addClass('hidden')
        $('.search-wrap').show()
    })

    $('.search-wrap .btn-cancel').click(function(e){
        e.preventDefault()
        $('body').removeClass('hidden')
        $('.search-wrap').hide()
    })

    //category 띄우기, 닫기
    $('.header .btn-menu').click(function() {
        $('body').addClass('hidden')
        $('.cate-area').show()
    })

    $('.cate-area .btn-close').click(function(){
        $('body').removeClass('hidden')
        $('.cate-area').hide()
    })

    //category popup 내부의 더보기 버튼
    $('.cate-area .link-more').click(function(e){
        e.preventDefault()
        $(this).hide()
        $('.cate-list.more').addClass('show')
    })

    //login popup
    $('.btn-like').click(function(e){
        e.preventDefault();
        $('.popup-wrap').addClass('show')
        $('body').addClass('hidden')
    })

    $('.popup-wrap .btn-close').click(function(e){
        e.preventDefault();
        $('.popup-wrap').removeClass('show')
        $('body').removeClass('hidden')
    })
    
    // $(document).click(function(e) {
    //     if ($('main').has(e.target).length == 0) {
    //         $('body').removeClass('hidden')
    //         $('.popup-wrap').removeClass('show')
    //     }
    // })


    
        





















})