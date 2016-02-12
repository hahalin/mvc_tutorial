using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVCPrj1.Models;

namespace MVCPrj1.Controllers
{
    //[Authorize(Roles = "superadmin,admin")] 
    //[Authorize]
    public class AdminController : Controller
    {
        // GET: Admin

        [AllowAnonymous]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult FUser()
        {
            return View();
        }

        public ActionResult FDep()
        {
            return View();
        }

        public ActionResult FDepTree()
        {
            return View();
        }

        public ActionResult FRole()
        {
            return View();
        }
        
        
        //[Authorize(Roles = "superadmin,admin")]  // authenication 
        public ActionResult Department()
        {

            FlowDbContext dc = new FlowDbContext();
            var dlist = dc.departments.ToList<department>();
            return View(dlist);


        }

    }
}