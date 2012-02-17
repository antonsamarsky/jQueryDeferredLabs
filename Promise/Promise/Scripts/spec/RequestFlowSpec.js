describe('RequestFlowSpec.js', function () {
	describe('When sending requests to the server', function () {
		it('should be executed as FIFO', function () {
			var flow = new RequestFlow();

			flow.post("/Home/Save", { data: "data 1" }).done(function () {
				console.log("RequestFlow spec: done 1");
			});
			flow.post("/Home/Save", { data: "data 2" }).done(function () {
				console.log("RequestFlow spec: done 2");
			});
		});
	});
});