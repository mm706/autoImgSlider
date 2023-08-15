'use strict'

const imgList = document.querySelectorAll('.img');
setInterval(() => {
    let activeIndex;
    imgList.forEach((el, index) => {
        if (el.classList.contains('active')) {
            activeIndex = index;
            el.classList.remove('active');

        }
    })
    let newActiveIndex = activeIndex + 1;
    if(newActiveIndex > 4){
        newActiveIndex = 0;
        imgList[newActiveIndex].classList.add('active');
    }else {
        imgList[newActiveIndex].classList.add('active');
    }

}, 3000);
