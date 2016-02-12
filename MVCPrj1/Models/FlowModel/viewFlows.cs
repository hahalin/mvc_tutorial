using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVCPrj1.Models.FlowModel
{
    public class viewFlows
    {
        public List<FlowInstance> NeedApprove
        {
            get;
            set;
        }

        public List<FlowInstance> myflows
        {
            get;
            set;
        }

        public List<FlowInstance> follows
        {
            get;
            set;
        }

    }
}