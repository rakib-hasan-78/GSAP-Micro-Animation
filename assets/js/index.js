const title = document.querySelector('h1');
const letters = title.textContent.split('');

title.innerHTML = '';

[...letters].forEach(letter=>{
    title.innerHTML += `<span class="letter">${letter}</span>`
});

gsap.set('.letter', {display:'inline-block'});
gsap.fromTo('.letter', {y:'100%',opacity:0}, {y:0, opacity:1, delay:2, stagger:.05, ease:'back.out(3)'})