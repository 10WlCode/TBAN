/*------------------------------------------------------------------
[Master Scripts]

Project:    Maestro template
Version:    1.2.2

[Table of contents]

[Components]
	-Preloader
	-Equal Height function
	 screen navigation open
	-Full screen navigation open
	-Fixed header
	-Screen rezise events
	-Screen resize
	-Fix centered container
	-Banner slider
	-Portfolio items & filtering
	-Blog items & filtering
	-Image carousel
	-Image carousel
	-Full sreen navigation
	-Animation
	-Animation
	-Load more
	-Coming soon countdown
	
-------------------------------------------------------------------*/

"use strict";

/*------------------------------------------------------------------
[ Preloader ]
*/
jQuery(window).on('load', function () {
    var $preloader = jQuery('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

jQuery(document).ready(function() {


	/*------------------------------------------------------------------
	[ Equal Height function ]
	*/
	function equalHeight(group) {
        if(jQuery(window).width() > '768') {
			var tallest = 0;
	       	jQuery(group).each(function() {
	            var thisHeight = jQuery(this).css('height', "").height();
	            if(thisHeight > tallest) {
	                tallest = thisHeight;
	            }
	        });
	        jQuery(group).height(tallest);
	    } else {
	    	jQuery(group).height('auto');
	    }
    }

    /*------------------------------------------------------------------
	[ Navigation open ]
	*/
	jQuery('.full-screen-nav-button').on("click", function(){
		if (jQuery(this).hasClass('active')) {
			jQuery(this).removeClass('active');
			jQuery('.full-screen-nav').fadeOut();
		} else {
			jQuery(this).addClass('active');
			jQuery('.full-screen-nav').fadeIn();
			jQuery('.fsn-container .cell').css('height', jQuery('.fsn-container').height());
		};
	});

	jQuery('.default-nav-button').on("click", function(){
		if (jQuery(this).hasClass('active')) {
			jQuery(this).removeClass('active').parent().find('.navigation').removeClass('active');
		} else {
			jQuery(this).addClass('active').parent().find('.navigation').addClass('active');
		};
	});

    /*------------------------------------------------------------------
	[ Search ]
	*/

	jQuery('.search-button').on("click", function(){
		if (jQuery(this).hasClass('active')) {
			jQuery(this).removeClass('active')
			jQuery('.search-p-block').fadeOut();
		} else {
			jQuery(this).addClass('active')
			jQuery('.search-p-block').fadeIn();
		};
	});

	jQuery('.search-p-block .close').on("click", function(){
		jQuery('.search-button').removeClass('active')
		jQuery('.search-p-block').fadeOut();
	});

	/*------------------------------------------------------------------
	[ Mobile menu ]
	*/
	
	jQuery(window).on("load resize", function(){
		if(jQuery(window).width() <= '1200') {
			jQuery('.navigation .menu-item-has-children > a').on("click", function(){
				if(!jQuery(this).hasClass('active')) {
					jQuery(this).addClass('active').parent().children('.sub-menu').slideDown().siblings().children('.sub-menu').slideUp();
					return false;
				}
			});
			jQuery('.navigation .page_item_has_children > a').on("click", function(){
				if(!jQuery(this).hasClass('active')) {
					jQuery(this).addClass('active').parent().children('.children').slideDown().siblings().children('.children').slideUp();
					return false;
				}
			});
		}

		if(jQuery(window).width() > '1200') {
			if(jQuery('.navigation > ul > li').length > 7) {
				jQuery('.navigation').addClass('min');
			}
			if(jQuery('.navigation > ul > li').length > 8) {
				jQuery('.navigation').addClass('min2');
			}
		} else {
			jQuery('.navigation').removeClass('min').removeClass('min2');
		}
	});

	jQuery('#wpadminbar').addClass('wpadminbar');

    /*------------------------------------------------------------------
	[ Full screen navigation open ]
	*/

	if(jQuery('#map').length > 0){
		function initialize() {
			var myLatlng = new google.maps.LatLng(51.522999, -0.157947);
			var mapOptions = {
				zoom: 16,
				center: myLatlng,
				disableDefaultUI: true,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":1}]}]
			}
			var map = new google.maps.Map(document.getElementById("map"), mapOptions);

			var myLatLng = new google.maps.LatLng(51.522999, -0.157947);
			var beachMarker = new google.maps.Marker({
				position: myLatLng,
				map: map
			});
			google.maps.event.addDomListener(window, "resize", function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");
				map.setCenter(center); 
			});
		}
		google.maps.event.addDomListener(window, 'load', initialize);
	}

	/*------------------------------------------------------------------
	[ Fixed header ]
	*/
	
	if(jQuery('.header').hasClass('transperent')){
		var h_class = 'transperent';
	}
	jQuery(window).on("load resize scroll", function(){
		if ( jQuery(document).scrollTop() > 0 ) {
			jQuery('.header').addClass('fixed').removeClass('transperent');
		} else {
			jQuery('.header').removeClass('fixed');
			if (h_class == 'transperent') {
				jQuery('.header').addClass('transperent');
			}
		}
	});

	/*------------------------------------------------------------------
	[ Screen rezise events ]
	*/
	
	jQuery(window).on("load resize scroll", function(){
		jQuery('.fsn-container .cell').css('height', jQuery('.fsn-container').height());
	});

	/*------------------------------------------------------------------
	[ Screen resize ]
	*/
	var nav = "no";
	if(jQuery('.navigation').hasClass('active')) {
		nav = "yes";
	}
	jQuery(window).on("load resize", function(){
		jQuery('.banner:not(.fixed-height)').each(function(){
			jQuery(this).css('height', jQuery(window).outerHeight()-jQuery('.header-space').height()-jQuery('#wpadminbar').height());
			jQuery(this).find('.item').css('height', jQuery(window).outerHeight()-jQuery('.header-space').height()-jQuery('#wpadminbar').height());
		});
		jQuery('.banner.fixed-height').each(function(){
			jQuery(this).find('.item').css('height', jQuery(this).height());
		});

		if(jQuery(window).width() >= '768') {
	       	jQuery('.side-image').each(function() {
	            jQuery(this).css('height', jQuery(this).parent('.fw-row').height());
	        });
	    } else {
	    	jQuery('.side-image').height('auto');
	    }

	    jQuery('.header-space').css('height', jQuery('.header').outerHeight()+jQuery('.ypromo-site-bar').outerHeight());

	    equalHeight(jQuery(".pricelist-items").find('.rows'));

	    equalHeight(jQuery(".blog-items:not(.masonry) .article-item2").find('.rows'));

	    equalHeight(jQuery(".icon-box"));

	    equalHeight(jQuery(".icon-box2"));

	    equalHeight(jQuery(".icon-box4"));

	    equalHeight(jQuery(".woocommerce .products div.product"));

	    jQuery('main.fw-main-row').css('min-height', jQuery(window).height()-jQuery('.header-space').height()-jQuery('.footer').outerHeight());

	    if(jQuery(window).height()-jQuery('.header-space').height() >= jQuery('.footer').outerHeight()) {
	    	jQuery('#content-wrap').css('margin-bottom', jQuery('.footer').outerHeight()).removeClass('static');
	    } else {
	    	jQuery('.footer').addClass('static');
	    }

	    if(jQuery(window).width() > 1200) {
			if(nav == "yes") {
				jQuery('.navigation').addClass('active');
				jQuery('.nav-button').addClass('hidden').removeClass('active');
			}
		} else {
			if(nav == "yes") {
				jQuery('.navigation').removeClass('active');
				jQuery('.nav-button').removeClass('hidden').removeClass('active');
			}
		}

	});

    /*------------------------------------------------------------------
	[ Fix centered container ]
	*/
	jQuery(window).on("load resize", function(){
		jQuery('.centered-container').each(function() {
			var width = parseInt(Math.round(jQuery(this).width()).toFixed(0)),
				height = parseInt(Math.round(jQuery(this).height()).toFixed(0));

			jQuery(this).css('width', '').css('height', '');

			if ( width & 1 ) {jQuery(this).css('width', (width+1)+'px');}

			if ( height & 1 ) {jQuery(this).css('height', (height+1)+'px');}
		});
	});

	/*------------------------------------------------------------------
	[ Blog items & filtering ]
	*/
	jQuery(window).on("load", function(){
		jQuery('.filter-items, .portfolio-items').each(function(){
			var $grid = jQuery(this).isotope();

			if($grid.hasClass('masonry')){
				console.log('masonry');
				var $grid = jQuery(this).isotope({
					itemSelector: 'article',
					masonry: {
						columnWidth: 'article'
					}
				});
			} else {
				console.log('grid');
				var $grid = jQuery(this).isotope({
					itemSelector: 'article'
				});
			}

			jQuery(this).prev('.filter-button-group').on( 'click', 'button', function() {
				jQuery(this).addClass('active').siblings().removeClass('active');
				var filterValue = jQuery(this).attr('data-filter');
				$grid.isotope({ filter: filterValue });
			});
		});
	});
	
	/*------------------------------------------------------------------
	[ Full sreen navigation ]
	*/
	
	jQuery(window).on("load resize", function(){
		jQuery('.full-screen-nav .menu-item-has-children > a').on("click", function(){
			if(!jQuery(this).hasClass('active')) {
				jQuery(this).addClass('active').parent().children('.sub-menu').slideDown().parent().siblings().children('a').removeClass('active').next('.sub-menu').slideUp();
				return false;
			}
		});
	});

	/*------------------------------------------------------------------
	[ Animation ]
	*/
	
	jQuery(window).on("load scroll", function(){
		jQuery('.animateNumber').each(function(){
			var num = parseInt(jQuery(this).attr('data-num'));
			
			var top = jQuery(document).scrollTop()+(jQuery(window).height());
			var pos_top = jQuery(this).offset().top;
			if (top > pos_top && !jQuery(this).hasClass('active')) {
				jQuery(this).addClass('active').animateNumber({ number: num },2000);
			}
		});
		jQuery('.animateProcent').each(function(){
			var num = parseInt(jQuery(this).attr('data-num'));
			var percent_number_step = jQuery.animateNumber.numberStepFactories.append('%');
			var top = jQuery(document).scrollTop()+(jQuery(window).height());
			var pos_top = jQuery(this).offset().top;
			if (top > pos_top && !jQuery(this).hasClass('active')) {
				jQuery(this).addClass('active').animateNumber({ number: num, numberStep: percent_number_step },2000);
			}
		});
	});

	/*------------------------------------------------------------------
	[ Animation ]
	*/
	
	jQuery('.rating-item').find('.line').find('div').css('width', '0%');
	jQuery(window).on("load scroll", function(){
		jQuery('.rating-item').each(function(){
			var num = parseInt(jQuery(this).find('.line div').attr('data-value')),
				top = jQuery(document).scrollTop()+(jQuery(window).height()),
				pos_top = jQuery(this).offset().top;

			if (top > pos_top && !jQuery(this).hasClass('active')) {
				jQuery(this).addClass('active').find('.line div').css('width', num+'%');
			}
		});
	});

	/*------------------------------------------------------------------
	[ Load more ]
	*/

	if(jQuery('.load-items').length > 0) {
		var button = 0;
		jQuery('.load-button a').on('click', function() {
			var id = jQuery(this).attr('data-id'),
				el = jQuery('.load-items-id'+id),
				cout_pages = el.length;
			button++;
			if(cout_pages == 1) {
				jQuery(this).parent('.load-button').fadeOut();
			}
			var $items = jQuery('.load-items-id'+id+'.load-items-page'+button).find('.item');
			if(jQuery(this).parent().hasClass('filter') || jQuery(this).parent().hasClass('masonry')) {
  				jQuery('.load-items-id'+id+'.load-items-page'+button).parent().append( $items ).isotope( 'appended', $items );
  				jQuery('.load-items-id'+id+'.load-items-page'+button).remove();
			} else {
				jQuery('.load-items-id'+id+'.load-items-page'+button).parent().append( $items );
				jQuery('.load-items-id'+id+'.load-items-page'+button).remove();
			}
			return false;
		});
	}

	/*------------------------------------------------------------------
	[ Comment reply ]
	*/

	jQuery('.replytocom').on('click', function(){
		var id_parent = jQuery(this).attr('data-id');
		jQuery('#comment_parent').val(id_parent);
		jQuery('#respond').appendTo(jQuery(this).parents('.comment-item'));
		jQuery('#cancel-comment-reply-link').show();
		return false;
	});

	jQuery('#cancel-comment-reply-link').on('click', function(){
		jQuery('#comment_parent').val('0');
		jQuery('#respond').appendTo(jQuery('#commentform-area'));
		jQuery('#cancel-comment-reply-link').hide();
		return false;
	});



	/*------------------------------------------------------------------
	[ Popup image ]
	*/
	
	if(jQuery('.popup-link').length > 0) {
		jQuery('.popup-link').append('<div></div>');
		jQuery('.popup-link').magnificPopup({
			type: 'image',
			mainClass: 'mfp-fade'
		});
	}
	
	if(jQuery('.popup-gallery').length > 0) {
		jQuery('.popup-gallery').magnificPopup({
			type: 'image',
			delegate: 'a',
			mainClass: 'mfp-fade',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
		});
	}

	/*------------------------------------------------------------------
	[ Parallax ]
	*/

	jQuery(window).on('load scroll', function(){
		jQuery('.background-parallax').each(function(){
			jQuery(this).css('background-position','50% ' + ((jQuery(window).scrollTop()-jQuery(this).offset().top) / 2) + 'px');
			if(jQuery(this).height() < jQuery(window).height()) {
				jQuery(this).css('background-size','auto '+jQuery(window).height()+'px');
			}
		});
	});

	/*------------------------------------------------------------------
	[ Tabs ]
	*/

	jQuery('.tabs-head').on('click', '.item:not(.active) > div', function() {  
		jQuery(this).parent().addClass('active').siblings().removeClass('active')  
		.parents('.tabs-container').find('.active-line').css('left', jQuery(this).parent().position().left).attr('data-pos', jQuery(this).parent().position().left)
		.parents('.tabs-container').find('.tabs-body .fw-row').eq(jQuery(this).parent().index()).removeClass('active').fadeIn(500).siblings('.fw-row').hide();  
	});

	jQuery('.tabs-head .item').hover(function() {
		var pos = jQuery(this).position().left;
		jQuery(this).parents('.tabs-container').find('.active-line').css('left', pos);
	},function() {
		var pos = jQuery(this).parents('.tabs-container').find('.active-line').attr('data-pos');
		jQuery(this).parents('.tabs-container').find('.active-line').css('left', pos+'px');
	});

	/*------------------------------------------------------------------
	[ Smart pricing ]
	*/

	jQuery('.price-smart-button').on('click', function(){
		var el = jQuery(this),
			price_el = el.parent().find('.price-list-item').clone(),
			wrap = el.parents('.price-smart-list-items').find('.price-smart-show');
		if(!el.hasClass('active')) {
			el.addClass('active').parent().siblings().find('.price-smart-button').removeClass('active');
			wrap.fadeOut(function(){wrap.html(price_el).fadeIn()});
		}
	});

	/*------------------------------------------------------------------
	[ Quantity ]
	*/

	jQuery('.quantity-buttons .down').on("click", function(){
		var val = jQuery(this).parent().parent().find('.input-text').val();
		if(val > 1) {
			val = parseInt(val) - 1;
			jQuery(this).parent().parent().find('.input-text').val(val);
			//jQuery('.update_cart').removeAttr('disabled')
		}
		return false;
	});

	jQuery('.quantity-buttons .up').on("click", function(){
		var val = jQuery(this).parent().parent().find('.input-text').val();
		val = parseInt(val) + 1;
		jQuery(this).parent().parent().find('.input-text').val(val);
		//jQuery('.update_cart').removeAttr('disabled')
		return false;
	});

});

