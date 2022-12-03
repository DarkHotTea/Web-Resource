const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu){
    iconMenu.addEventListener("click", function (e){
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    });
}

$(document).ready(function(){
    $('.main__aboutUs__slider').slick({
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 3,
        adaptiveHeight: true,
        slidesToScroll: 1,
        touchThreshold: 6,
        waitForAnimate: false,
        variableWidth: false,
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 2
                }
            },{
                breakpoint: 568,
                settings:{
                    slidesToShow: 1,
                    appendArrows:$('.main__aboutUs__arrows')
                }
            }
        ]
    });
});

// Скролл к нужному разделу через ссылки
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;  
            /*-Код-для-бургер-меню-*/
            if (iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }
            /*-/-/-/-/-/-*/
            window.scrollTo({
                top: gotoBlockValue, 
                behavior: "smooth"
            });
            e.preventDefault();    
        }       
        else console.log("fck u");
    }
}
//



