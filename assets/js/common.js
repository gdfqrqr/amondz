$(function () {
    var swiper = new Swiper(".sc-visual .swiper", {
        pagination: {
            el: ".sc-visual .pagination",
            type: "fraction",
        },
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false
        // },
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

























})