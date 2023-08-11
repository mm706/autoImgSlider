const bullets = document.querySelectorAll('.bullet');
const imgs = document.querySelectorAll('.img');
// const firstImg = document.getElementsByClassName('.first');
let currentImg = 1;
let manualNav = function (manual){
    imgs.forEach((img)=>{
       img.classList.remove('active');

       bullets.forEach((bullet)=>{
           bullet.classList.remove('active');
       });
    });
    bullets[manual].classList.add('active');
    imgs[manual].classList.add('active');
}

bullets.forEach((bullet , i) =>{
        bullet.addEventListener('click', () =>{
            manualNav(i);
            currentImg = i;

        });
});


let repeat = function (activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;
  let repeater = () => {
      setTimeout(function (){
          [...active].forEach((activeImg) =>{
              activeImg.classList.remove('active')
          });
         imgs[i].classList.add('active');
         bullets[i].classList.add('active');
         i++;
         if (imgs.length == i){
             i = 0;
         }
         if(i >= imgs.length){
             return;
         }
         repeater();
      } ,5000);
  }
    repeater();
};
repeat();


