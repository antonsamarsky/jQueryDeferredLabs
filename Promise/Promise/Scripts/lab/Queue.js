Queue = function() {
	this.promise = jQuery(this).promise();
};

// Arguments should be to passed inside the called function.
Queue.prototype.append = function () {
	var args = arguments;

	var fn = args[0];
	if (!fn || !jQuery.isFunction(fn)) {
		throw new TypeError('1st parameter should be a function');
	}

	var self = this;
	args = Array.prototype.slice.call(args, 1);
	return this.promise = this.promise.pipe(function () {
		return jQuery.Deferred(function () {
			try {
				return fn.apply(this, args);
			} catch (ex) {
				console.log(ex);
				this.reject(ex);
				return self.promise = jQuery(self).promise();
			}
		}).promise();
	});
};