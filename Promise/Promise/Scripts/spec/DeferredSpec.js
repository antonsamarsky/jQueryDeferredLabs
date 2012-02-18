describe("DeferredSpec.js", function () {
	xdescribe("Simple deferred", function () {
		it("Should create and resolve a simple async deferred.", function () {
			var deferred = jQuery.Deferred();

			setTimeout(function () {
				this.resolve();
			} .bind(deferred), 10000);

			deferred.done(function () {
				console.log("It is done!");
			});

			console.log("Start doing...");
		});
	});

	describe("Simple deferred", function () {
		it("Should create a deferred a reject it.", function () {

			jQuery.Deferred(function () {
				setTimeout(function () {
					this.rejectWith(this, ["arg1", 2]);
				} .bind(this), 1000);
			})
			.fail(function () {
				console.log(this.state());
				console.log("Failed with: " + arguments[0] + "; " + arguments[1]);
			});

			console.log("Start doing...");
		});
	});
});