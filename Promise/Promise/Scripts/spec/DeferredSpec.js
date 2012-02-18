describe("DeferredSpec.js", function () {
	xdescribe("Simple deferred", function () {
		it("Should create and resolve a simple async deferred.", function () {
			var deferred = jQuery.Deferred();

			setTimeout(function () {
				this.resolve();
			} .bind(deferred), 1000);

			deferred.done(function () {
				console.log("It is done!");
			});

			console.log("Start doing...");
		});
	});

	xdescribe("Simple deferred", function () {
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

	xdescribe("Simple deferred", function () {
		it("Promise: Should create and resolve a simple async deferred.", function () {
			var deferred = jQuery.Deferred();

			setTimeout(function () {
				this.resolve();
			} .bind(deferred), 1000);

			var promise = deferred.promise();

			promise.done(function () {
				console.log("It is done!");
			});

			console.log("Start doing...");
		});
	});

	xdescribe("Simple deferred", function () {
		it("Promise: Should create and resolve a simple async deferred.", function () {
			var deferred = jQuery.Deferred();

			setTimeout(function () {
				this.resolve();
			} .bind(deferred), 1000);

			var promise = deferred.promise();

			promise.done(function () {
				console.log("It is done!");
			});

			console.log("Start doing...");
		});
	});

	xdescribe("Promise array", function () {
		it("Sync promise array", function () {

			var promise1 = jQuery.Deferred(function () {
				setTimeout(function () {
					this.resolve();
				} .bind(this), 1000);
			}).promise();

			var promise2 = jQuery.Deferred(function () {
				setTimeout(function () {
					this.resolve();
				} .bind(this), 2000);
			}).promise();

			var array = [promise1, promise2];

			$.when.apply(null, array).then(function () {
				console.log("All promises in the array have been resolved.");
			});

			console.log("Start doing...");
		});
	});

	describe("Notifications", function () {
		it("Show progress", function () {

			var promise = jQuery.Deferred(function () {
				setTimeout(function () {
					this.notify(1);
				} .bind(this), 1000);

				setTimeout(function () {
					this.notify(2);
				} .bind(this), 2000);

				setTimeout(function () {
					this.notify(3);
					this.resolve("done!");
				} .bind(this), 3000);
			}).promise();

			promise.progress(function (stage) {
				console.log("Progress: " + stage);
			});

			promise.done(function(result) {
				console.log(result);
			});

			console.log("Start doing...");
		});
	});
});