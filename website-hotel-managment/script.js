$(document).ready(function () {
  $('.tab-content-item').hide();
  $('.tab-content-item:first-child').fadeIn();
  $('.navbar li').click(function () {
    $('.navbar li').removeClass('navbar-active');
    $(this).addClass('navbar-active');
  });
  let navbar = document.querySelector('.navbar');

  $('.nav-tabs li').click(function () {

    $('.nav-tabs li').removeClass('room-active');
    $(this).addClass('room-active');


    let id_tab_content = $(this).children('a').attr('href');

    $('.tab-content-item').hide();
    $(id_tab_content).fadeIn();

    return false;
  });
});

// window envent


let page_loader = document.querySelector(".page_loader");

function loading_done() {
  page_loader.classList.add("page_load_done");
}

setTimeout(function() { loading_done(); }, 2500);



let header_menu = document.querySelector(".navbar-wrapper");
let menu_item = document.querySelectorAll(".navbar_item");
let navbar_item_about = document.querySelector(".navbar_item_about");
let navbar_item_room = document.querySelector(".navbar_item_room");
let navbar_item_facilities = document.querySelector(".navbar_item_facilities");
let navbar_item_special_offer = document.querySelector(".navbar_item_special_offer");
let navbar_item_gallery = document.querySelector(".navbar_item_gallery");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    header_menu.classList.add("menu_hide");
  }
  else {
    header_menu.classList.remove("menu_hide");
  }
  lastScrollY = window.scrollY;

  if(lastScrollY < 1400){
    menu_item.forEach(item =>{
        item.classList.remove("navbar-active");
    });
    navbar_item_about.classList.add("navbar-active"); 
  }

  if(lastScrollY >1600){
    menu_item.forEach(item =>{
        item.classList.remove("navbar-active");
    });
    navbar_item_room.classList.add("navbar-active");
    
  }

  if(lastScrollY >2200){
    menu_item.forEach(item =>{
        item.classList.remove("navbar-active");
    });
    navbar_item_facilities.classList.add("navbar-active");
  }

  if(lastScrollY > 5600){
    menu_item.forEach(item =>{
        item.classList.remove("navbar-active");
    });
    navbar_item_special_offer.classList.add("navbar-active");
  }

  if(lastScrollY > 6300){
    menu_item.forEach(item =>{
        item.classList.remove("navbar-active");
    });
    navbar_item_gallery.classList.add("navbar-active");
  }
});



let room1SlideIndex = 1;
showRoom1Slides(room1SlideIndex);

function plusRoom1Slides(n) {
  showRoom1Slides(room1SlideIndex += n);
}

function currentRoom1Slide(n) {
  showRoom1Slides(room1SlideIndex = n);
}

function showRoom1Slides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides sl1");
  if (n > slides.length) { room1SlideIndex = 1 }
  if (n < 1) { room1SlideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[room1SlideIndex - 1].style.display = "block";
}


// room 2 slide show

let room2SlideIndex = 1;
showRoom2Slides(room2SlideIndex);

function plusRoom2Slides(n) {
  showRoom2Slides(room2SlideIndex += n);
}

function currentRoom2Slide(n) {
  showRoom2Slides(room2SlideIndex = n);
}

function showRoom2Slides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides sl2");
  if (n > slides.length) { room2SlideIndex = 1 }
  if (n < 1) { room2SlideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[room2SlideIndex - 1].style.display = "block";
}

// room 3 slide show

let room3SlideIndex = 1;
showRoom3Slides(room3SlideIndex);

function plusRoom3Slides(n) {
  showRoom3Slides(room3SlideIndex += n);
}

function currentRoom3Slide(n) {
  showRoom3Slides(room3SlideIndex = n);
}

function showRoom3Slides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides sl3");
  if (n > slides.length) { room3SlideIndex = 1 }
  if (n < 1) { room3SlideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[room3SlideIndex - 1].style.display = "block";
}

// room 4 slide show

let room4SlideIndex = 1;
showRoom4Slides(room4SlideIndex);

function plusRoom4Slides(n) {
  showRoom4Slides(room4SlideIndex += n);
}

function currentRoom4Slide(n) {
  showRoom4Slides(room4SlideIndex = n);
}

function showRoom4Slides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides sl4");
  if (n > slides.length) { room4SlideIndex = 1 }
  if (n < 1) { room4SlideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[room4SlideIndex - 1].style.display = "block";
}

// Thanh js

let slideThanhIndex = 1;
showThanhSlides(slideThanhIndex);

function plusThanhSlides(n) {
  showThanhSlides(slideThanhIndex += n);
}

function currentThanhSlide(n) {
  showThanhSlides(slideThanhIndex = n);
}

function showThanhSlides(n) {
  let i;
  let slides = document.getElementsByClassName("thanh_homeSlides");
  if (n > slides.length) { slideThanhIndex = 1 }
  if (n < 1) { slideThanhIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideThanhIndex - 1].style.display = "block";
}
// modal
const thanhmodal1 = document.querySelector('.thanh-js-modal-1')
const thanhmodalContainer = document.querySelector('.thanh-js-modal-container')
const thanhmodalClose = document.querySelector('.thanh-js-modal-close')
const thanhviewBtns1 = document.querySelectorAll('.thanh-js-view-btn-1')

function showBuyTicket1() {
  thanhmodal1.classList.add('open')
}
function hideBuyTicket1() {
  thanhmodal1.classList.remove('open')
}
for (const thanhviewBtn of thanhviewBtns1) {
  thanhviewBtn.addEventListener('click', showBuyTicket1)
}
thanhmodalClose.addEventListener('click', hideBuyTicket1)
thanhmodal1.addEventListener('click', hideBuyTicket1)
thanhmodalContainer.addEventListener('click', function (event) {
  event.stopPropagation()
})

// add js
const modal5 = document.querySelector(".js-modal-room-1");
const modalContainer5 = document.querySelector(".js-modal-container-room1");
const modal6 = document.querySelector(".js-modal-room-2");
const modalContainer6 = document.querySelector(".js-modal-container-room2");
const modal7 = document.querySelector(".js-modal-room-3");
const modalContainer7 = document.querySelector(".js-modal-container-room3");
const modal8 = document.querySelector(".js-modal-room-4");
const modalContainer8 = document.querySelector(".js-modal-container-room4");

const modalClose5 = document.querySelector('.js-modal-close-room-1');
const viewRoom1Btn = document.querySelectorAll(".deluxe_twin_detail");

function showBuyTicket5() {
  modal5.classList.add('open')
}

function hideBuyTicket5() {
  modal5.classList.remove('open')
}

function showBuyTicket6() {
  modal6.classList.add('open')
}

function hideBuyTicket6() {
  modal6.classList.remove('open')
}

function showBuyTicket7() {
  modal7.classList.add('open')
}

function hideBuyTicket7() {
  modal7.classList.remove('open')
}

function showBuyTicket8() {
  modal8.classList.add('open')
}

function hideBuyTicket8() {
  modal8.classList.remove('open')
}





let slideIndexFacilities5 = 1;
showSlides5(slideIndexFacilities5);

// Next/previous controls
function plusSlidesFacilities5(n) {
  showSlides5(slideIndexFacilities5 += n);
}

// Thumbnail image controls
function currentSlideFacilities5(n) {
  showSlides5(slideIndexFacilities5 = n);
}

function showSlides5(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides5-facilities");
  if (n > slides.length) { slideIndexFacilities5 = 1 }
  if (n < 1) { slideIndexFacilities5 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexFacilities5 - 1].style.display = "block";
}

let slideIndexFacilities6 = 1;
showSlides6(slideIndexFacilities5);

// Next/previous controls
function plusSlidesFacilities6(n) {
  showSlides6(slideIndexFacilities6 += n);
}

// Thumbnail image controls
function currentSlideFacilities6(n) {
  showSlides6(slideIndexFacilities6 = n);
}

function showSlides6(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides6-facilities");
  if (n > slides.length) { slideIndexFacilities6 = 1 }
  if (n < 1) { slideIndexFacilities6 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexFacilities6 - 1].style.display = "block";
}

let slideIndexFacilities7 = 1;
showSlides7(slideIndexFacilities7);

// Next/previous controls
function plusSlidesFacilities7(n) {
  showSlides7(slideIndexFacilities7 += n);
}

// Thumbnail image controls
function currentSlideFacilities7(n) {
  showSlides7(slideIndexFacilities7 = n);
}

function showSlides7(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides7-facilities");
  if (n > slides.length) { slideIndexFacilities7 = 1 }
  if (n < 1) { slideIndexFacilities7 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexFacilities7 - 1].style.display = "block";
}

let slideIndexFacilities8 = 1;
showSlides8(slideIndexFacilities8);

// Next/previous controls
function plusSlidesFacilities8(n) {
  showSlides8(slideIndexFacilities8 += n);
}

// Thumbnail image controls
function currentSlideFacilities8(n) {
  showSlides8(slideIndexFacilities8 = n);
}

function showSlides8(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides8-facilities");
  if (n > slides.length) { slideIndexFacilities8 = 1 }
  if (n < 1) { slideIndexFacilities8 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexFacilities8 - 1].style.display = "block";
}

