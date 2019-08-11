jQuery(document).ready(function($) {
	jQuery('.load-button a').each(function() {
		var pageNum = parseInt(jQuery(this).attr('data-start-page')) + 1,
			max = parseInt(jQuery(this).attr('data-max')),
			nextLink = jQuery(this).attr('data-next-link'),
			load_wrap = jQuery(jQuery(this).attr('data-wrap'));

		if(pageNum > max) {
			jQuery(this).parent().remove();
		}

		if(pageNum <= max) {
			load_wrap.append('<div class="load-items-area load-items-'+ pageNum +'"></div>');
			if(load_wrap.hasClass('filter-items')) {
				load_wrap.find('.load-items-'+ pageNum).load(nextLink + ' ' + jQuery(this).attr('data-wrap') + ' article',
					function() {
						pageNum++;
						nextLink = nextLink.replace(/\/page\/[0-9]?/, '/page/'+ pageNum);
					}
				);
			}
		}

		jQuery(this).on('click', function() {
			
			//if(pageNum <= max) {
				load_wrap.append('<div class="load-items-area load-items-'+ pageNum +'"></div>');
				if(load_wrap.hasClass('filter-items')) {

					var $items = load_wrap.find('.load-items-'+ parseInt(pageNum-1)).find('article');
					load_wrap.find('.load-items-'+ parseInt(pageNum-1)).remove();
					load_wrap.append( $items ).isotope( 'appended', $items );
					var filter_p = load_wrap.prev().find('.active').attr('data-filter');

					load_wrap.find('.load-items-'+ pageNum).load(nextLink + ' ' + jQuery(this).attr('data-wrap') + ' article',
						function() {
							pageNum++;
							nextLink = nextLink.replace(/\/page\/[0-9]?/, '/page/'+ pageNum);
							
						}
					);

				} else {
					load_wrap.find('.load-items-'+ pageNum).load(nextLink + ' ' + jQuery(this).attr('data-wrap') + ' article',
						function() {

							var $items = load_wrap.find('.load-items-'+ pageNum).find('article');
							load_wrap.find('.load-items-'+ pageNum).remove();
							load_wrap.append( $items );

							pageNum++;
							nextLink = nextLink.replace(/\/page\/[0-9]?/, '/page/'+ pageNum);
						}
					);
				}
			//}

			if(pageNum-1 >= max) {
				jQuery(this).parent().fadeOut();
			}
			
			return false;
		});
	});
});