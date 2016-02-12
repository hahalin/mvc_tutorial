using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace MVCPrj1.Models.FlowModel
{
    public class FlowInstance
    {
        public int id { get; set; }
        
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "單據日期")]
        public DateTime fdate { get; set; }
        
        [Display(Name="申請人")]
         
        public string username { get; set; }

        [Display(Name="主旨")]
        [MaxLength(100)]
        public string title { get; set; }
        
        [Display(Name = "內容")]
        [MaxLength(200)]
        public string smemo { get; set; }

    }
}