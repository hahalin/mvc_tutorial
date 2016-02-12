using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace MVCPrj1.Models
{
    public class FlowDbContext: DbContext
    {
        public DbSet<CUser> users { get; set; }
        public DbSet<CRole> roles { get; set; }
        public DbSet<department> departments { get; set; }
        public DbSet<FlowModel.FlowInstance> flowinstance { get; set; }

        public virtual DbSet<FlowInstances> FlowInstances { get; set; }
        public virtual DbSet<EAdvanceFunction> EAdvanceFunction { get; set; }
        public virtual DbSet<ECompany> ECompany { get; set; }
        public virtual DbSet<EConstant> EConstant { get; set; }
        public virtual DbSet<EDep> EDep { get; set; }
        public virtual DbSet<EFlowMain> EFlowMain { get; set; }
        public virtual DbSet<EFlowSub> EFlowSub { get; set; }
        public virtual DbSet<EForm_useflag0v> EForm_useflag0v { get; set; }
        public virtual DbSet<EFormAttachFile> EFormAttachFile { get; set; }
        public virtual DbSet<EFormBasic> EFormBasic { get; set; }
        public virtual DbSet<EFormData> EFormData { get; set; }
        public virtual DbSet<EFormDataBK> EFormDataBK { get; set; }
        public virtual DbSet<EFormGroup> EFormGroup { get; set; }
        public virtual DbSet<EFormPermit> EFormPermit { get; set; }
        public virtual DbSet<EFormStatusCC> EFormStatusCC { get; set; }
        public virtual DbSet<EFormStatusMain> EFormStatusMain { get; set; }
        public virtual DbSet<EFormStatusSub> EFormStatusSub { get; set; }
        public virtual DbSet<EFormStatusView> EFormStatusView { get; set; }
        public virtual DbSet<EFormTag> EFormTag { get; set; }
        public virtual DbSet<EFormUserFlow> EFormUserFlow { get; set; }
        public virtual DbSet<EHistoryQueryList> EHistoryQueryList { get; set; }
        public virtual DbSet<ELoginRecord> ELoginRecord { get; set; }
        public virtual DbSet<ELoginTotal> ELoginTotal { get; set; }
        public virtual DbSet<EReplace> EReplace { get; set; }
        public virtual DbSet<ESystemMsg> ESystemMsg { get; set; }
        public virtual DbSet<ETask> ETask { get; set; }
        public virtual DbSet<ETitleClass> ETitleClass { get; set; }
        public virtual DbSet<EUser> EUser { get; set; }
        public virtual DbSet<EUserGroup> EUserGroup { get; set; }
        public virtual DbSet<EUserGroupSub> EUserGroupSub { get; set; }
        public virtual DbSet<MainBtnGroup> MainBtnGroup { get; set; }
        public virtual DbSet<MainBtnItem> MainBtnItem { get; set; }
        public virtual DbSet<MainBtnSet> MainBtnSet { get; set; }
        public virtual DbSet<MainBtnUser> MainBtnUser { get; set; }
        public virtual DbSet<MainTreeDep> MainTreeDep { get; set; }
        public virtual DbSet<MainTreeExe> MainTreeExe { get; set; }
        public virtual DbSet<MainTreeItem> MainTreeItem { get; set; }
        public virtual DbSet<MainTreeItemPermit> MainTreeItemPermit { get; set; }
        public virtual DbSet<MainTreeNode> MainTreeNode { get; set; }
        public virtual DbSet<MainTreeNodePermit> MainTreeNodePermit { get; set; }

        public FlowDbContext()
            : base("con1")
        {
            //database.setinitializer(
            //    new migratedatabasetolatestversion<flowdbcontext, mvcprj1.migrations.flowdbcontext.configuration>("con1")
            //);
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            
            


        }
    }
}