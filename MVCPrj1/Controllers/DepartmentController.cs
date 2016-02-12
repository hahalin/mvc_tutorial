using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
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
            SqlHelper hp = new SqlHelper();
            DataTable tb = hp.Sql2Table("select id,cname from dep where id=" + departmentid);
            department depobj = new department();
            
            if (tb.Rows.Count==1)
            {
                depobj.id = tb.Rows[0]["id"].ToString();
                depobj.departmentName = tb.Rows[0]["cname"].ToString();
            }
            else
            {
                ModelState.AddModelError("","無此編號的部門存在");
            }
            return View(depobj);
        }

        //修改呼叫Form
        [HttpGet]
        public ActionResult Edit(string id)
        {
            FlowDbContext dc = new FlowDbContext();

            var depobj=dc.departments.Where(a => a.id.Equals(id)).FirstOrDefault();
            if (depobj !=null)
            {
                return View(depobj);
            }
            else
            {
                ModelState.AddModelError("", "無此部門資料");
                ViewBag.error = "無此部門資料";
                return View("Error");
            }


            //SqlHelper hp = new SqlHelper();
            //DataTable tb = hp.Sql2Table("select id,cname from dep where id=" + id);

            //department dep = new department();
            //dep.id = tb.Rows[0]["id"].ToString();
            //dep.departmentName = tb.Rows[0]["cname"].ToString();
            //return View(dep);
        }

        //修改form submit後處理
        [HttpPost]
        public ActionResult Edit(department model)
        {
            SqlHelper hp = new SqlHelper();
            hp.execsql("update dep set cname='" + model.departmentName + "' where id=" + model.id);
            //return View(model);

            return RedirectToAction("Department", "Admin", null);

        }

        //執行刪除
        [HttpGet]
        public ActionResult Delete(string id)
        {
            SqlHelper hp = new SqlHelper();
            hp.execsql("delete from dep where id=" + id);
            return RedirectToAction("Department", "Admin", null);
        }


        //新增呼叫form
        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }

        //新增form submit後處理
        [HttpPost]
        [ActionName("Create")]
        public ActionResult Create(department model)
        {

            SqlHelper hp = new SqlHelper();

            int icount = 0;

            icount=Convert.ToInt32(hp.sql2result("select count(id) from dep where id=" + model.id));
            if (icount>0)
            {
                ModelState.AddModelError("", "部門編號"+model.id+"已經存在");
            }

            icount = Convert.ToInt32(hp.sql2result("select count(cname) from dep where cname='" + model.departmentName+"'"));
            if (icount > 0)
            {
                ModelState.AddModelError("", "部門名稱" + model.departmentName + "已經存在");
            }

            /*
            if (model.departmentName=="業務部")
            {

                ModelState.AddModelError("", "該部門名稱已經存在");
            }
            */
                
            if (ModelState.IsValid)
            { 
                //寫入資料庫的程式碼
                
                hp.sql2result(
                    string.Format("insert into dep (id,cname) values ({0},'{1}')",
                      model.id,model.departmentName
                    )
                );

                //
                return RedirectToAction("Department", "admin");
            }
            else
            {
                return View(model);
            }
        }
        
    }
}