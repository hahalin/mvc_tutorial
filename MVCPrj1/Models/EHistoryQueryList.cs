namespace MVCPrj1.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("EHistoryQueryList")]
    public partial class EHistoryQueryList
    {
        [Key]
        [Column(Order = 0)]
        [StringLength(20)]
        public string co_code { get; set; }

        [Key]
        [Column(Order = 1)]
        [StringLength(64)]
        public string ugroup_id { get; set; }

        [Key]
        [Column(Order = 2)]
        [StringLength(255)]
        public string form_power { get; set; }
    }
}
