using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVCPrj1.Areas.BaseData.Models;

namespace MVCPrj1.Areas.BaseData.Controllers
{
    public class CompanyController : Controller
    {
        // GET: BaseData/Company
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult List()
        {
            List<Company> output = new List<Company>();
            output.Add(new Company { id = "1", nm = "公司1" });
            output.Add(new Company { id = "2", nm = "公司2" });

            return Json(output, JsonRequestBehavior.AllowGet);
        }
    }
}