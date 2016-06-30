using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web.Mvc;
using MVCPrj1.Models;
using MVCPrj1.Models.FlowModel;
using MVCPrj1.Models.viewModel;
using Newtonsoft.Json;

namespace MVCPrj1.Controllers
{
    public class FAdminController : Controller
    {
        public List<Dictionary<string, object>> GetTableRows(DataTable dtData)
        {
            List<Dictionary<string, object>>
            lstRows = new List<Dictionary<string, object>>();
            Dictionary<string, object> dictRow = null;

            foreach (DataRow dr in dtData.Rows)
            {
                dictRow = new Dictionary<string, object>();
                foreach (DataColumn col in dtData.Columns)
                {
                    dictRow.Add(col.ColumnName, dr[col]);
                }
                lstRows.Add(dictRow);
            }
            return lstRows;
        }

        private static DataTable ConvertToDatatable<T>(List<T> data)
        {
            PropertyDescriptorCollection props =
                TypeDescriptor.GetProperties(typeof(T));
            DataTable table = new DataTable();
            for (int i = 0; i < props.Count; i++)
            {
                PropertyDescriptor prop = props[i];
                if (prop.PropertyType.IsGenericType && prop.PropertyType.GetGenericTypeDefinition() == typeof(Nullable<>))
                    table.Columns.Add(prop.Name, prop.PropertyType.GetGenericArguments()[0]);
                else
                    table.Columns.Add(prop.Name, prop.PropertyType);
            }
            object[] values = new object[props.Count];
            foreach (T item in data)
            {
                for (int i = 0; i < values.Length; i++)
                {
                    values[i] = props[i].GetValue(item);
                }
                table.Rows.Add(values);
            }
            return table;
        }
        public JsonResult test()
        {
            var o = new
            {
                a = 1,
                b = 2
            };
            
            return Json(o, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult getFlowGrid(string co_code, string form_id, string seq_no)
        {
            SqlHelper so = new SqlHelper();

            string sql = string.Format(
                @"select a.*,b.usr_name,b.usr_title,c.dep_name,
                  case a.check_status when 0 then '不同意' when 1 then '同意' end as check_statusv,
                  case a.item_status 
                    when 0 then '正常' when 1 then '抽單' when 2 then '手動壓件' 
                    when 3 then '自動壓件' when 4 then '加簽' when 5 then '退回'
                    when 6 then '職務代理'
                  end as item_statusv
                  from EFormStatusSub a
                  left join EUser b on a.check_id=b.usr_id
                  left join EDep C on b.dep_id=c.dep_id
                  where a.co_code={0} 
                  and a.form_id={1} and a.seq_no={2} 
                  order by item_no,item_row,item_col
                ",
                co_code, form_id, seq_no);
                
            DataTable tb = so.Sql2Table(sql);

            var q = GetTableRows(tb);

            var o = new
            {
                draw = Request.Form["draw"].ToString(),
                recordsTotal = tb.Rows.Count,
                recordsFiltered = tb.Rows.Count,
                data = q
            };
            return Json(o, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult getFlowReaderList(string co_code, string form_id, string seq_no)
        {
            SqlHelper so = new SqlHelper();

            string sql = string.Format(
                @"select a.*,b.usr_name from EFormStatusSub a
                  left join EUser b on a.check_id=b.usr_id
                  where a.co_code={0} 
                  and a.form_id={1} and a.seq_no={2} 
                  order by item_no,item_row,item_col
                ",
                co_code, form_id, seq_no)
                ;
            DataTable tb = so.Sql2Table(sql);

            var q = GetTableRows(tb);
            
            //var _rows = from item in tb.AsEnumerable() where item.Field<int>("item_row") > 0 select item;
            //var _items = tb.AsEnumerable().Max(row => row["item_no"]);
            //var _group = from item in tb.AsEnumerable()
            //             group item by item.Field<int>("item_no") into g
            //             select new { item_no = g.Key, cnt = g.Count() };
            
            
            var o = new
            {
                //rows=_rows.Count()+1,
                //group=_group,
                //items=_items,
                //data = q
            };
            return Json(o, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult getAttachfiles(string co_code, string form_id, string seq_no)
        {
            SqlHelper so = new SqlHelper();

            string sql = string.Format(
                @"select a.* from EFormAttachFile a
                  where a.co_code={0} 
                  and a.form_id={1} and a.seq_no={2} 
                  order by a.item_no
                ",
                co_code, form_id, seq_no)
                ;
            DataTable tb = so.Sql2Table(sql);

            var q = GetTableRows(tb);
            
            var o = new
            {
                //draw = Request.Form["draw"].ToString(),
                //recordsTotal = tb.Rows.Count,
                //recordsFiltered = tb.Rows.Count,
                data = q
            };
            return Json(o, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public JsonResult getSignHistory(string co_code, string form_id, string seq_no)
        {
            SqlHelper so = new SqlHelper();

            string sql = string.Format(
                @"select b.usr_name+'('+a.check_id+')' as check_id
                  ,case a.check_status when 0 then '不同意' when 1 then '同意' end as check_statusc                  
                  ,a.check_time,isnull(a.check_remark,'') check_remark from EFormStatusSub a
                  left join EUser b on a.co_code=b.co_code and a.check_id=b.usr_id
                  where a.co_code={0} 
                  and a.form_id={1} and a.seq_no={2} 
                  and a.check_time is not null order by a.item_no,a.item_row
                ",
                co_code, form_id,seq_no)
                ;
            DataTable tb = so.Sql2Table(sql);

            int pagesize = Convert.ToInt16(Request.Form["length"].ToString());

            var q = GetTableRows(tb)
                .Skip(Convert.ToInt16(Request.Form["start"].ToString()))
                .Take(pagesize)
             ;
            if (pagesize==-1)
            {
                q = GetTableRows(tb);
            }
            string jsonString = JsonConvert.SerializeObject(tb);
            var o = new
            {
                draw = Request.Form["draw"].ToString(),
                recordsTotal = tb.Rows.Count,
                recordsFiltered = tb.Rows.Count, 
                data = q
            };
            return Json(o, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult getFormBasic(string co_code, string form_id,string seq_no)
        {
            SqlHelper so = new SqlHelper();
            string sql = string.Format(
                @"select ctl_id,ctl_type,ctl_remark,size,row,exprop from EFormTag where co_code={0} and form_id={1} and show=1 order by row,ctl_seq",
                co_code,form_id
                );
            DataTable tb = so.Sql2Table(sql);

            sql=string.Format("select * from EFormData where co_code={0} and form_id={1} and seq_no={2}",
                co_code,form_id,seq_no
                );
            DataTable tbdata = so.Sql2Table(sql);
            dynamic r;
            r = new {
                define=GetTableRows(tb),
                data = GetTableRows(tbdata)
            };
            return  Json(r,JsonRequestBehavior.AllowGet); 
        }

        [HttpPost]
        public JsonResult getBillList(string co, string uid)
        {
            SqlHelper so = new SqlHelper();

            string sql = string.Format(
                @"select fm.co_code,fm.form_id,fm.seq_no,fm.apply_title,fm.apply_time,fm.usr_id,
                receive_time,item_no,item_row,item_col,
                fb.form_name,u.usr_name,u.usr_email,u.usr_title,d.dep_name,
                fb.form_width,fb.form_height,fs.default_id,item_status,item_remark,send_interval 
                from EFormStatusMain fm,EFormStatusSub fs,EUser u,EFormBasic fb,EDep d
                where fm.co_code=u.co_code 
                and fm.co_code=fs.co_code 
                and fm.co_code=fs.co_code and fm.co_code=d.co_code 
                and fm.form_id=fs.form_id 
                and fm.form_id=fb.form_id and fm.seq_no=fs.seq_no and fs.active_flag=1 
                and fm.usr_id=u.usr_id and u.dep_id=d.dep_id 
                and fm.co_code='{0}' and fs.check_id='{1}' and check_time is null and item_status<>1 
                order by receive_time ",
                co, uid)
                ;
            DataTable tb = so.Sql2Table(sql);

            int pagesize = Convert.ToInt16(Request.Form["pageSize"].ToString());

            var q = GetTableRows(tb) 
                .Skip(Convert.ToInt16(Request.Form["skip"].ToString()))
                .Take(pagesize)
             ;
            string jsonString = JsonConvert.SerializeObject(tb);
            //return jsonString;
            var o = new
            {
                draw = Request.Form["draw"].ToString(),
                recordsTotal = tb.Rows.Count,
                page= tb.Rows.Count/ pagesize +1,
                recordsFiltered = tb.Rows.Count, //q.Count(),
                data = q
            };
            return Json(o, JsonRequestBehavior.AllowGet);

        }

        // GET: FAdmin
        [Authorize]
        public ActionResult Index()
        {
            FlowDbContext ctx = new FlowDbContext();

            string co_code = "0";
            string usr_id = "T000165";

            //var fsmain = ctx.EFormStatusMain.Where(a => a.co_code.Equals(co_code))
            //    .ToList();
            //var deps = ctx.departments.Where(
            //    a => a.departmentName == ""
            //    ).ToList();

            var fssub = ctx.EFormStatusSub
                .Where(b => b.co_code.Equals(co_code))
                .Where(b => b.check_id == usr_id)
                .Where(b => b.check_time.Equals(null))
                .Where(b => b.active_flag.Equals(1))
                .Take(5)
                .ToList();

            //var usr = ctx.EUser.Where(a => a.co_code == co_code)
            //            .Where(a => a.usr_id == usr_id).FirstOrDefault();

            //var deps = ctx.EDep.Where(a => usr_id.Equals(usr_id)).ToList();

            vwFlowStatus vw = new vwFlowStatus();
            vw.StatusSub = fssub;
            //vw.StatusSub= fssub.Select(subitem => new EFormStatusSub()
            //{
            //    MainB=ctx.EFormStatusMain.Where(a=>a.form_id==subitem.form_id).ToList()
            //}).ToList();




            ViewBag.Title = "單據一覽";
            return View(vw);


            viewFlows model = new viewFlows();
            model.myflows = new List<FlowInstance>();
            model.NeedApprove = new List<FlowInstance>();
            model.follows = new List<FlowInstance>();

            FlowInstance modela;
            for (int i = 0; i < 5; i++)
            {
                modela = new FlowInstance();
                modela.id = i + 1;
                modela.fdate = DateTime.Now;
                modela.username = "測試用戶A" + modela.id.ToString();
                modela.title = "簽呈A標題" + modela.id.ToString();
                modela.smemo = "內容1234567890123456789012345678901234567890";
                model.NeedApprove.Add(modela);
            }

            return View(model);
        }

        public ActionResult FlowNeedApprove()
        {
            List<FlowInstance> models = new List<FlowInstance>();
            ViewBag.Title = "待簽核清單";
            FlowInstance model;
            for (int i = 0; i < 5; i++)
            {
                model = new FlowInstance();
                model.id = i + 1;
                model.fdate = DateTime.Now;
                model.username = "測試用戶A" + model.id.ToString();
                model.title = "簽呈A標題" + model.id.ToString();
                model.smemo = "內容1234567890123456789012345678901234567890";
                //model.smemo += System.Environment.NewLine + "內容1234567890123456789012345678901234567890";
                models.Add(model);
            }

            return View(models);
        }

        public ActionResult FlowNeedApproveDetail(int id)
        {
            FlowInstance model = new FlowInstance();
            model.id = id;
            model.fdate = DateTime.Now;
            model.username = "測試用戶A" + model.id.ToString();
            model.title = "簽呈A標題" + model.id.ToString();
            model.smemo = "內容1234567890123456789012345678901234567890";

            ViewBag.Title = model.title;
            return View(model);
        }
    }
}