/*--------------------------------------------Go-to-the-top-------------------------------------------------------*/
let goTop = document.querySelector('.goTop');

goTop.addEventListener('click', function(){
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
})
/*----------------------------------------------------------------------------------------------------------------*/

/*---------------------------------Background-Header-fadeIn-FadeDown----------------------------------------------*/
window.addEventListener("scroll", function (event) {
    let scroll = this.scrollY;
    let selected = document.querySelector('.selected');
    let btns = document.querySelectorAll('.menu a');

    if(scroll > 115){
        document.querySelector('.boxMenu').style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        document.querySelector('.boxMenu').style.borderBottom = '1px solid black';
    }else{
        document.querySelector('.boxMenu').style.backgroundColor = 'transparent';
        document.querySelector('.boxMenu').style.borderBottom = 'transparent';
    }
})
/*----------------------------------------------------------------------------------------------------------------*/

/*---------------------------------------Border-Bottom-Animation--------------------------------------------------*/
let technologyIcon = document.querySelectorAll('.technologySingle');
let border = document.querySelectorAll('.borderBottomAnimation');

for(let i = 0; i < technologyIcon.length; i++){
    technologyIcon[i].addEventListener('mousemove', function(){
        for(let j = 0; j < technologyIcon.length; j++){
            border[j].style.width = '0';
        }
        border[i].style.width = '100%';
    })
    technologyIcon[i].addEventListener('mouseout', function(){
        border[i].style.width = '0';
    })
}
/*----------------------------------------------------------------------------------------------------------------*/

