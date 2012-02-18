$("button").bind("click", function () {
	$("p").append("Started...");

	$("div").each(function (i) {
		$(this).fadeIn().fadeOut(1000 * (i + 1));
	});

	$("div").promise().done(function () {
		$("p").append(" Finished! ");
	});
});