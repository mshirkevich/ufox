	$(document).ready(function() {
        $(".ajax_form").on('submit',function(e){
            e.preventDefault();
            sendAjaxForm('/success.html', '.ajax_form', 'send.php');
            return false;
        });
		$('.slider-hexagon').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000,
			dots: true,
		});
		$(".menu a").on("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 777);
			e.preventDefault();
			return false;
		});
    });

    function sendAjaxForm(result, ajax_form, url) {
        jQuery.ajax({
                url:     url,
                type:     "POST",
                dataType: "json",
                data: jQuery(ajax_form).serialize(),
                beforeSend: function () {
                    $("#submit_button").prop("disabled", true);
                },
                complete: function () {
                    $("#submit_button").prop("disabled", false);
                },
                success: function(response) {
                    window.location.href = result;
                },
                error: function (jqXHR, textStatus,errorThrown) {
                    console.log(jqXHR);
                    console.log(textStatus);
                    console.log(errorThrown);
                }
        });
    }