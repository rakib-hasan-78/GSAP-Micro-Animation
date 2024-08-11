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
// card-body--->
gsap.fromTo('.card-content', {y:20, opacity:0, scale:0},{y:0, opacity:1, ease:"back.inOut(1.4)", duration:2, scale:1})
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
});

// messages -->

const messages = document.querySelector('.msg');

    tl.set('.envelope-flip',{transformOrigin:'top'});

messages.addEventListener('click', (e) => {

    e.preventDefault();
    tl.fromTo('.message-svg', {scale:1},{scale:.90});
    tl.fromTo('.envelope-flip', {scale:1},{scale:-1}),"<50%";
    tl.fromTo('.message-svg', {scale:.90},{scale:1},"<50%");
    tl.fromTo('.inside-message', {y:0, opacity:1},{y:-40, opacity:0, duration:.85});
    tl.to('.envelope-flip',{scale:1},"<50%");
});


footer


const credit = document.querySelector('#credit');
credit.innerHTML=`developed by MD rakibul hasan`



const copyRight = document.querySelector('#copy-right');

copyRight.innerHTML = `&copy; ${new Date().getFullYear()} all the rights reserved.`;

const copyRightLetters = copyRight.textContent.split('');

copyRight.innerHTML=''
;[...copyRightLetters].forEach((letter)=>{
    copyRight.innerHTML+= `<span class="copy-lettr">${letter}</span>`
});


