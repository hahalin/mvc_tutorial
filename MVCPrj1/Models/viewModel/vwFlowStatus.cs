using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace MVCPrj1.Models.viewModel
{
    public class vwFlowStatus
    {
        public vwFlowStatus()
        {
            StatusSub = new List<EFormStatusSub>();
        }

        public List<EFormStatusMain> StatusMain
        {
            get;
            set;
        }
        public List<EFormStatusSub> StatusSub
        {
            get;
            set;
        }

        public List<EDep> dep
        {
            get;
            set;
        }

        public EUser usr
        {
            get;
            set;
        }
    }
}