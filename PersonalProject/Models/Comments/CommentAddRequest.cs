using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FundamentalsReact.Models.Comments
{
    public class CommentAddRequest
    {
        [Required]
        public string CommentText { get; set; }
        public string Username { get; set; }
    }
}