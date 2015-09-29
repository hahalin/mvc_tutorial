namespace MVCPrj1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class modifyCUserField : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.CUsers");
            AlterColumn("dbo.CUsers", "id", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.CUsers", "id");
        }
        
        public override void Down()
        {
            DropPrimaryKey("dbo.CUsers");
            AlterColumn("dbo.CUsers", "id", c => c.String(nullable: false, maxLength: 128));
            AddPrimaryKey("dbo.CUsers", "id");
        }
    }
}
