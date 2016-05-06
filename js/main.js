jQuery(document).ready(function($){


	$('.skill').knob();
	
	
	$('.service_carousel_slider').owlCarousel({
		items: 6,
		margin:30,
		loop:true
	});
	
	$('.carousel_trigger .fa-chevron-left').click(function(){
		$('.service_carousel_slider').trigger('prev.owl.carousel',[1000]);
	});
	$('.carousel_trigger .fa-chevron-right').click(function(){
		$('.service_carousel_slider').trigger('next.owl.carousel',[10            00]);
	});
})