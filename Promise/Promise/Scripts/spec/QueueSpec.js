describe('QueueSpec.js', function () {
	var queue;

	beforeEach(function () {
		queue = new Queue();
	});

	describe('When appending a function to the queue', function () {
		it('should return a promise to subscribe on', function () {
			var onDoneCallback = jasmine.createSpy("done");

			queue.append(function () {
				this.resolve();
			}).done(onDoneCallback);

			expect(onDoneCallback).toHaveBeenCalled();
		});
		it('should return a promise with arguments', function () {
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