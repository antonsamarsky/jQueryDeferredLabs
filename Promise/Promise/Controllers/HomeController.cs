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

		public ActionResult Get()
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
		public ActionResult Save(JsonResult data)
		{
			return RedirectToAction("Index");
		}

	}
}
