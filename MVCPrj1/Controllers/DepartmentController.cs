using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVCPrj1.Models;

namespace MVCPrj1.Controllers
{
    public class DepartmentController : Controller
    {
        // GET: Department
        public ActionResult Index(string departmentid)
        {
            //ViewBag.departmentid = departmentid;
            department depobj = new department();
            depobj.id = departmentid;
            depobj.departmentName = depobj.id + " name";
            return View(depobj);
        }
    }
}