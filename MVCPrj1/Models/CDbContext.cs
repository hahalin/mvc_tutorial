using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace MVCPrj1.Models
{
    public partial class CDbContext : DbContext
    {
        public DbSet<CUser> users { get; set; }
        public DbSet<CRole> roles { get; set; }
        public DbSet<department> departments { get; set; }
        
        public CDbContext(): base("con1")
        {
            Database.SetInitializer(
                new MigrateDatabaseToLatestVersion<CDbContext, MVCPrj1.Migrations.Configuration>("con1")
            );
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);
        }

    }
}