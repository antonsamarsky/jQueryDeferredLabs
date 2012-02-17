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

		public ActionResult GetUser()
		{
			return new JsonResult
				{
					Data = new User
						{
							UserName = "Anton",
							Email = "samarskyy@hotmail.com"
						}
				};
		}

		[HttpPost]
		public ActionResult SaveUser(User user)
		{
			return RedirectToAction("Index");
		}

	}
}
