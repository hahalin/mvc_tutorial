using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Web;
using System.Web.Mvc;
using MVCPrj1.Models;
using Microsoft.AspNet.Identity;


namespace MVCPrj1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();

        }

        public ActionResult TestAdmin()
        {
            ApplicationDbContext ctx = new ApplicationDbContext();
            
            string currentUserId = User.Identity.GetUserId();
            ApplicationUser currentUser = ctx.Users.FirstOrDefault(x => x.Id == currentUserId);
            ViewBag.UserID = currentUserId;
            ViewBag.CompanyID = currentUser.company_id;

            return View();
        }

        public ActionResult About()
        {

            ViewBag.Title = "關於這個網站";

            ViewData["Content"] = "這個網站是一個教學課程中逐步建立的網站，同時配置在希望能對您有幫助";

            ViewBag.Message = "Your application description page 123.";




            return View();
        }
        [ActionName("Contact")]
        public ActionResult Contact()
        {
            ViewBag.Message = "與我們聯絡";

            

            /*
            List<string> DepartmentList = new List<string>();
            DepartmentList.Add("業務部");
            DepartmentList.Add("創意部");
            DepartmentList.Add("行銷部");

            ViewBag.DepartmentList = DepartmentList;

            return View();
            
            */

            List<department> departmentlist = new List<department>();

            SqlHelper hp = new SqlHelper();

            DataTable tb = hp.Sql2Table("select id,cname from dep");

            department depobj;
            foreach(DataRow r in tb.Rows)
            {
                depobj = new department();
                depobj.id = r["id"].ToString();
                depobj.departmentName = r["cname"].ToString();
                departmentlist.Add(depobj);
            }

            //return View(departmentlist);

            departmentlist.Clear();
            depobj = new department();
            depobj.id = "a001"; depobj.departmentName = "業務部";
            departmentlist.Add(depobj);

            depobj = new department();
            depobj.id = "a002"; depobj.departmentName = "創意部";
            departmentlist.Add(depobj);

            depobj = new department();
            depobj.id = "a003"; depobj.departmentName = "行銷部";
            departmentlist.Add(depobj);

            return View(departmentlist);

            
            
        }
    }
}