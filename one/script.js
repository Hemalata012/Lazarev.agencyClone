function navAnimation(){
    var nav = document.querySelector("nav")
    var h4 = document.querySelectorAll(".nav-elem h4")
  h4.forEach(function(elem){
    elem.addEventListener("mouseenter" , function(){
      let tl = gsap.timeline()

      tl.to("#nav-btm",{
          height :"21vh" 
      })
      tl.to("nav h5" ,{
          opacity: "1"
      }) 
      tl.to("nav h5 span" ,{
        y : 0 ,
        stagger :{
          amount : 0.6
        } 
      })
   })
  })

    nav.addEventListener("mouseleave" , function(){
       let tl = gsap.timeline() 
       tl.to("nav h5 span" ,{
         y : 25,
         stagger :{
           amount : 0.2
         } 
       })
       tl.to("#nav-part1 h5",{
           opacity : 0 ,
           duration : 0.1
       })
       tl.to("nav #nav-btm",{
       height :0 ,
       duration : 0.2
       })
    })
}

function imgPage2Anime(){
  var relems = document.querySelectorAll(".right-elem")

  relems.forEach(function(elem){
  
   elem.addEventListener("mouseenter",function(){
   gsap.to(elem.childNodes[7],{
    opacity :1 ,
    scale : 1
   })
   })
   elem.addEventListener("mouseleave",function(){
    gsap.to(elem.childNodes[7],{
     opacity :0 ,
     scale : 0
    })
    })
    elem.addEventListener("mousemove" ,function(dets){
   gsap.to(elem.childNodes[7],{
    x : dets.x - elem.getBoundingClientRect().x-50 ,
    y : dets.y - elem.getBoundingClientRect().y-90
  
   })
    })
  })
}
function page3VideoAnime(){

  var page3Center = document.querySelector("#center-btn")
  var video = document.querySelector(".page3 video")
  
  page3Center.addEventListener("click" , function(){
    video.play()
    gsap.to(video,{
    
      transform : "scaleX(1) scaleY(1)" ,
      opacity :1 ,
  bortderRadius : "100%"
    })
  })
  video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
    
      transform : "scaleX(0.7) scaleY(0)" ,
      opacity : 0 ,
  bortderRadius : "30px"
    })
  })
}

function page5VideoAnimation(){

  var sections = document.querySelectorAll(" #sec-right");

  sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave", function () {
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })
  })
  
  var anotherSection = document.querySelectorAll(".section1") ;
  var videos = document.querySelectorAll("#sec-lower video")
  anotherSection.forEach(function(elem){
    elem.addEventListener("mouseenter" , function(){
     elem.childNodes[1].style.height = "10vh" 
     elem.childNodes[3].style.height = "80vh" 
     elem.childNodes[1].style.borderTop = "1px solid black "
     elem.childNodes[3].childNodes[3].style.opacity = 1
     elem.childNodes[3].childNodes[3].play()
    })
    elem.addEventListener("mouseleave" , function(){
      elem.childNodes[1].style.height = "30vh" 
      elem.childNodes[3].style.height = "60vh" 
      elem.childNodes[1].style.borderTop = "1px solid rgb(156, 152, 152)"
      elem.childNodes[3].childNodes[3].style.opacity = 0
      elem.childNodes[3].childNodes[3].load()
     })
   
  })
  
}
function page8AnimationH4(){
  gsap.from(".btm8-parts h4",{
    x : 0 ,
    duration : 1 ,
    scrollTrigger :{
      scroller : 'body' ,
      trigger : ".btm8-parts" ,
      // markers : true ,
      start : "top 80%",
      end : "top 10%" ,
      scrub : true 
    }
  
  })
  
}

navAnimation()
imgPage2Anime()
page3VideoAnime()
 page5VideoAnimation() 
page8AnimationH4()  

