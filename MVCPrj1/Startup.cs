using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVCPrj1.Startup))]
namespace MVCPrj1
{

    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
