namespace MVCPrj1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedFielintable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "company_id", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "company_id");
        }
    }
}
