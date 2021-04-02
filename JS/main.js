// menu mobile

const menuMobile = document.querySelector('i.btnMenu')
const menu = document.querySelector('header nav')

menuMobile.addEventListener('click', ()=>{
    

    menu.classList.toggle('menuOpen')

    document.body.classList.toggle('overflowHidden')
})

// scrollTo navigation

const arrowDown = document.querySelectorAll('.arrow-down a')
const LinkMenu = document.querySelectorAll('header nav ul li a')


LinkMenu.forEach((linkMenu, indexLink) => {
    linkMenu.addEventListener('click', () => {

        if(indexLink > 0){
            if(menu.classList.contains('menuOpen') && document.body.classList.contains('overflowHidden')){
                menu.classList.remove('menuOpen')
                document.body.classList.remove('overflowHidden')
            }

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

    textPercent[0].innerText = "80%";
    skillPercent[0].style.width = "80%";

    textPercent[1].innerText = "80%";
    skillPercent[1].style.width = "80%";

    textPercent[2].innerText = "15%";
    skillPercent[2].style.width = "15%";


})();


// Certificates

const singlesBoxImages = document.querySelectorAll('.single-image')

singlesBoxImages.forEach((box,boxIndex)=> box.addEventListener('click',()=>{
    const fullView = document.querySelector('.fullView')
    const closeView = document.querySelector('.fullViewClose')
    const fullScreenImageBox = document.querySelector('.box-image img')
    const singlesImages = document.querySelectorAll('.single-image img')

    //open full View
    fullView.classList.add('fullViewOpen')
    document.body.classList.add('overflowHidden')

    //pop up images
    let imgAttr = singlesImages[boxIndex].getAttribute('src')
    fullScreenImageBox.src = imgAttr

    //close Full view
    closeView.onclick = function(){
        fullView.classList.remove('fullViewOpen')
        document.body.classList.remove('overflowHidden')
    }
}))


