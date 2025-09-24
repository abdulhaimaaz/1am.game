
// Very Bad way
function clickMe(){
    console.log('First Button!');
}

const secondBtn = document.querySelector('.second-btn');


// Bad Way
secondBtn.onclick = ()=>{
    console.log('Hey!');
}

// Best Way

const best = document.querySelector('.good');

best.addEventListener('click', ()=>{
    console.log('Greetings!');
})

// Great Way!

// Event (e) Object

const para = document.querySelector('.para');

para.addEventListener('click', (event)=>{
    console.log(event);
})

let color = document.querySelector('.color');
let curr = document.body.style.backgroundColor;
color.addEventListener('click', ()=>{
    
    // document.body.style.backgroundColor === 'white' ?  document.body.style.backgroundColor = 'red' && console.log('red') : console.log('white') && document.body.style.backgroundColor = 'white';
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'green' ? "white" : 'green';

    
})

