describe('DeferredSpec.js', function () {
	describe('When sending requests to the server', function () {
		it('should get user from the server, change user name and save it back', function () {
			$.get({
				url: "/Home/GetUser",
				success: function (user) {
					user.UserName = "Alex";
					$.post({
						url: "/Home/SaveUser",
						data: user,
						success: function () {
							console.log("User has been saved.");
						}
					});
				}
			});
		});
	});
});