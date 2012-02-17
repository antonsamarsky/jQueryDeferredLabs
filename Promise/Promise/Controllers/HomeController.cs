using System.Web.Mvc;
using Promise.Models;

namespace Promise.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			return View();
		}

		[HttpGet]
		public ActionResult GetUser()
		{
			var user = new User
			{
				UserName = "Anton",
				Email = "samarskyy@hotmail.com"
			};

			return Json(user, JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public ActionResult SaveUser(User user)
		{
			return Json(user, JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
		public ActionResult GetDefaultRole()
		{
			var role = new Role
			{
				RoleName = "Visitor",
			};

			return Json(role, JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
		public ActionResult GetUserRole(string userName)
		{
			var role = new Role
			{
				UserName = userName,
				RoleName = "Admin",
			};

			return Json(role, JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public ActionResult SaveRole(Role role)
		{
			return Json(role, JsonRequestBehavior.AllowGet);
		}
	}
}
