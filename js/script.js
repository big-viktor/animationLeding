$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
        arrows: false,
        infinite: true,

    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        asNavFor: '.slider-for',
        arrows: true,
        infinite: true,
        focusOnSelect: true,
        draggable: true,

    });
    $('.slider-for-two').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav-two',
        arrows: false,
        fade: true,
        draggable: true,
        infinite: true,

    });
    $('.slider-nav-two').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for-two',
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        draggable: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 508,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.responsive').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,

        responsive: [
            {
                breakpoint: 1204,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

const leftMenu = document.querySelector('.conatiner_left_menu');
const aHref = document.querySelector('.aHref');
// console.log(leftMenu)
let opens = true;
const openMenu = () => {
    if (opens === true) {
        for (let i = 0; i < leftMenu.children.length; i++) {
            newArr = leftMenu.children[i];
            newArr.style.fontSize = '26px';
        }
        leftMenu.classList.remove('active_menu');
        leftMenu.style.transition = '0.4s';
        leftMenu.style.paddingLeft = '40px';
        leftMenu.style.paddingTop = '120px';
        leftMenu.style.width = '480px';
        opens = false;
    } else {
        removeMenu()
        opens = true
    }


}
const removeMenu = () => {
    for (let i = 0; i < leftMenu.children.length; i++) {
        newArr = leftMenu.children[i];
        newArr.style.fontSize = '0px';
    }
    leftMenu.classList.remove('active_menu');
    leftMenu.style.transition = '0.4s';
    leftMenu.style.paddingLeft = '0px';
    leftMenu.style.paddingTop = '0px';
    leftMenu.style.width = '0px';

}

const textActiv = document.querySelector('.text_activ');

function sayHi() {
    textActiv.classList.remove('display');
    textActiv.classList.add('right_vision');

    for (let i = 0; i < textActiv.children.length; i++) {
        newActive = textActiv.children[i];
        newActive.classList.add('right_vision');
    }
}
function sayHon() {
    textActiv.classList.remove('right_vision');

    for (let i = 0; i < textActiv.children.length; i++) {
        newActive = textActiv.children[i];
        newActive.classList.remove('right_vision');
    }
}

setTimeout(sayHi, 1500);
setTimeout(sayHon, 5510);