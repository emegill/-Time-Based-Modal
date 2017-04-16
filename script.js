 

var carousel=document.getElementsByClassName("hero")[0]

 function carouselStart() {
    carousel.style.backgroundImage="url('a.jpg')"
    window.setTimeout(pic2,4000)
}

 carouselStart();

 function pic2(){
    carousel.style.backgroundImage="url('b.jpg')"
    window.setTimeout(pic3,4000)

 }

  function pic3(){
    carousel.style.backgroundImage="url('c.jpg')"
    window.setTimeout(carouselStart,4000)

 }

var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var openM;

function openModal() {
    window.onload = delayModal()
}

function delayModal() {
    openM = setTimeout(openFunc, 3000);
}

function openFunc() {
    modal.style.display = "block";
}

openModal()