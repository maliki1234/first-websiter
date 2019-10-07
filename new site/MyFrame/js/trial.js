const background = document.querySelector('.parallax');
const scrolled = window.pageYOffset;
const elemRect = background.getBoundingClientRect().top;
// const bkpos = background.offsetTop;

// console.log(scrolled)
console.log(-elemRect)


const el = -elemRect

// var bodyRect = document.body.getBoundingClientRect(),
    
//     // offset   = elemRect.top - bodyRect.top;

// // alert('Element is ' + offset + ' vertical pixels from <body>');



window.addEventListener('scroll' , (e)=>{
  if(scrolled > el){
    console.log(background.style)

  }else{
    console.log('maliki')
  }

})