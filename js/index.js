$(document).ready(function(){
	
    var controller = new ScrollMagic.Controller();
    var tween = TweenMax.to(".title",3,{opacity:1,y:-35,delay:.75,ease:Power2.easeOut});
    var ourScene = new ScrollMagic.Scene({
        triggerElement:".title",
        triggerHook:0.6,
        reverse:false
        
        
    })
    .setTween(tween)
    
    .addTo(controller);
    var tween2 = TweenMax.to(".subtitle",3,{opacity:1,y:-35,delay:1.75,ease:Power2.easeOut});
    var ourScene2 = new ScrollMagic.Scene({
        triggerElement:".title",
        triggerHook:0.6,
        reverse:false
        
        
    })
    .setTween(tween2)
    .addTo(controller);
    
     var tween3 = TweenMax.to(".subbedtitle",3,{opacity:1,y:-35,delay:1.25,ease:Power2.easeOut});
    var ourScene3 = new ScrollMagic.Scene({
        triggerElement:".title",
        triggerHook:0.6,
        reverse:false
        
        
    })
    .setTween(tween3)
    .addTo(controller);
/*  var tween4 = TweenMax.to($("#topcontainer"),2, {delay:1,backgroundImage:'linear-gradient(rgba(45, 122, 152, 0.5), rgba(45, 122, 152, 0.5))',ease: Circ.easeOut});
 // var $img = $('#topcontainer');
// set initial CSS autoAlpha to 0
// GSAP handles the cross browser vendor prefixes
//TweenMax.set($img,{opacity:1});
// animate CSS autoAlpha to 1

//TweenMax.to($img,3, {opacity:0});
 
   var ourScene4 = new ScrollMagic.Scene({
     triggerElement:"#information",
     triggerHook:0.6
   })
   
  // .setClassToggle("#topcontainer","new")
    .addIndicators()
  .setTween(tween4)
   
   .addTo(controller);*/
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 900, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
								
								
  /*  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });*/
 
 //scroll to sponsors section
  $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });

 //scroll to next section after sponsors
  $(function() {
    $('.scroll-down1').click (function() {
      $('html, body').animate({scrollTop: $('section.ok1').offset().top }, 'slow');
      return false;
    });
  });
    
    var menuClicked = false;
    checkPosition(menuClicked); //check page position on init

    //change navbar look when page is not at top
    $(document).scroll(function(){
        checkPosition(menuClicked);
    });

    document.getElementById("navbarCollapseButton").addEventListener("click", function(){
        menuClicked = !menuClicked;
        checkPosition(menuClicked);
    });

    //function to handle page position and navbar transitions
    function checkPosition(menuStatus){
        var position = $(this).scrollTop(); //get page position
        if(position == 0){
            if(menuStatus)
                $(".navbar-special").addClass("navbarStateScrolled");
            else
                $(".navbar-special").removeClass("navbarStateScrolled");
        }
        else{
            $(".navbar-special").addClass("navbarStateScrolled");
        }
    }

    
    
    
});
