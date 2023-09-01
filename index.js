const h1= document.querySelector('h1');

const randNo1= Math.ceil(Math.random()*6);
console.log(randNo1);
const randNo2= Math.ceil(Math.random()*6);
console.log(randNo2);


// const img1= document.querySelector(".img1").getAttribute('src');
// console.log(img1);
document.querySelector(".img1").setAttribute('src', `images/dice${randNo1}.png`);
document.querySelector(".img2").setAttribute('src', `images/dice${randNo2}.png`);

if(randNo1>randNo2){
    h1.innerHTML='Player 1 Wins'
}
else if(randNo2>randNo1){
    h1.innerHTML='Player 2 Wins'
}
else if(randNo1===randNo2){
    h1.innerHTML='Draw!'
}