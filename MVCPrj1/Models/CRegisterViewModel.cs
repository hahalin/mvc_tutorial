using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace MVCPrj1.Models
{
    public class CRegisterViewModel
    {
        [Required]
        [Display(Name = "用戶名稱")]
        public string Username { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "密碼")]
        [StringLength(100,ErrorMessage="The {0} must be at least {2} characters long.",MinimumLength=6)]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "確認密碼")]
        [Compare("Password",ErrorMessage="確認密碼需一致")]
        public string ConfirmPassword { get; set; }
    }


}