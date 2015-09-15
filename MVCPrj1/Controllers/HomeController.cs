using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVCPrj1.Models;


namespace MVCPrj1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {

            ViewBag.Title = "關於這個網站";

            ViewBag.Message = "Your application description page 123.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            List<department> departmentlist = new List<department>();

            department depobj = new department();
            depobj.id = "a001"; depobj.departmentName = "業務部";
            departmentlist.Add(depobj);

            depobj = new department();
            depobj.id = "a002"; depobj.departmentName = "創意部";
            departmentlist.Add(depobj);

            depobj = new department();
            depobj.id = "a003"; depobj.departmentName = "行銷部";
            departmentlist.Add(depobj);

            //ViewBag.contactlist = departmentlist;

            return View(departmentlist);
        }
    }
}