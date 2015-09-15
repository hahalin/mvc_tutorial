using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using MVCPrj1.Models;

namespace MVCPrj1.Controllers
{
    public class CAccountController : Controller
    {
        // GET: CAccount
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(CLoginViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            
            

            //var userstore=new users
            return View();
        }

        [HttpGet]
        public ActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Register(CRegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                
            }

            return View();
        }

        public ActionResult SignOut()
        {
            return View();
        }
    }
}