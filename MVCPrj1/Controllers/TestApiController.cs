using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVCPrj1.Attributes;


namespace MVCPrj1.Controllers
{
    [RESTAuthorize]
    public class TestApiController : Controller
    {
        private string[] _people = new string[] { "John Doe", "Amy Rose", "Harry Sam" };

        // GET: TestToken
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Find(string q)
        {
            var data = _people.Where(p => p.ToLower().Contains(q));

            return Json(data, JsonRequestBehavior.AllowGet);
        }
    }
}