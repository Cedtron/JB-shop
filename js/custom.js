
$(function() {
  // to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

AOS.init();

$('#whatsapp').floatingWhatsApp({
    phone: '0772728459',
    popupMessage: 'Hello, Welcome JB shop?',
    showPopup: true,
    position:	'right'
  });




document.addEventListener('DOMContentLoaded', function() {
    // Assuming you have already fetched the productsData object

    // Get the dropdown element
    const dropdown = document.querySelector('#dropdown');

    // Loop through the categories in productsData
    productsData.categories.forEach(category => {
        // Create a new list item
        const listItem = document.createElement('li');
        // Create a new anchor element
        const anchor = document.createElement('a');
        // Set the href attribute of the anchor element
        anchor.href = `product.html?category=${category.name.toLowerCase()}`;
        // Set the text content of the anchor element to the category name
        anchor.textContent = category.name;
        // Add a class to the anchor element
        anchor.classList.add('nav-link');
        // Append the anchor element to the list item
        listItem.appendChild(anchor);
        // Append the list item to the dropdown
        dropdown.appendChild(listItem);
    });
});

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
})