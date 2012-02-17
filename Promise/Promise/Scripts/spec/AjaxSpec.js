describe("AjaxSpec.js", function () {
	xdescribe("Using anonymous callbacks", function () {
		it("Should get user, change his name and save.", function () {

			$.getJSON("/Home/GetUser", null,
				function (user) {
					console.log("User name: " + user.UserName);
					user.UserName = "Alex";
					$.post("/Home/SaveUser", user, function (savedUser) {
						console.log("User has been saved: " + savedUser.UserName);
					});
				});

		});
	});

	xdescribe("Using callbacks", function () {
		it("Should get user, change his name and save.", function () {

			var onSaveUserCallback = function (savedUser) {
				console.log("User has been saved: " + savedUser.UserName);
			};

			var onGetUserCallback = function (user) {
				console.log("User name: " + user.UserName);
				user.UserName = "Alex";
				$.post("/Home/SaveUser", user, onSaveUserCallback);
			};

			$.getJSON("/Home/GetUser", null, onGetUserCallback);

		});
	});

	xdescribe("Using deferred objects", function () {
		it("Should get user, change his name and save.", function () {

			var getUserPromise = $.getJSON("/Home/GetUser", null);

			var getUserDone = getUserPromise.done(function (user) {
				console.log("User name: " + user.UserName);
				user.UserName = "Alex";
				return $.post("/Home/SaveUser", user);
			});

			getUserDone.done(function (savedUser) {
				console.log("User has been saved: " + savedUser.UserName);
			});
		});
	});


	xdescribe("Using deferred objects", function () {
		it("Should get user and role, change them name and save.", function () {

			// The promise is a read-only view into the result of the task
			var getUserPromise = $.getJSON("/Home/GetUser", null);
			var getRolePromise = $.getJSON("/Home/GetDefaultRole", null);

			jQuery.when(getUserPromise, getRolePromise).then(function (getUserArgs, getRoleArgs) {
				console.log('I fire once BOTH ajax requests have completed!');
				console.log("User: " + getUserArgs[0].UserName);
				console.log("Role: " + getRoleArgs[0].RoleName);
			}).fail(function () {
				console.log('I fire if one or more requests failed.');
			});
		});
	});
});