
$(document).ready(function(){

	if ($('body').hasClass('home')) {
		$('.navbar-brand span').addClass('hidden');
	}

	memberButton();

	$(window).resize(function(){
		memberButton();
	});


});

memberButton = function(){

	if ($(window).width() > 1200) {

		$('li.member a').hover(function(){
			$('li.membertext a').addClass('active');
		}, function(){
			$('li.membertext a').removeClass('active');
		});

	} else {

		$('li.member a').hover(function(){
			$('li.membertext a').removeClass('active');
		}, function(){
			$('li.membertext a').removeClass('active');
		});

	}
};