using System;
using System.Web;
using System.Web.Mvc;
using MVCPrj1.App_Start;

namespace MVCPrj1.Attributes
{
    public class RESTAuthorizeAttribute : AuthorizeAttribute
    {
        private const string _securityToken = "token";

        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            if (Authorize(filterContext))
            {
                return;
            }

            HandleUnauthorizedRequest(filterContext);
        }

        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            base.HandleUnauthorizedRequest(filterContext);
        }

        private bool Authorize(AuthorizationContext actionContext)
        {
            try
            {
                HttpRequestBase request = actionContext.RequestContext.HttpContext.Request;
                string token = request.Params[_securityToken];

                return SecurityManager.IsTokenValid(token, "127.0.0.1", request.UserAgent);
            }
            catch (Exception)
            {
                return false;
            }
        }

    }
}