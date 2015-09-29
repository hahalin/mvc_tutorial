using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MVCPrj1.Models
{
    [Table("department")]
    public class department
    {
        [Required]
        [Display(Name="部門編號")]
        public string id { get; set; }
        
        [Required] //attribute
        [Display(Name="部門名稱")]
        
        public string departmentName { get; set; }
    }
}