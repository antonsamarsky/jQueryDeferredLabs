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
			return RedirectToAction("Index");
		}

	}
}
