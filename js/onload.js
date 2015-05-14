


$(function() {

	 $("html").removeClass("no-js");


	// enable circular scrollables with a click handler
	$(".scroll").scrollable({ circular: false }).click(function() {

	});

		    var 
		      speed = 1000,   // animation speed
		      $wall = $('#wrapper').find('.wrap')
		    ;

		    $wall.masonry({
		      columnWidth: 50, 
		      // only apply masonry layout to visible elements
		      itemSelector: '.box:not(.invis)',
		      animate: true,
		      animationOptions: {
			    duration: 750,			
			    easing: 'linear',
			    queue: false
			  }
		    });

		    $('.filtering-nav a').click(function(){
		      var colorClass = '.' + $(this).attr('class');

		      if(colorClass=='.all') {
		        // show all hidden boxes
		        $wall.children('.invis')
		          .toggleClass('invis').fadeIn(speed);
		      } else {  
		        // hide visible boxes 
		        $wall.children().not(colorClass).not('.invis')
		          .toggleClass('invis').fadeOut(speed);
		        // show hidden boxes
		        $wall.children(colorClass+'.invis')
		          .toggleClass('invis').fadeIn(speed);
		      }
		      $wall.masonry();

		      return false;
		    });
		
				
					$('div.photo a').fancyZoom({scaleImg: true, closeOnClick: true});



				// hides the slickbox as soon as the DOM is ready
				 // (a little sooner than page load)
				  $('#contact_pop').hide();
				 // shows the slickbox on clicking the noted link  
				

				 // toggles the slickbox on clicking the noted link  
				  $('.email').click(function() {
				    $('#contact_pop').slideToggle(400);
				    return false;
				  });
				
			
				var $elem = $('.home');


				    $('#none-filtering').click(
				        function (e) {
				            $('html, body').animate({scrollTop: $elem.height()}, 800);
				        }
				    );

			

					


});

