$(document).ready(function(){


	if ($(window).width() > 1200) {
		$('li.member a').hover(function(){
			$('li.membertext a').animate({'margin-right':'0px'}, 150);
		}, function(){
			$('li.membertext a').animate({'margin-right':'-160px'}, 150);
		});
	}

	if ($('body').hasClass('home')) {
		$('.navbar-brand span').addClass('hidden');
	}

/*	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('h1').css({'color': 'red'})
	}
*/

	console.log($('a.home').position());

});
