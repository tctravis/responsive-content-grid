// on dom ready
(function($) {

	var layout = currentLayout();

	//============== 4. responsive view change handlers
	function currentLayout(){

		//if(typeof window.getComputedStyle === 'function'){
		if(Modernizr.mq('only all')) {
			return window.getComputedStyle(document.body,':before').getPropertyValue('content').replace(/["']/g, "");
		} else {
			return 'mobile';
		}

	}

	// viewportChange function handles interactivity changes between different breakpoints
	$(window).resize(
		$.throttle(500,viewportChange)
	);

	function viewportChange(){

		var currLayout = currentLayout();
		if(layout != currLayout){
			handleLayoutChange(currLayout,layout);
			//set layout var to new Layout
			layout = currLayout;
		}

	}

			
	function handleLayoutChange(currLayout,prevLayout){

		prevLayout = typeof prevLayout !== 'undefined' ? prevLayout : false;

		if(currLayout == "mobile"){
			enterMobile();
		} else if (currLayout == "tablet"){
			enterTablet();
		} else if (currLayout == "desktop"){
			enterDesktop();
		}

		if(prevLayout == "mobile"){
			leaveMobile();
		} else if (prevLayout == "tablet"){
			leaveTablet();
		} else if (prevLayout == "desktop"){
			leaveDesktop();
		}

	}

	function enterTablet(){

		if(modules.eventsList && modules.eventsList.isGridView()){
			modules.eventsList.equaliseHeights('tablet');
		}

	}

	function enterDesktop(){
		
		if(modules.eventsList && modules.eventsList.isGridView()){
			modules.eventsList.equaliseHeights('desktop');
		}

	}


	$('.events-list').each(function(){
		modules.eventsList = contentList.init($(this),layout,true);
	});

})(jQuery);




//============ 7. contentList: behaviours for all content lists on site (news, merchandise, events etc)
var contentList = (function(){

	var s = {
		numItemsRow: 2
	},
	me = {};

	//functions for swapping list view between grid and list
	function bindMultiListViews(){
		s.contentViews.find('.grid-view-button').on('click.contentList',function(e){
			e.preventDefault();
			s.contentViews.find('.current').removeClass('current');
			$(this).addClass('current');
			swapListView('list-view','grid-view');
		});
		s.contentViews.find('.list-view-button').on('click.contentList',function(e){
			e.preventDefault();
			s.contentViews.find('.current').removeClass('current');
			$(this).addClass('current');
			swapListView('grid-view','list-view');
			
		});
	}

	function swapListView(fromView,toView){
		if(!(s.contentListView == toView)){
			s.contentList.animate({
				opacity:0
			}, 200, function(){
				s.contentList.removeClass(fromView).addClass(toView)
				.animate({opacity:1}, 200);
			});
			s.contentListView = toView;
			if(s.contentListView == 'grid-view') {
				wrapItems();
			}
		}
	}

	//functions to wrap list elements in container divs to equalise row heights in grid view
	function wrapItems(){
		unWrapItems();
		switch(s.layout){
			case 'mobile':
				s.numItemsRow = 1;
				return;
			break;
			case 'tablet':
				s.numItemsRow = 2;
			break;
			case 'desktop':
				s.numItemsRow = 3;
			break;
		}
		s.contentList.find('section:nth-child(' + s.numItemsRow + 'n),section:last-of-type').each(function(){
		    $(this).prevAll('section').andSelf()
		        .wrapAll('<div class="content-list-row"></div>');
		});
	}
	
	function unWrapItems(){
		s.contentList.find('.content-list-row > section').unwrap();
	}

	//public methods
	me.init = function(contentListEl,layout,multiListViews){
		multiListViews = typeof multiListViews !== 'undefined' ? multiListViews : false;
		
		s.contentListWrapper = $(contentListEl);
		if(s.contentListWrapper.length > 0){
			s.contentList = s.contentListWrapper.find('.content-list');
			s.contentFilters = s.contentListWrapper.find('.content-filters');
			s.layout = layout;

			if(multiListViews){
				s.contentViews = s.contentFilters.find('.change-view');
				bindMultiListViews();
			}

			s.contentListView = s.contentList.hasClass('grid-view') ? 'grid-view' : 'list-view';
			if(me.isGridView()){
				wrapItems();
			} 

		}
		return me;
	}

	me.equaliseHeights = function(layout){
		s.layout = layout;
		wrapItems();
	}

	me.isGridView = function(){
		return s.contentListView == 'grid-view' ? true : false;
	}

	me.kill = function(){
	}

	return me;
}());