function showSlide(k) {
    let slide = document.getElementsByClassName('slide');
    slide[k].style.display = 'block';
}

function hideSlide(k) {
    let slide = document.getElementsByClassName('slide');
    slide[k].style.display = 'none';
}

function nextSlide() {
    hideSlide(index);
    index++;
    if (index >= slide.length)
        index = 0;
    showSlide(index);
}

function previousSlide() {
    hideSlide(index);
    index--;
    if (index <= slide.length)
        index = 2;
    showSlide(index);
}
let slide = document.getElementsByClassName('slide');
let index = 0;
setInterval(nextSlide, 2000);