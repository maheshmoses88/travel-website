
function validateForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("contactemail").value;
    let phone = document.getElementById("contactphone").value;
    
if (name == "") {
    alert("Please enter your name");
    return false;
}

if (email == "") {
    alert("Please enter your email");
    return false;
}

if (!email.includes("@")) {
    alert("Please enter a valid email");
    return false;
}

if (phone.length !== 10 || isNaN(phone)) {
    alert("Please enter a valid 10-digit phone number");
    return false;
}

alert("Form Submitted Successfully");
return true;     
}
let topButton = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
let images = [
    "goa.jpg",
    "kashmir.jpg",
    "kerala.jpg",
    "ooty.jpg",
    "manali.jpg",
    "jaipur.jpg"
];

let index = 0;

setInterval(function () {
    index++;

    if (index >= images.length) {
        index = 0;
    }

    document.getElementById("sliderImage").src = images[index];
}, 3000);

function searchDestination() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {

        let title = cards[i].getElementsByTagName("h3")[0];

        if (title.innerHTML.toLowerCase().includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}
function likePlace(button){

    if(button.innerHTML=="🤍 Favorite"){
        button.innerHTML="❤️ Liked";
    }
    else{
        button.innerHTML="🤍 Favorite";
    }

}
function bookNow() {

    let name = document.getElementById("FullName").value;
    let email = document.getElementById("bookingemail").value;
    let phone = document.getElementById("bookingphone").value;
    let destination = document.getElementById("destination").value;
    let travelDate = document.getElementById("travelDate").value;
    let travelers = document.getElementById("travelers").value;

    if (
        name == "" ||
        email == "" ||
        phone == "" ||
        destination == "" ||
        travelDate == "" ||
        travelers == ""
    ) {
        alert("Please fill all the details");
        return;
    }

    alert("🎉 Booking Successful!");
}



