// TOGGLE FUNCTION SCRIPT

$(document).ready(function () {
    $('.main-bar').on('click', function (e) {
        e.stopPropagation(); 
        $('.dropdown').slideToggle(280);
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.main-bar').length && !$(e.target).closest('.dropdown').length) {
            $('.dropdown').slideUp(280);
        }
    });
});


// JAVASCRIPT TAB

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

// SLIDER JS
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 42,
    slidesPerView: 1.3,
    slidesOffsetBefore: 108,
    // loop: true,
    speed: 800,
    autoplay: {
        delay: 2000,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next-unique",
        prevEl: ".swiper-button-prev-unique"
    },


    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetweenSlides: 20,
            slidesOffsetBefore: 15,
        },


        991: {
            slidesPerView: 1.3,
            spaceBetween: 42,
            slidesOffsetBefore: 108,
        },



    },
});