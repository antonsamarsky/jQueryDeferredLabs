RequestFlow = function () {
	this.requestCounter = 0;
	this.requestTimeout = 3000; //3 sec
	this.maxTimeoutedRequestNumber = 3;

	this.requestPromise = jQuery(this).promise();
};

RequestFlow.prototype.get = function () {
	var args = arguments;
	return this.sendRequest(function () {
		return $.get.apply(null, args);
	});
};

RequestFlow.prototype.post = function () {
	var args = arguments;
	return this.sendRequest(function () {
		return $.post.apply(null, args);
	});
};

RequestFlow.prototype.ajax = function () {
	var args = arguments;
	return this.sendRequest(function() {
		return $.ajax.apply(null, args);
	});
};

RequestFlow.prototype.sendRequest = function (requestFunc) {
	var request = function () {
		var isLongRequest = false;

		var requestPromise = requestFunc().always(function () {
			if (isLongRequest) {
				this.requestCounter--;
			}
		} .bind(this));

		setTimeout(function () {
			if (requestPromise.state() == "pending") {
				this.requestCounter++;
				isLongRequest = true;
			}
		} .bind(this), this.timeout);

		return requestPromise;
	} .bind(this);


	if (this.requestCounter >= this.maxLongRequests) {
		console.log("RequestFlow: Number of requests reached maximum.");
		return this.requestPromise = this.requestPromise.pipe(request);
	} else {
		return this.requestPromise = request();
	}
};
