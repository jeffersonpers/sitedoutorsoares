
var slidesperview  = ""
var slidespergroup = ""
var largura = ""
var altura = ""

/* Função para deixar responsivo os swiper de fotos*/ 
function teste(){
    largura = window.screen.width;
    altura = window.screen.height;

    if (largura < 700){
        slidesperview = 1
        slidespergroup = 1
    }else{
        slidesperview = 3
        slidespergroup = 3
    }
    var swiper = new Swiper(
        " .mySwiper", 
        {
            slidesPerView: slidesperview,
            spaceBetween:30,
            slidesPerGroup: slidespergroup,
            loop:true,
            loopFillGroupWithBlanck:true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        }
    )
}



