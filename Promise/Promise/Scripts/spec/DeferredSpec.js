describe('DeferredSpec.js', function () {
	describe('When sending requests to the server', function () {
		it('should get user from the server, change user name and save it back', function () {
			$.getJSON("/Home/GetUser", null,
				function (user) {
					user.UserName = "Alex";
					$.post("/Home/SaveUser", user, function(response) {
						console.log("User has been saved: " + user.UserName);
					}, 'json');
				});
		});
	});
});