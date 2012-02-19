$(function () {
	$.doit = function () {
		var deferred = $.Deferred();
		setTimeout(deferred.resolve, 500);
		return deferred.promise();
	};

	$.doit().done(function () {
		alert("Done!");
	});
});