using System.Web.Mvc;

namespace Promise.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			return View();
		}
		//
		// GET: /Home/Create

		public ActionResult GetData()
		{
			return null;
		}

		//
		// POST: /Home/Create

		[HttpPost]
		public ActionResult SetData(FormCollection collection)
		{
			try
			{
				// TODO: Add insert logic here

				return RedirectToAction("Index");
			}
			catch
			{
				return null;
			}
		}

	}
}
