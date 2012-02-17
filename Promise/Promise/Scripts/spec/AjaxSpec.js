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

	xdescribe("Using deferred objects: single Ajax request", function () {
		it("Should get user.", function () {

			var getUserPromise = $.getJSON("/Home/GetUser", null);

			getUserPromise.done(function (user) {
				console.log("User name: " + user.UserName);
			});
		});
	});

	xdescribe("Then: Using deferred objects: two Ajax requests", function () {
		it("Should get user and role, change them name and save.", function () {

			// The promise is a read-only view into the result of the task
			var getUserPromise = $.getJSON("/Home/GetUser", null);
			var getRolePromise = $.getJSON("/Home/GetDefaultRole", null);

			jQuery.when(getUserPromise, getRolePromise).then(function (getUserArgs, getRoleArgs) {
				console.log("Both Ajax requests have completed!");
				console.log("User: " + getUserArgs[0].UserName);
				console.log("Role: " + getRoleArgs[0].RoleName);
			});
		});
	});

	xdescribe("Fail: Using deferred objects: two Ajax requests", function () {
		it("Should get user and role, change them name and save.", function () {
			// The promise is a read-only view into the result of the task
			var getUserPromise = $.getJSON("/Home/GetUser", null);
			var invalidUrlPromise = $.getJSON("InvalidUrl", null);

			jQuery.when(getUserPromise, invalidUrlPromise).fail(function () {
				console.log("One or more requests failed.");
			});
		});
	});

	xdescribe("Always: Using deferred objects: two Ajax requests", function () {
		it("Should get user and role, change them name and save.", function () {
			// The promise is a read-only view into the result of the task
			var getUserPromise = $.getJSON("/Home/GetUser", null);
			var getRolePromise = $.getJSON("/Home/GetDeaultRole", null);
			var invalidUrlPromise = $.getJSON("InvalidUrl", null);

			jQuery.when(getUserPromise, getRolePromise).always(function () {
				console.log("Always executed.");
			});

			jQuery.when(getUserPromise, invalidUrlPromise).always(function () {
				console.log("Always executed.");
			});
		});
	});

	describe("Using deferred objects: pipe Ajax requests", function () {
		it("Should get user.", function () {

			var getUserPromise = $.getJSON("/Home/GetUser", null);

			var pipedSaveUserPromise = getUserPromise.pipe(function (user) {
				console.log("User name: " + user.UserName);

				user.UserName = "Alex";
				return $.post("/Home/SaveUser", user);
			});

			pipedSaveUserPromise.done(function (savedUser) {
				console.log("User has been saved: " + savedUser.UserName);
			});
		});
	});
});