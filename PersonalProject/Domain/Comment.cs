using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FundamentalsReact.Domain
{
    public class Comment
    {
        public int Id { get; set; }
        public string CommentText { get; set; }
        public string Username { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}