using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace MVCPrj1.Models
{
    public class CLoginViewModel
    {
        [Required]
        [Display(Name="使用者名稱")]
        public string Username
        {
            get;
            set;
        }
        [Required]
        [Display(Name = "密碼")]
        [DataType(DataType.Password)]
        public string Password
        {
            get;
            set;
        }

        [Display(Name = "記住我")]
        public bool RememberMe
        {
            get;
            set;
        }
    }
}