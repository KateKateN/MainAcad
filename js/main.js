$(document).ready(function(){
//add phone
	// $(".tel-first").click(function(){
	// 	$(".tel-second, .address").toggle();
	// 	$(".tel-second, .address").toggleClass("flipInX animated");
	// 	$(".add-tel-btn").toggleClass("fa-angle-up fa-angle-down");	
	// });
// slider
$('.main-slider').slick({
	 	dots: true,
	 	 dotsClass: "slick-dots",
        // autoplay: true,
        // arrows: true,
        nextArrow: '<img src="img/ico/slim-rightt.png" class="rt-arrow">',
        // prevArrow: '<img src="img/ico/no-translate-detected_318-38739.jpg" class="arrow-lt">',
        prevArrow: '<img src="img/ico/slim-leftt.png" class="lft-arrow">',
        infinite: true,
        fade: true,
        // cssEase: 'linear',
        slidesToShow: 1,
        appendArrows: $(".header-content")[0]



    //       responsive: [
    // {
    //   breakpoint: 768,
    //   settings: {
    //     arrows: false,
    //     dots: true,
    //     // centerMode: true,
    //     // centerPadding: '48px',
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   }
    // }
    // ]
      });
// courses button
  $(".course-wrapper").hover(function(){
        $(this).find(".course-btn").css("visibility", "visible").addClass("flipInX animated");
    }, function(){
    	$(this).find(".course-btn").css("visibility", "hidden").removeClass("flipInX animated");
    });

// change text in slider-content
	var texts = ['Запрошуємо в MAIN ACADEMY на навчання','Приєднуйся до групи Front End','День вікритих дверей кожний четвер','Набір в групу Front End'];
	$(".slider-content").text(texts[0]);

// UP BUTTON 
function up() {  
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
     if(top > 0) {  
       window.scrollBy(0,((top+100)/-10));  
       t = setTimeout('up()',20);  
       } else clearTimeout(t);  
       return false;  
     }

    $(window).scroll(function() {
      if($(this).scrollTop() != 0) {
          $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
        }
    });
  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });

// MENU (SMOOTH SCROLLING)
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


});