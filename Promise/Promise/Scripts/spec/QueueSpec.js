describe('Queue spec', function () {
	it('Simple appending functions to the queue', function () {
		var queue = new Queue();
		var state = null;

		queue.append(function () {
			state = "appended";

			setTimeout(function () {
				state = "resolved";
				this.resolve(1); 		// return some value for the subscribers.
			} .bind(this), 500); 	// Here I would like to have a control over Deferred through 'this'.
		})
		.done(function (arg) {		// on done callback
			expect(state).toBe("resolved");
			expect(arg).toBe(1);
			state = "done";
		});

		expect(state).toBe("appended");
		waits(500);

		runs(function () {
			queue.append(function () {
				expect(state).toBe("done");
				state = "rejected";
				this.reject(); // operation was failed.
			})
			.fail(function () { // on fail callback
				expect(state).toBe("rejected");
				state = "failed";
			});

			expect(state).toBe("failed");
		});
	});
});	