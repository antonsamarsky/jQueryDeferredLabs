describe("RequestFlowSpec.js", function () {
	var flow;

	beforeEach(function () {
		flow = new RequestFlow();
	});

	xdescribe("When sending requests to the server", function () {
		it("should be executed as FIFO", function () {

			flow.post("/Home/SaveUser", { data: "data 1" }).done(function () {
				console.log("RequestFlow spec: done 1");
			});
			flow.post("/Home/SaveUser", { data: "data 2" }).done(function () {
				console.log("RequestFlow spec: done 2");
			});
		});
	});
});