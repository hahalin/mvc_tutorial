using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Dynamic;

namespace MVCPrj1.Controllers
{
    //[RoutePrefix("api/Account")]
    public class AuthController : Controller
    {
        //[Route("Login")]
        [System.Web.Mvc.AllowAnonymous]
        public JsonResult login(string username,string pwd)
        {
            
            dynamic data = new System.Dynamic.ExpandoObject();

            if (username=="frank")
            {
                data.msg = "ok der";
                return  Json(data, JsonRequestBehavior.AllowGet);
            }
            else
            {
                data.msg = "not ok der";
                return  Json(data, JsonRequestBehavior.AllowGet);
            }

        }
    }
}
