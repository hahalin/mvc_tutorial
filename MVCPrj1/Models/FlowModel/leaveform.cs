using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace MVCPrj1.Models.FlowModel
{
    [Table("leave")]
    public class leaveform
    {
        [Key]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "申請日期")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "請輸入申請日期")]
        public DateTime fdate { get; set; }

        [Display(Name = "申請人555")]
        [StringLength(10)]
        [MaxLength(10)]
        [DisplayFormat(NullDisplayText = "申請人")]
        public string userid { get; set; }

        [Display(Name = "假別")]
        [MaxLength(10)]
        [Required(AllowEmptyStrings = false, ErrorMessage = "請輸入假別")]    
        public string leavetype { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "請假日期")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "請輸入請假日期")]    
        public DateTime leavedate { get; set; }

        [Display(Name = "原因")]
        [StringLength(50)]
        [Required(AllowEmptyStrings = false, ErrorMessage = "請輸入原因")]                      
        [DataType(DataType.MultilineText)]
        public string smemo { get; set; }

        [Display(Name = "天數")]
        [StringLength(2)]
        [Required(AllowEmptyStrings = false, ErrorMessage = "請輸入天數")]         
        public string days { get; set; }

    }
}