describe('QueueSpec.js', function () {
	describe('When appending a function to the queue', function () {
		it('should return a promise to subscribe on', function () {
			var queue = new Queue();
			var state = null;
			queue.append(function () {
				state = "resolved";
				this.resolve();
			})
			.done(function () {
				expect(state).toBe("resolved");
				state = "done";
			});
			expect(state).toBe("done");
		});
		it('should return a promise with arguments', function () {
			var queue = new Queue();
			queue.append(function () {
				this.resolve(1);
			})
			.done(function (value) {
				expect(value).toBe(1);
			});
		});
	});
	describe('When appending several functions to the queue', function () {
		it('should be executed as FIFO', function () {
			var queue = new Queue();
			var i = 0;

			queue.append(function () {
				setTimeout(function () {
					i++;
					this.resolve();
				} .bind(this), 500);
			});

			queue.append(function () {
				expect(i).toBe(1);
				setTimeout(function () {
					i++;
					this.resolve();
				} .bind(this), 500);
			});

			queue.append(function () {
				expect(i).toBe(1);
				i++;
			});
		});
	});
});