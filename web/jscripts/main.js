$(function() {
	/*$(window).scroll(
		function(e) {
			if ($(this).scrollTop() >= 139) $('#search').addClass('css_fixed');
			else $('#search').removeClass('css_fixed');
		}
	);*/
	$('.css_menu')
		.find('.css_active')
			.click(function(e) {
				e.preventDefault();
			});
	$('#filter')
/*		.hover(
			function() {
				$(this).addClass('css_fixed_show');
			},
			function() {
				$(this).removeClass('css_fixed_show');
			})*/
		.find('input[name="filter"]')
			.focus(
				function() {
					$(this).prev().hide();
					//if ($(this).val() == '')
				}
			)
			.blur(
				function() {
					if ($(this).val() == '') $(this).prev().show();
				}
			);
	$('.css_categories')
		.find('.css_category a')
			.click(function(e) {
				e.preventDefault();
				$(this)
					.next().toggle();
				$(this).parent()
					.toggleClass('css_opened')
					.toggleClass('css_closed')

			});
});