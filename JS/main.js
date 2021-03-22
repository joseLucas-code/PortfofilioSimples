// menu mobile

const menuMobile = document.querySelector('i.btnMenu')

menuMobile.addEventListener('click', ()=>{
    const menu = document.querySelector('header nav')

    menu.classList.toggle('menuOpen')

    document.body.classList.toggle('overflowHidden')
})

//slide 

const slideContent = document.querySelectorAll('.slide-content')
const dots = document.querySelectorAll('.single-dot')
const prevBTN = document.querySelector('.prevBTN')
const nextBTN = document.querySelector('.nextBTN')
const totalSlides = slideContent.length - 1;
let currentSlideIndex = 0;

nextBTN.addEventListener('click', () =>{
    currentSlideIndex === totalSlides ? currentSlideIndex = 0 : currentSlideIndex++;

    mudarSlide();
})

prevBTN.addEventListener('click', () =>{
    currentSlideIndex === 0 ? currentSlideIndex = totalSlides : currentSlideIndex--;

    mudarSlide();
})

dots.forEach((dot,indexDot) =>{
    dot.addEventListener('click', () =>{
        currentSlideIndex = indexDot

        mudarSlide();
    })

    
})

function mudarSlide(){

    slideContent.forEach(slide => slide.classList.remove('activeSlide'))
    slideContent[currentSlideIndex].classList.add('activeSlide')

    dots.forEach(dot => dot.classList.remove('activeDot'))
    dots[currentSlideIndex].classList.add('activeDot')
}

setInterval(function(){
    currentSlideIndex === totalSlides ? currentSlideIndex = 0 : currentSlideIndex++;

    mudarSlide();
},5000)

// scrollTo navigation

const arrowDown = document.querySelectorAll('.arrow-down a')
const LinkMenu = document.querySelectorAll('header nav ul li a')


LinkMenu.forEach((linkMenu, indexLink) => {
    linkMenu.addEventListener('click', () => {

        if(indexLink > 0){
            let arrowDownAttribute = LinkMenu[indexLink].getAttribute('data-scrollTO')
            scrollWin(arrowDownAttribute)
        }

    })
})

arrowDown.forEach((arrow, indexArrow) => {
    arrow.addEventListener('click', (e) => {

        let arrowDownAttribute = arrowDown[indexArrow].getAttribute('data-scrollTO')
        scrollWin(arrowDownAttribute)

    })
})

function scrollWin(el){
    let scrollID = document.querySelector(el)

    scrollID.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })

}

//SCROLL TO TOP 

const sectionBanner = document.querySelector('section.banner')

window.addEventListener('scroll', ()=>{
    const scrollUP = document.querySelector('.scroll-up')
    scrollUP.classList.toggle('scrollDisplay', window.scrollY > sectionBanner.clientHeight)

    scrollUP.addEventListener('click', ()=>{
        document.body.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
});


//skills

(function(){
    const textPercent = document.querySelectorAll('.percent');
    const skillPercent = document.querySelectorAll('.skill-percent');

    textPercent[0].innerText = "100%";
    skillPercent[0].style.width = "100%";

    textPercent[1].innerText = "95%";
    skillPercent[1].style.width = "95%";

    textPercent[2].innerText = "99%";
    skillPercent[2].style.width = "98%";

    textPercent[3].innerText = "??%";
    skillPercent[3].style.width = "0%";


})();

