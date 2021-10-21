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

const containerSecton2 = document.querySelector('.container_secton2');

let onScroll = 0;
let activScrol = true;

const nextSlaid = () => {
    onScroll = 80;
    if (activScrol === true) {
        for (let i = 0; i < containerSecton2.children.length; i++) {
            cardWan = containerSecton2.children;
            cardWan[0].classList.remove('display');
            cardWan[0].classList.add('activ_card_three');

            const stopWan = () => {
                cardWan[0].classList.remove('activ_card_three');
            }

            setTimeout(stopWan, 4005);

            const goActiv = () => {
                cardWan[1].classList.remove('display');
                cardWan[1].classList.add('activ_card_twoo');
            }
            const stopWanTwoo = () => {
                cardWan[1].classList.remove('activ_card_twoo');
            }
            const goActivThee = () => {
                cardWan[2].classList.remove('display');
                cardWan[2].classList.add('activ_card');
            }
            const stopWanTwooThee = () => {
                cardWan[2].classList.remove('activ_card');
            }
            setTimeout(stopWan, 4005);
            setTimeout(goActiv, 4007);
            setTimeout(stopWanTwoo, 8005);
            setTimeout(goActivThee, 8010);
            setTimeout(stopWanTwooThee, 12000);
        }
        activScrol = false;
    }

}
if (activScrol === true) {
    window.addEventListener('scroll', function () {
        onScroll += 1;
        if (onScroll === 80) {
            for (let i = 0; i < containerSecton2.children.length; i++) {
                cardWan = containerSecton2.children;
                cardWan[0].classList.remove('display');
                cardWan[0].classList.add('activ_card_three');

                const stopWan = () => {
                    cardWan[0].classList.remove('activ_card_three');
                }

                setTimeout(stopWan, 4005);

                const goActiv = () => {
                    cardWan[1].classList.remove('display');
                    cardWan[1].classList.add('activ_card_twoo');
                }
                const stopWanTwoo = () => {
                    cardWan[1].classList.remove('activ_card_twoo');
                }
                const goActivThee = () => {
                    cardWan[2].classList.remove('display');
                    cardWan[2].classList.add('activ_card');
                }
                const stopWanTwooThee = () => {
                    cardWan[2].classList.remove('activ_card');
                }
                setTimeout(stopWan, 4005);
                setTimeout(goActiv, 4007);
                setTimeout(stopWanTwoo, 8005);
                setTimeout(goActivThee, 8010);
                setTimeout(stopWanTwooThee, 12000);
                activScrol = false;

            }
        }



    });
}

function disableScrolling() {

    window.onscroll = function () { window.scrollTo(x, y); };
}
function enableScrolling() {
    window.onscroll = function () { };
}
window.addEventListener('scroll', function () {
    var x = window.scrollX;
    var y = window.scrollY;
    console.log(window.scrollY)
    if (y >= 1655) {
        $('body').addClass('stop-scrolling');
        $('.block_hiden').addClass('scrol_up');
    }
    if (y <= 1655) {
        $('body').removeClass('stop-scrolling');
        $('.block_hiden').removeClass('scrol_up')
    }
});




const showSec4 = document.querySelector('.show_sec4');
const arrowSection4 = document.querySelector('.aroow_section4');
const containerSection4 = document.querySelector('.container_section4');

const goActivSec4 = () => {
    let textWaan = "Did you know that YOU have the power to end this downward spiral?";
    containerSection4.classList.add('go_animation_bacg');

    showSec4.classList.add('go_animation_text');
    showSec4.innerHTML = textWaan;

}

const goActivSec4Twoo = () => {
    let textWaan = "There is no time to waste.";

    showSec4.classList.add('go_animation_text');
    showSec4.innerHTML = textWaan;

}
const goActivSec4Three = () => {
    let textWaan = "By supporting Farnico as a customer, follower, donor or volunteer, you become part of our GLOBAL REVOLUTION";

    showSec4.classList.add('go_animation_text');
    showSec4.innerHTML = textWaan;

}
const goActivSec4Faif = () => {
    let textWaan = "Support our MISSION";

    showSec4.classList.add('go_animation_text');
    showSec4.innerHTML = textWaan;

}
const removActivSec4 = () => {

    showSec4.classList.remove('go_animation_text');

}
const exitSow = () => {
    containerSection4.classList.remove('go_animation_bacg');
    showSec4.classList.remove('go_animation_text');
    arrowSection4.classList.remove('disabled');
}
const activSlaidSec4 = () => {
    goActivSec4()
    setTimeout(removActivSec4, 8000);
    setTimeout(goActivSec4Twoo, 8000);
    setTimeout(removActivSec4, 16000);
    setTimeout(goActivSec4Three, 16000);
    setTimeout(removActivSec4, 24000);
    setTimeout(goActivSec4Faif, 24000);
    setTimeout(exitSow, 28000);
}
