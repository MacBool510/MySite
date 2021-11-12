
let curtainColor = 'gold';
let curtainSize = 'small';
let image = document.querySelector('.pop-up_card_img');
let image2 = document.querySelector('.pop-up_second_card_img');
let priceText = document.querySelector('.price');
let priceTextAlt = document.querySelector('.price1');



function formRadioSize(){
    if(event.target.name = 'customRadio'){
        console.log(event.target.value);
        curtainSize = event.target.value;
        console.log(curtainSize, curtainColor);
        
        
    }
    chng();
}
function formRadioColor(){
    if(event.target.name = 'customRadio'){
        console.log(event.target.value);
        curtainColor = event.target.value;
        
    }
    chng();
}

function chng(){
    if(curtainColor == 'yellow' && curtainSize == 'small') {
        image.style = 'background-image: url(images/variable/12.png);';
        image2.style = 'background-image: url(images/variable/12.png);';
    }
    if(curtainColor == 'yellow' && curtainSize == 'medium') {
        image.style = 'background-image: url(images/variable/2х2.png);';
        image2.style = 'background-image: url(images/variable/2х2.png);';
    }
    if(curtainColor == 'yellow' && curtainSize == 'large') {
        image.style = 'background-image: url(images/variable/3x2.png);';
        image2.style = 'background-image: url(images/variable/3x2.png);';
    }
    if(curtainColor == 'yellow' && curtainSize == 'extraLarge') {
        image.style = 'background-image: url(images/variable/3х3.png);';
        image2.style = 'background-image: url(images/variable/3х3.png);';
    }
    if(curtainColor == 'blue' && curtainSize == 'small') {
        image.style = 'background-image: url(images/variable/colds.png);';
        image2.style = 'background-image: url(images/variable/colds.png);';
    }
    if(curtainColor == 'blue' && curtainSize == 'medium') {
        image.style = 'background-image: url(images/variable/coldm.png);';
        image2.style = 'background-image: url(images/variable/coldm.png);';
    }
    if(curtainColor == 'blue' && curtainSize == 'large') {
        image.style = 'background-image: url(images/variable/coldl.png);';
        image2.style = 'background-image: url(images/variable/coldl.png);';
    }
    if(curtainColor == 'blue' && curtainSize == 'extraLarge') {
        image.style = 'background-image: url(images/variable/coldxl.png);';
        image2.style = 'background-image: url(images/variable/coldxl.png);';
    }
    if(curtainColor == 'gold' && curtainSize == 'extraLarge') {
        image.style = 'background-image: url(images/variable/3х3.png);';
        image2.style = 'background-image: url(images/variable/3х3.png);';
    }
    if(curtainColor == 'multicolor' && curtainSize == 'small') {
        image.style = 'background-image: url(images/variable/multicolors.png);';
        image2.style = 'background-image: url(images/variable/multicolors.png);';
    }
    if(curtainColor == 'multicolor' && curtainSize == 'medium') {
        image.style = 'background-image: url(images/variable/multicolorm.png);';
        image2.style = 'background-image: url(images/variable/multicolorm.png);';
    }
    if(curtainColor == 'multicolor' && curtainSize == 'large') {
        image.style = 'background-image: url(images/variable/multicolorl.png);';
        image2.style = 'background-image: url(images/variable/multicolorl.png);';
    }
    if(curtainColor == 'multicolor' && curtainSize == 'extraLarge') {
        image.style = 'background-image: url(images/variable/multicolorxl.png);';
        image2.style = 'background-image: url(images/variable/multicolorxl.png);';
    }

    if(curtainSize == 'small'){
        priceText.innerHTML = '490 грн.'; 
        priceTextAlt.innerHTML = '490 грн.';

    } 
    if(curtainSize == 'medium') {
        priceText.innerHTML = '590 грн.'; 
        priceTextAlt.innerHTML = '590 грн.';
    }
    if(curtainSize == 'large') {
        priceText.innerHTML = '790 грн.'; 
        priceTextAlt.innerHTML = '790 грн.';
    }
    if(curtainSize == 'extraLarge') {
        priceText.innerHTML = '990 грн.'; 
        priceTextAlt.innerHTML = '990 грн.';
    }
}


document.querySelector(".pop-up_second_card_selection__button").addEventListener("click", function(){
    console.log('Штора-роса', curtainSize, curtainColor);
})