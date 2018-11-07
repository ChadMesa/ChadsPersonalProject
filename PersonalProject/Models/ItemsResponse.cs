using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FundamentalsReact.Models
{
    public class ItemsResponse<T>
    {
        public List<T> Items { get; set; }
    }
}