using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.ComponentModel.DataAnnotations;


namespace MVCPrj1.Models
{
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