'use strict'

const imgList = document.querySelectorAll('.img');

setInterval(() => {
    let activeItem;
    let activeIndex;
    imgList.forEach((el, index) => {
        if (el.classList.contains('active')) {
            activeItem = el;
            activeIndex = index;
            activeItem.classList.remove('active');
        }
    })
    const newActiveIndex = activeIndex + 1;
    imgList[newActiveIndex].classList.add('active');

}, 3000);
