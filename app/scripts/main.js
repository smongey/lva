
$(document).ready(function(){

	if ($('body').hasClass('home')) {
		$('.navbar-brand span').addClass('hidden');
	}

	memberButton();
	titlePosition();


	$(window).resize(function(){
		titlePosition();
		memberButton();
	});


});

titlePosition = function(){

	if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {

		$('#slides .title').css({
			'margin-top' : -140
		});	

	} else {

		var titleHeight = $('.title').height()/2;
		var slideHeight = $('.holder').height()/2;
		$('#slides .title').css({
			'margin-top' : -(slideHeight + titleHeight - 20)
		});		

	}

	console.log( -(slideHeight + titleHeight - 20) );
};


memberButton = function(){
	if ($(window).width() > 1200) {
		$('li.member a').hover(function(){
			$('li.membertext a').animate({'margin-right':'0px'}, 150);
		}, function(){
			$('li.membertext a').animate({'margin-right':'-160px'}, 150);
		});
	}
};