//スライドショー//

window.onload = function() {

    // スマホ スライド

    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {

        $(function(){
        $.sublime_slideshow({
                src:[
                    {url:"images/image1.jpg"},
                    {url:"images/image27.jpg"},
                    {url:"images/image10.jpg"},
                    {url:"images/image18.jpg"}
                    ],
            duration:   9,
            fade:   1.5,
            scaling:1.12,
            rotating:   false,
        });
        });

    } else { // PC スライド
        $(function(){
        $.sublime_slideshow({
            src:[
                {url:"images/image1.jpg"},
                {url:"images/image27.jpg"},
                {url:"images/image10.jpg"},
                {url:"images/image18.jpg"}
                ],
            duration:   9,
            fade:   1.5,
            scaling:1.08,
            rotating:   false,
        });
        });
    }	
}


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

    // スマホ ローディング開始読み込み画像
    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
        preload([
            'images/image1.jpg',
            'images/image2.jpg'
        ], function(total, loaded){
            now_percent = Math.ceil(100 * loaded / total);
        });

    // PC ローディング開始読み込み画像
    } else {
        preload([
            'images/image1.jpg',
            'images/image2.jpg'
        ], function(total, loaded){
            now_percent = Math.ceil(100 * loaded / total);
        });

    }

	var timer = window.setInterval(function() {
		if (displaying_percent >= 100) {
			window.clearInterval(timer);
				$('#bar').fadeOut('slow');
				
				setTimeout( function() {
				$("#load-text").animate({"marginTop":"-130px","opacity": "0"}, 600);
				}, 400 );
				setTimeout( function() {
					$('<img />')
					$('.home .logo').animate({"opacity": "0.95"}, 1000);
					$('.home .logo_mark img').animate({"opacity": "0.95"}, 1000);
					$('.home_content').animate({"opacity": "0.95"}, 1000);
						setTimeout( function() {
								$('#loader').fadeOut('slow');
								$('#loader').animate({"opacity": "0"}, 2000);
							}, 600 );
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

