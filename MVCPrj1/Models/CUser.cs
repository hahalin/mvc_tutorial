using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MVCPrj1.Models
{
    [Table("CUsers")]
    public class CUser
    {
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id
        {
            get;
            set;
        }
        public string userid
        {
            get;
            set;
        }

        public string pwd
        {
            get;
            set;
        }
    }
}