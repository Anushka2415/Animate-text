
var tl = gsap.timeline();

gsap.to(".landingpage",{
    x:300,
    y:-700,
    rotate :3,
    scrollTrigger:{
        trigger:'.landingpage',
        scoller:'main',
        pin:true,
        duration:3,
        scrub:1,
        start:'top 0'
    }
})

var myname = document.querySelector(".name h6");
var h4textcontent = myname.textContent;
var split = h4textcontent.split("");

var clutter ="";
split.forEach(function(val){
    clutter += `<span>${val}</span>`
})

myname.innerHTML= clutter ;

tl.from(".name h6 span ",{
    y:100,
    duration:0.5,
    stagger:-0.1,
    opacity:0,
    delay:0.5
})

tl.from(".age",{
    opacity:0,
    duration:0.5,
})

var btmtext = document.querySelector(".btmtext h1");
var btmtextcontent = btmtext.textContent;
var btmsplit = btmtextcontent.split("");

var btmclutter ="";
btmsplit.forEach(function(val){
    btmclutter += `<span>${val}</span>`
})

btmtext.innerHTML= btmclutter ;

tl.from(".btmtext h1 span ",{
    y :100,
    duration:0.5,
    stagger:-0.1,
    opacity:0,
})