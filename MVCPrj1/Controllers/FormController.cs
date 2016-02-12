using System;
using System.Globalization;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using MVCPrj1.Models;
using MVCPrj1.Models.FlowModel;

namespace MVCPrj1.Controllers
{
    public class FormController : Controller
    {
       [HttpGet]
       public ActionResult leave()
        {
            ViewBag.Title = "請假單";
            return View();
        }

        [HttpPost]
        public ActionResult leave(leaveform model)
       {
            if (ModelState.IsValid)
            {

            }

            return View(model);
       }
    }
}
