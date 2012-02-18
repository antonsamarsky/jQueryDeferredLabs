describe("DeferredSpec.js", function () {
	xdescribe("Simple deferred", function () {
		it("Should create a simple async deferred.", function () {
			var deferred = jQuery.Deferred();

			setTimeout(function () {
				this.resolve();
			} .bind(deferred), 500);

			deferred.done(function() {
				console.log("It is done!");
			});

			console.log("Start doing...");
		});
	});
});