// header scroll animation
$(window).scroll(function () {
    var headerHeight = $(window).scrollTop()
    if (headerHeight > 0) {
        $("#top-header").addClass("scroll-header")
    } else {
        $("#top-header").removeClass("scroll-header")
    }
});

// hero banner slider
const myCarouselElement = document.querySelector('#banner-slider')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 1500,
    pause: false,
    // wrap:false
})

// mobile menu open
$(".open-menu").click(function () {
    $(".sidebar").addClass("show-menu");
});

// mobile menu close
$(".close-menu").click(function () {
    $(".sidebar").removeClass("show-menu");
});


// Lightbox
$(".card-box").hover(
    function () {
        $(this).find(".card-hover").animate({
            opacity: 1
        }, 600);
    },
    function () {
        $(this).find(".card-hover").animate({
            opacity: 0
        }, 600);
    }
);
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

$overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
$("#gallery").append($overlay);

$overlay.hide();

$(".card-hover").click(function (event) {
    event.preventDefault();
    var imageLocation = $(this).prev().attr("href");
    $image.attr("src", imageLocation);
    $overlay.fadeIn("slow");
});

$overlay.click(function () {
    $(this).fadeOut("slow");
});

$nextButton.click(function (event) {
    $("#overlay img").hide();
    var $currentImgSrc = $("#overlay img").attr("src");
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    var $nextImg = $($currentImg.closest(".lightbox-images").next().find("img"));
    var $images = $("#image-gallery img");
    if ($nextImg.length > 0) {
        $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    } else {
        $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
    }
    event.stopPropagation();
});

$prevButton.click(function (event) {
    $("#overlay img").hide();
    var $currentImgSrc = $("#overlay img").attr("src");
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    var $nextImg = $($currentImg.closest(".lightbox-images").prev().find("img"));
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    event.stopPropagation();
});
$exitButton.click(function () {
    $("#overlay").fadeOut("slow");
});

// testimonials
$('.testimonials-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrow: false,
    dots: false,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});