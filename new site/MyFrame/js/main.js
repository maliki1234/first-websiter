    const random = function(range){
        const rand = Math.floor(Math.random() * range)
        return rand
    }


    // const funy = function (range) {
    //     const randomRange = Math.floor(Math.random() * range )
    //     while (funy > range) {
    //         Math.floor(Math.random() * range )
    //     }
    //     return randomRange
    // }



   const contena = document.querySelector('.contena ul')
   const list = contena.querySelectorAll('li')


 var displayBlock = function() {
     let le = list.length
     for (let i = 0; i < list.length; i++) {
         const element = list[i];
         element.style.display= 'none'
     }
     list[random(le)].style.display = 'block'
    //  console.log(list[random(le)])
 }


 setInterval(displayBlock, 3000)