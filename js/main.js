var w = $(window).width();
var h = $(window).height();
$('.slide').each(function() {
	var $this = $(this);
	$this.text($this.index()+1);
});
$('.chapter:first-child').addClass('current');
$('.chapter .slide:first-child').addClass('current');


$(document).on('keyup', function(e) {

	$('#slides').removeClass('zoomout');

	var $chapter = $('.chapter.current');
	var $slide = $chapter.find('.slide.current');

	if (e.keyCode == 37 && !$chapter.is(':first-child')) {
		$chapter = $chapter.removeClass('current').prev().addClass('current');
		$slide = $chapter.find('.slide').removeClass('current').siblings().first().addClass('current');
		$('#slides').css({'left': -$chapter.position().left, 'top': 0});
	}
	else if (e.keyCode == 39 && !$chapter.is(':last-child')) {
		$chapter = $chapter.removeClass('current').next().addClass('current');
		$slide = $chapter.find('.slide').removeClass('current').siblings().first().addClass('current');
		$('#slides').css({'left': -$chapter.position().left, 'top': 0});
	}
	else if (e.keyCode == 38 && !$slide.is(':first-child')) {
		$slide = $slide.removeClass('current').prev().addClass('current');
		$('#slides').css('top', -$slide.position().top);
	}
	else if (e.keyCode == 40 && !$slide.is(':last-child')) {
		$slide = $slide.removeClass('current').next().addClass('current');
		$('#slides').css('top', -$slide.position().top);
	}
});

$('#slides').on('click', function() {
	$(this).toggleClass('zoomout').css({'left':0, 'top':0});
});