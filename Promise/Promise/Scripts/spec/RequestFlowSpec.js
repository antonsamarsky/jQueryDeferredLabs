describe('`', function () {
	it('Simple sending requests test', function () {
		var url = "/Home/Save";
		var flow = new RequestFlow();

		flow.post(url, {data: "data 1"}).done(function () {
			console.log("RequestFlow spec: done 1");
		});
		flow.post(url, {data: "data 2"}).done(function () {
			console.log("RequestFlow spec: done 2");
		});
	});
});	