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
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;


namespace MVCPrj1.Controllers
{
    //[RoutePrefix("api/Account")]
    public class AuthController : Controller
    {
        //[Route("Login")]
        [System.Web.Mvc.AllowAnonymous]
        public  ActionResult login(string username,string pwd)
        {
            
            dynamic data = new System.Dynamic.ExpandoObject();
            data.agent = Request.UserAgent;
            data.isajaxrequest = Request.IsAjaxRequest();

            if (username=="frank" && pwd=="123")
            {
                data.success = true;
                data.msg = "ok der";
                //return  Json(data, JsonRequestBehavior.AllowGet);
            }
            else
            {
                data.success = false;
                data.msg = "not ok der";
                //return  Json(data, JsonRequestBehavior.AllowGet);
            }
            
            var json = JsonConvert.SerializeObject(data);
            //http://stackoverflow.com/questions/5156664/how-to-flatten-an-expandoobject-returned-via-jsonresult-in-asp-net-mvc
            return Content(json, "application/json");



        }
    }
}
