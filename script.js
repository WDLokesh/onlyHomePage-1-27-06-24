var cursorID = document.querySelector("#curssor");
var cursor_Blur_ID = document.querySelector("#curssor-blur");
document.addEventListener("mousemove", function (mouse) {
  cursorID.style.left = mouse.x+30 + "px";
  cursorID.style.top = mouse.y + "px";
  cursor_Blur_ID.style.left = mouse.x - 150 + "px";
  cursor_Blur_ID.style.top = mouse.y - 150 + "px";
});
var navH4=document.querySelectorAll("#nav h4")
navH4.forEach(function(element){
    element.addEventListener("mouseenter",function(){
        cursorID.style.scale=3
        cursorID.style.border="1px solid #fff"
        cursorID.style.backgroundColor="transparent"
    })
    element.addEventListener("mouseleave",function(){
        cursorID.style.scale=1
        cursorID.style.border="1px solid #fff"
        cursorID.style.backgroundColor="yellow"
    })
})

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "80px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    // if enter one by one use stagger
    stagger:0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 58%",
        scrub: 3,
      }

})

gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 3,
      }
})
gsap.from("#comma1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#comma1",
        scroller:"body",
        // marker:true,
        start:"top 50%",
        end:"top 47%",
        scrub:3
    }
})
gsap.from("#comma2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#comma1",
        scroller:"body",
        marker:true,
        start:"top 50%",
        end:"top 47%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        marker:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})