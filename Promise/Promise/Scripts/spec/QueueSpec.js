describe('Queue spec', function () {
	it('Simple appending functions to the queue', function () {
		var queue = new Queue();

		queue.append(function () {
			setTimeout(function () {
				console.log("Queue spec: append resolving");
				this.resolve(1); 		// return some value for the subscribers.
			} .bind(this), 500); 	// Here I would like to have a control over Deferred through 'this'.
		})
		.done(function (arg) {		// on done callback
			console.log("Queue spec: on done");
			expect(arg).toBe(1);
		});

		queue.append(function () {
			console.log("Queue spec: append rejecting");
			this.reject(); 			// operation was failed.
		})
		.fail(function () {	// on fail callback
			console.log("Queue spec: on fail");
		});
	});
});	