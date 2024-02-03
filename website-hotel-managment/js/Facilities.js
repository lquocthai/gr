const modal1 = document.querySelector('.js-modal-facilities-1')
const modal2 = document.querySelector('.js-modal-facilities-2')
const modal3 = document.querySelector('.js-modal-facilities-3')
const modal4 = document.querySelector('.js-modal-facilities-4')
const modalBookCar = document.querySelector('.js-modal-book-car')

const modalContainer = document.querySelector('.js-modal-container-facilities')
const modalContainer2 = document.querySelector('.js-modal-container-facilities2')
const modalContainer3 = document.querySelector('.js-modal-container-facilities3')
const modalContainer4 = document.querySelector('.js-modal-container-facilities4')
const modalContainerBookCar = document.querySelector('.js-modal-containerBookCar')

const modalClose = document.querySelector('.js-modal-close-facilities')
const modalClose2 = document.querySelector('.js-modal-close-facilities-2')
const modalClose3 = document.querySelector('.js-modal-close-facilities-3')
const modalClose4 = document.querySelector('.js-modal-close-facilities-4')
const modalCloseBookCar = document.querySelector('.js-modal-closeBookCar')

const viewBtns1 = document.querySelectorAll('.js-view-btn-1')
const viewBtns2 = document.querySelectorAll('.js-view-btn-2')
const viewBtns3 = document.querySelectorAll('.js-view-btn-3')
const viewBtns4 = document.querySelectorAll('.js-view-btn-4')
const bookCarBtns = document.querySelectorAll('.js-book-car-btn')
// hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTicket1() {
    modal1.classList.add('open')
}
// hàm ẩn modal mua vé (gở bỏ class open của modal) 
function hideBuyTicket1() {
    modal1.classList.remove('open')
}

function showBuyTicket2() {
    modal2.classList.add('open')
}
function hideBuyTicket2() {
    modal2.classList.remove('open')
}

function showBuyTicket3() {
    modal3.classList.add('open')
}
function hideBuyTicket3() {
    modal3.classList.remove('open')
}

function showBuyTicket4() {
    modal4.classList.add('open')
}
function hideBuyTicket4() {
    modal4.classList.remove('open')
}
// hàm hiển thị modal mua vé (thêm class open vào modal)
// function showBuyTicketBookCar() {
//     modalBookCar.classList.add('open')
// }
// hàm ẩn modal mua vé (gở bỏ class open của modal) 
// function hideBuyTicketBookCar() {
//     modalBookCar.classList.remove('open')
// }
// modal1
for (const viewBtn of viewBtns1) {
    viewBtn.addEventListener('click', showBuyTicket1)
    // lắng nghe sự kiện click vào
}
// modal2
for (const viewBtn of viewBtns2) {
    viewBtn.addEventListener('click', showBuyTicket2)
}
// modal3
for (const viewBtn of viewBtns3) {
    viewBtn.addEventListener('click', showBuyTicket3)
}
// modal4
for (const viewBtn of viewBtns4) {
    viewBtn.addEventListener('click', showBuyTicket4)
}
// modal book car
// for (const bookCarBtn of bookCarBtns) {
//     bookCarBtn.addEventListener('click', showBuyTicketBookCar)
// }
modalClose.addEventListener('click', hideBuyTicket1)
modal1.addEventListener('click', hideBuyTicket1)

modalClose2.addEventListener('click', hideBuyTicket2)
modal2.addEventListener('click', hideBuyTicket2)

modalClose3.addEventListener('click', hideBuyTicket3)
modal3.addEventListener('click', hideBuyTicket3)

modalClose4.addEventListener('click', hideBuyTicket4)
modal4.addEventListener('click', hideBuyTicket4)

// modalCloseBookCar.addEventListener('click', hideBuyTicketBookCar)
// modalBookCar.addEventListener('click', hideBuyTicketBookCar)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})
modalContainer2.addEventListener('click', function (event) {
    event.stopPropagation()
})
modalContainer3.addEventListener('click', function (event) {
    event.stopPropagation()
})
modalContainer4.addEventListener('click', function (event) {
    event.stopPropagation()
})
// modalContainerBookCar.addEventListener('click', function (event) {
//     event.stopPropagation()
// })

// for (const modalContainer of modalContainers) {
//     modalContainer.addEventListener('click', function (event) {
//         event.stopPropagation()
// })
// }



// slide show start

// slide show end

// 4
// slide show
let slideIndexFacilities = 1;
showSlides(slideIndexFacilities);

// Next/previous controls
function plusSlidesFacilities(n) {
    showSlides(slideIndexFacilities += n);
}

// Thumbnail image controls
function currentSlideFacilities(n) {
    showSlides(slideIndexFacilities = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides-facilities");
    if (n > slides.length) { slideIndexFacilities = 1 }
    if (n < 1) { slideIndexFacilities = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
   
    slides[slideIndexFacilities - 1].style.display = "block";
}

// 3
// slide show
let slideIndexFacilities3 = 1;
showSlides3(slideIndexFacilities3);

// Next/previous controls
function plusSlidesFacilities3(n) {
    showSlides3(slideIndexFacilities3 += n);
}

// Thumbnail image controls
function currentSlideFacilities3(n) {
    showSlides3(slideIndexFacilities3 = n);
}

function showSlides3(n) {
    let i;
    let slides3 = document.getElementsByClassName("mySlides3-facilities");
    if (n > slides3.length) { slideIndexFacilities3 = 1 }
    if (n < 1) { slideIndexFacilities3 = slides3.length }
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }
   
    slides3[slideIndexFacilities3 - 1].style.display = "block";
}

// 2
// slide show
let slideIndexFacilities2 = 1;
showSlides2(slideIndexFacilities2);

// Next/previous controls
function plusSlidesFacilities2(n) {
    showSlides2(slideIndexFacilities2 += n);
}

// Thumbnail image controls
function currentSlideFacilities2(n) {
    showSlides2(slideIndexFacilities2 = n);
}

function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2-facilities");
    if (n > slides2.length) { slideIndexFacilities2 = 1 }
    if (n < 1) { slideIndexFacilities2 = slides2.length }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    
    slides2[slideIndexFacilities2 - 1].style.display = "block";
}

// 1
// slide show
let slideIndexFacilities1 = 1;
showSlides1(slideIndexFacilities1);

// Next/previous controls
function plusSlidesFacilities1(n) {
    showSlides1(slideIndexFacilities1 += n);
}

// Thumbnail image controls
function currentSlideFacilities1(n) {
    showSlides1(slideIndexFacilities1 = n);
}

function showSlides1(n) {
    let i;
    let slides1 = document.getElementsByClassName("mySlides1-facilities");
    if (n > slides1.length) { slideIndexFacilities1 = 1 }
    if (n < 1) { slideIndexFacilities1 = slides1.length }
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
   
    slides1[slideIndexFacilities1 - 1].style.display = "block";
}