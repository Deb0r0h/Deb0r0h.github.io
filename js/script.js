////////////////////////////////////////// bar ////////////////////////////////////////

$(document).ready(function(){
  var animationExecuted = false;

  function animateProgressBar() {
      $('.progress-bar').each(function(){
          $(this).animate({
              width: $(this).attr('aria-valuenow') + '%'
          }, 1000);
      });
      animationExecuted = true;
  }

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var skillsSection = $('#skills').offset().top;
      var skillsSectionHeight = $('#skills').outerHeight();
      var skillsSectionBottom = skillsSection + skillsSectionHeight;
      var isSkillsSectionVisible = (scroll + windowHeight > skillsSection) && (scroll < skillsSectionBottom);

      if (!animationExecuted && isSkillsSectionVisible) {
          animateProgressBar();
      }
  });
});
////////////////////////////////////////// cv ////////////////////////////////////////


document.getElementById('getCVBtn').addEventListener('click', function() {
    window.open('pdf/CV_github.pdf', '_blank');
});


////////////////////////////////////////// img ////////////////////////////////////////



document.addEventListener("DOMContentLoaded", function(event) {
    var img = document.querySelector(".about_img img");
    img.classList.add("visible");
});



//////////////////////////////////////////// navbar //////////////////////////////////////


(function($) {
    'use strict';

    var nav_offset_top = $('header').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area').addClass('navbar_fixed');
                } else {
                    $('.header_area').removeClass('navbar_fixed');
                }

                $('section').each(function() {
                    var sectionId = $(this).attr('id');
                    var sectionTop = $(this).offset().top - nav_offset_top;
                    var sectionBottom = sectionTop + $(this).outerHeight();
                    if (scroll >= sectionTop && scroll < sectionBottom) {
                        $('.nav-item').removeClass('active'); 
                        $('a[href="#' + sectionId + '"]').closest('.nav-item').addClass('active'); 
                    }
                });
            });
        }
    }
    navbarFixed();
})(jQuery);

////////////////////////////////////////// typing ////////////////////////////////////////



document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('#typed-engineering', {
      strings: ['Engineer'],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true 
    });
  });
  


//////////////////////////////////////////////////////////////////////////////////


