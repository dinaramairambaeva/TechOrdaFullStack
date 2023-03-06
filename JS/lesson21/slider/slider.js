let rootContext = document.body.getAttribute("data-root")
let imgs = [
    'https://play-lh.googleusercontent.com/qyfXLNVM_cLm8NkYX7ZtNBPPnBmu1OJj0nFkaZvAg3HAFf8EzsGuwP_cNvZ6uneTEQI', 
    'https://i.pinimg.com/736x/0b/b8/7b/0bb87bfac3b5a73e254535a6b196bda6.jpg',
    'https://image.winudf.com/v2/image1/Y29tLkFlc3RoZXRpYy5HaXJseS53YWxscGFwZXJfc2NyZWVuXzFfMTYyNTk1MzAzMF8wMTY/screen-1.jpg?fakeurl=1&type=.webp',
    'https://i.pinimg.com/736x/9a/72/ca/9a72caecd766a6818dcad9118bf9446b.jpg'
];
let btnLeft = document.getElementById('slider-left');
let btnRight = document.getElementById('slider-right');
let sliderImage = document.getElementById('slider-image');
let current = 0;
sliderImage.src = imgs[current];
btnRight.onclick = function() {
    if (current == imgs.length - 1){
        current = 0;
    }else{
        current++;
    }
    sliderImage.src =  imgs[current];
}

btnLeft.onclick = function() {
    if (current == 0){
        current = imgs.length - 1;
    }else{
        current--;
    }
    sliderImage.src =  imgs[current];
}