using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace MVCPrj1.Controllers
{
    public class FrmController : Controller
    {
        // GET: Frm
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult StatusSub()
        {
            return View();
        }

        //[HttpGet]
        public ActionResult send(string id,string co_code)
        {
            ViewBag.co_code = co_code;
            ViewBag.form_id = id;
            ViewBag.Title = "申請簽呈";
            return View();
        }

        public JsonResult getFormTag(string co_code,string form_id)
        {
            SqlHelper so = new SqlHelper();
            string sql = string.Format(
                @"select ctl_id,ctl_type,ctl_remark,size,row,exprop,ValidMethod,ValidMsg from EFormTag where co_code={0} and form_id={1} and show=1 order by row,ctl_seq",
                co_code, form_id
                );
            DataTable tb = so.Sql2Table(sql);

            Models.EFormTag ent = new Models.EFormTag();
            Models.FlowDbContext ctx = new Models.FlowDbContext();
            List<Models.EFormTag> list= ctx.EFormTag
                .Where(f => f.co_code == co_code)
                .Where(f => f.form_id.ToString() == form_id)
                .Where(f=>f.show == true)
                .OrderBy(f=>f.row).ThenBy(f=>f.ctl_seq)
                .ToList<Models.EFormTag>();

            dynamic r;
            r = new
            {
                //define = so.GetTableRows(tb),
                define=list 
            };
            return Json(r, JsonRequestBehavior.AllowGet); 
        }
    }
}