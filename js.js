'use strict'

const imgList = document.querySelectorAll('.img');
const bullets = document.querySelectorAll('.bullet');

function bulletActive(number){
    bullets.forEach((el) => {
        el.classList.remove('active');
    })
    bullets[number].classList.add('active');
}
setInterval(() => {
    let activeIndex;
    for (let i = 0; i < imgList.length; i++) {
        // imgList.forEach((el, index)
            if (imgList[i].classList.contains('active')) {
                activeIndex = i;
                imgList[i].classList.remove('active');
                break;
            }


    }
    let newActiveIndex = activeIndex + 1;
    if(newActiveIndex > 4){
        newActiveIndex = 0;
        imgList[newActiveIndex].classList.add('active');
        bulletActive(newActiveIndex);
    }else {
        imgList[newActiveIndex].classList.add('active');
        bulletActive(newActiveIndex);
    }

}, 5000);

function btnNav(indexNumber) {
    imgList.forEach((img) =>{
        img.classList.remove('active');
    });
    bullets.forEach((bullet) => {
        bullet.classList.remove('active');

    });
    imgList[indexNumber].classList.add('active');
    bullets[indexNumber].classList.add('active');
}

bullets.forEach((bullet, index) => {
    bullet.addEventListener('click' ,() =>{
        btnNav(index);
    })

});


// function addClass(number){
//     if(number === 0) {
//         imgList[0].classList.add('active');
//         imgList[1].classList.remove('active');
//         imgList[2].classList.remove('active');
//         imgList[3].classList.remove('active');
//         imgList[4].classList.remove('active');
//
//         bullets[0].classList.add('active');
//         bullets[1].classList.remove('active');
//         bullets[2].classList.remove('active');
//         bullets[3].classList.remove('active');
//         bullets[4].classList.remove('active');
//     }else if(number === 1) {
//         imgList[1].classList.add('active');
//         imgList[0].classList.remove('active');
//         imgList[2].classList.remove('active');
//         imgList[3].classList.remove('active');
//         imgList[4].classList.remove('active');
//
//         bullets[1].classList.add('active');
//         bullets[0].classList.remove('active');
//         bullets[2].classList.remove('active');
//         bullets[3].classList.remove('active');
//         bullets[4].classList.remove('active');
//     }else if(number === 2) {
//         imgList[2].classList.add('active');
//         imgList[1].classList.remove('active');
//         imgList[0].classList.remove('active');
//         imgList[3].classList.remove('active');
//         imgList[4].classList.remove('active');
//
//         bullets[2].classList.add('active');
//         bullets[1].classList.remove('active');
//         bullets[0].classList.remove('active');
//         bullets[3].classList.remove('active');
//         bullets[4].classList.remove('active');
//     }else if(number === 3) {
//         imgList[3].classList.add('active');
//         imgList[1].classList.remove('active');
//         imgList[2].classList.remove('active');
//         imgList[0].classList.remove('active');
//         imgList[4].classList.remove('active');
//
//         bullets[3].classList.add('active');
//         bullets[1].classList.remove('active');
//         bullets[2].classList.remove('active');
//         bullets[0].classList.remove('active');
//         bullets[4].classList.remove('active');
//     }else if(number === 4) {
//         imgList[4].classList.add('active');
//         imgList[1 , 2 , 3 ,4].classList.remove('active');
//         imgList[2].classList.remove('active');
//         imgList[3].classList.remove('active');
//         imgList[0].classList.remove('active');
//
//         bullets[4].classList.add('active');
//         bullets[1].classList.remove('active');
//         bullets[2].classList.remove('active');
//         bullets[3].classList.remove('active');
//         bullets[0].classList.remove('active');
//     }
// }
//
// bullets.forEach((el , index) =>{
//
//    el.addEventListener('click', ()=>{
//            addClass(index);
//    })
// });

