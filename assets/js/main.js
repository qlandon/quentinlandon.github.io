  // progress bar
// Animated Prograssbar
$("[progress-bar]").each(function () {
  $(this)
      .find(".progress-fill")
      .animate(
      {
          width: $(this).attr("data-percentage"),
      },
      2000
      );

  $(this)
      .find(".progress-number-mark")
      .animate(
      { left: $(this).attr("data-percentage") },
      {
          duration: 1000,
          step: function (now, fx) {
          var data = Math.round(now);
          $(this)
              .find(".percent")
              .html(data + "%");
          },
      }
      );
  });
/*----------------------------- Site Loader & Popup --------------------*/
$(window).on("load", function () { 
  $("#bx-overlay").fadeOut("slow"); 
});
$(document).ready(function () {
    "use strict";
  /*----------------------------- Scroll Up Button --------------------- */
  var btn = $('#scrollup');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  /*--------------------- Aos animation on scroll --------------------*/
  AOS.init({
    once: true
  });

  /*-------------------- Potfolio for Mixit up --------------------*/
  var portfolioContent = $('.portfolio-content');
		portfolioContent.mixItUp();

  /*--------------------- On click menu scroll section to section -------------------------------- */
  // Cache selectors
    var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({ 
      scrollTop: offsetTop
    }, 300);
    e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#"+id+"']").parent().addClass("active");
    }                   
  });

  /*--------------------- Scroll to fixed navigation bar -------------------------------- */
  $(function() {
		var header = $(".bx-static");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('bx-static').addClass("bx-fixed");
			} else {
				header.removeClass("bx-fixed").addClass('bx-static');
			}
		});
	});

  /*--------------------- News carousel -------------------------------- */
    $('.owl-theme').owlCarousel({
      autoplay: true,
      loop: true,
      dots:false,
      items: 10,
      margin:24,
      slideTransition: 'linear',
      autoplayTimeout: 1000,
      autoplaySpeed: 2000,
      autoplayHoverPause: false,
      responsive: {
          0: {
              items: 2,
              nav: false
          },
          400: {
              items: 3,
              nav: false
          },
          576: {
              items: 5,
              nav: false
          },
          768: {
              items: 8,
              nav: false
          },
      }
  });
 



    /*--------------------- parallaxmouse JS -------------------------------- */
  $(window).parallaxmouse({
    invert: true,
    range: 400,
    elms: [
        { el: $('#shape1'), rate: 0.2 },
        { el: $('#shape2'), rate: 0.2 },
        { el: $('#shape4'), rate: 0.3 },
        { el: $('#shape5'), rate: 0.2 },
        { el: $('#shape3'), rate: 0.12 },
    ]
});
});