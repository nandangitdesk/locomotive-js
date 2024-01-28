function loader() {
    const tl = gsap.timeline()
tl.to(".yellow1",{
    top:"-100%",
    delay:0.5,
    duration:0.7,
    ease:"expo.out"

})
tl.from(".yellow2",{
    top:"100%",
    delay:1,
    duration:0.7,
    ease:"expo.out"
    
},"<")
tl.to(".nav-logo svg path",{
    fill:"black",
    duration:0.6,
},"<")
tl.to(".nav-links",{
    color:"black"
},"<")
tl.to(".nav-links a",{
    color:"black"
},"<")
tl.to(".loader h1",{
    color:"black",
    
    duration:0.7,
    
},"<")
tl.to(".loader",{
   opacity:0
    
})
tl.to(".loader",{
   display:"none"
    
})
}
loader()

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


document.querySelector(".foot1 h2").addEventListener("click",()=>{
    scroll.scrollTo(0)
})

const page2 = document.querySelector(".page2")
const elems = document.querySelectorAll(".elem")
elems.forEach((ele)=>{
    ele.addEventListener("mouseenter",()=>{
         const bgimg =ele.getAttribute("data-img")
           page2.style.backgroundImage = `url(${bgimg})`
    })
    ele.addEventListener("mouseleave",()=>{
        page2.style.backgroundColor = "black"
    })
})