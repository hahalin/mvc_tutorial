namespace MVCPrj1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CRoles",
                c => new
                    {
                        id = c.String(nullable: false, maxLength: 128),
                        cname = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.CUsers",
                c => new
                    {
                        id = c.String(nullable: false, maxLength: 128),
                        userid = c.String(),
                        pwd = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.CUsers");
            DropTable("dbo.CRoles");
        }
    }
}
