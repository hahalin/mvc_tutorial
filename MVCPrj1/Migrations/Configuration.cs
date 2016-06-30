namespace MVCPrj1.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;

    internal sealed class Configuration : DbMigrationsConfiguration<MVCPrj1.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(MVCPrj1.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            importEFormUser(context);
        }

        void importEFormUser(MVCPrj1.Models.ApplicationDbContext context)
        {
            var manager = new UserManager<ApplicationUser>(
                    new UserStore<ApplicationUser>(
                        new ApplicationDbContext()
                    )
                );

            FlowDbContext ctx = new FlowDbContext();
            foreach(EUser u in ctx.EUser.OrderBy(m=>m.usr_id).ToList())
            {
                if (manager.FindByName(u.usr_id)== null)
                {
                    var user = new ApplicationUser()
                    {
                        UserName = u.usr_id,
                        Email = u.usr_email                        
                    };
                    manager.Create(user, "p@ssword");
                }
            }

        }
    }
}
