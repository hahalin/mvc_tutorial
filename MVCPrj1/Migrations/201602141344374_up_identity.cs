namespace MVCPrj1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class up_identity : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Account", "usr_id", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Account", "usr_id");
        }
    }
}
