// 이미지 슬라이드 기능을 위한 JavaScript 코드
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // 3초마다 이미지 변경
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
