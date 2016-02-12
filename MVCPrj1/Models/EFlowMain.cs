namespace MVCPrj1.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("EFlowMain")]
    public partial class EFlowMain
    {
        public virtual ICollection<EFlowSub> EFlowSubList { get; set; }
        public virtual ICollection<EFormData> EFormDataList { get; set; }
        public virtual ICollection<EUser> EUserList { get; set; }
        public virtual ICollection<EDep> EDepList { get; set; }

        public EFlowMain()
        {
            EFlowSubList = new List<EFlowSub>();
            
            
        }

        [Key]
        [Column(Order = 0)]
        [StringLength(20)]
        public string co_code { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int flow_id { get; set; }

        [Key]
        [Column(Order = 2)]
        [StringLength(255)]
        public string flow_name { get; set; }

        [StringLength(255)]
        public string flow_share_nmae { get; set; }

        [Key]
        [Column(Order = 3)]
        [StringLength(40)]
        public string designer { get; set; }

        [Key]
        [Column(Order = 4)]
        public DateTime design_time { get; set; }

        [StringLength(40)]
        public string modifier { get; set; }

        public DateTime? modify_time { get; set; }

        [Key]
        [Column(Order = 5)]
        [StringLength(20)]
        public string flow_version { get; set; }

        [Column(TypeName = "text")]
        public string remark { get; set; }
    }
}
