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

        [AllowAnonymous]
        public  string test()
        {
            FlowDbContext dc = new FlowDbContext();
            var userlist = dc.users.ToList<CUser>();

            string r = "";
            foreach(CUser u in userlist)
            {
                r += u.userid + "</br>";
            }

            return r;

            //CDbContext dc = new CDbContext();
            //CUser u=new CUser{userid="Mary",pwd="1234"};

            //dc.users.Add(u);
            //dc.SaveChanges();

            //return u.id.ToString();

        }

        [HttpGet]
        public ActionResult Login(string ReturnUrl = "")
        {
            ViewBag.ReturnUrl = ReturnUrl;
            return View();
        }

        [HttpPost]
        public ActionResult Login(CLoginViewModel model,string ReturnUrl="")
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            //string base64Password = Convert.ToBase64String(Encoding.UTF8.GetBytes(Password));

            using (FlowDbContext dc = new FlowDbContext())
            {
                var userlist = dc.users.ToList<CUser>();

                var user = dc.users.Where(
                    a => a.userid.Equals(model.Username) && a.pwd.Equals(model.Password)).FirstOrDefault();
                if (user!=null)
                {
                    FormsAuthentication.SetAuthCookie(user.userid, model.RememberMe);
                    //FormsIdentity id=HttpContext.User.

                    //FormsAuthenticationTicket ticket = new FormsAuthenticationTicket()

                    

                    if (Url.IsLocalUrl(ReturnUrl))
                    {
                        return Redirect(ReturnUrl);
                    }
                    else
                    {
                        return RedirectToAction("Index", "Home");
                    }
                }
                else
                {
                    ModelState.AddModelError("","無此帳號或密碼錯誤");
                    return View(model);
                }
            }

            ModelState.Remove("Password");
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
                try
                {
                    //throw new Exception("我自訂錯誤");
                    FlowDbContext dc = new FlowDbContext();

                    CUser u = new CUser();
                    u.userid = model.Username;
                    u.pwd = model.Password;
                    
                    dc.users.Add(u);
                    dc.SaveChanges();
                    return RedirectToAction("Login", "CAccount");
                }
                catch (Exception ex)
                {
                    ModelState.AddModelError("", ex.Message);
                    return View(model);
                }
            }

            return View();
        }

        public ActionResult LogOut()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Index", "Home");
        }
    }
}