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
    [Authorize]
    public class AdminController : Controller
    {
        // GET: Admin

        [AllowAnonymous]
        public ActionResult Index()
        {
            return View();
        }

        
        
        //[Authorize(Roles = "superadmin,admin")]  // authenication 
        public ActionResult Department()
        {

            CDbContext dc = new CDbContext();
            var dlist = dc.departments.ToList<department>();
            return View(dlist);


            //改為從資料庫讀取部門資料，一筆一筆建立Department物件存入departmentlist
            //List<department> departmentlist = new List<department>();

            //SqlHelper hp = new SqlHelper();

            //DataTable tb = hp.Sql2Table("select id,cname from dep");

            //department depobj;
            //foreach(DataRow r in tb.Rows)
            //{
            //    depobj = new department();
            //    depobj.id = r["id"].ToString();
            //    depobj.departmentName = r["cname"].ToString();
            //    departmentlist.Add(depobj);
            //}

            //return View(departmentlist);
        }

    }
}