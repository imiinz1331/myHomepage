//pagetop//

$(function() {
	$(window).scroll(function () {
		var ss = $(this).scrollTop();
		var mm = 260;
		if(ss > mm) {
			$("#pagetoplink").animate({"opacity": "1"}, 10);
		} else if(ss < mm) {
			$("#pagetoplink").animate({"opacity": "0"}, 10);
		}
	});
});


//scrollFade//

jQuery( function( $ ) {
		$( 'h3' ).scrollFade();
		$( '.main_content p' ).scrollFade();
		$( '.related_link p' ).scrollFade();
		$( '.scrollFade' ).scrollFade();
	} );


//ローディングここから//

$(function() {
	Array.prototype.remove = function(element) {
	  for (var i = 0; i < this.length; i++)
	    if (this[i] == element) this.splice(i,1); 
	};
	// プレロード関数
	function preload(images, progress) {
		var total = images.length;
	    $(images).each(function(){
			var src = this;
	        $('<img/>')
				.attr('src', src)
				.load(function() {
					images.remove(src);
					progress(total, total - images.length);
				});
	    });
	}
	
	var now_percent = 0;
	var displaying_percent= 0;


	preload([
		'images/image1.jpg',
		'images/image2.jpg'
	], function(total, loaded){
		now_percent = Math.ceil(100 * loaded / total);
	});



	var timer = window.setInterval(function() {
		if (displaying_percent >= 100) {
			window.clearInterval(timer);
				$('#bar').fadeOut('slow');
				
				setTimeout( function() {
				$("#load-text").animate({"marginTop":"-130px","opacity": "0"}, 600);
				}, 400 );
				setTimeout( function() {
					$('<img />')
					$('.sub_content').animate({"opacity": "1"}, 400);
						setTimeout( function() {
								$('#loader').fadeOut('slow');
								$('#loader').animate({"opacity": "0"}, 400);
							}, 400 );
					}, 1000 );
		} else {
			if (displaying_percent < now_percent) {
				displaying_percent++;
				$('#load-text').html(displaying_percent);
				$('#bar span').css('width', displaying_percent + '%');
			}
		}
	}, 
	1);

});
