// Project Title  Animation --->
const title = document.querySelector('h1');
const letters = title.textContent.split('');

title.innerHTML = '';

[...letters].forEach(letter=>{
    title.innerHTML += `<span class="letter">${letter}</span>`
});

gsap.set('.letter', {display:'inline-block'});
gsap.fromTo('.letter', {y:'100%',opacity:0}, {y:0, opacity:1, delay:2,stagger:.05, ease:'back.out(3,4)'});

// Micro Animation Started --->

// home 

const home = document.querySelector('.home');

const tl = gsap.timeline({defaults:{ duration:.75, ease:"Power2.easeOut"}});
gsap.set('.feather', {scale:0, transformOrigin:"center"});
home.addEventListener('click', (e)=>{
    e.preventDefault();
    gsap.fromTo('.home-svg', {scale:1}, {scale:.90, yoyo:true, repeat:1});
    gsap.fromTo('.shade', {rotate:0, y:0, scale:1}, {rotate:"-5deg", yoyo:true, repeat:1, scale:.90, ease: "expo.out(1,0.3)"});
    gsap.fromTo('.feather', {scale:0 , y: -5},{scale:1.5 , y:25, duration:1, stagger:.5},"<");
    gsap.fromTo('.right-feather', {x:0}, {x:5},"<");
});

// notifications ---->

const notifications = document.querySelector('.notifications');
gsap.set('.bell', {transformOrigin:'top center'});
gsap.set('.ringer', {transformOrigin:'top center'});
gsap.set('.wave', { scale:0});
notifications.addEventListener('click', (e) => {
    e.preventDefault();
    gsap.fromTo('.bell', {rotation:-5}, {rotation:0 , duration:2, ease: "elastic.out(5,0.2)"});
    gsap.fromTo('.ringer', {rotation:-3, x:0.5}, {rotation:0 , duration:2, ease: "elastic.out(5,0.2)", x:0});
    gsap.fromTo('.wave', {scale:0, opacity:1}, {scale:1.3, opacity:0, duration:1});
})