using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FundamentalsReact.Models.Comments
{
    public class CommentUpdateRequest : CommentAddRequest
    {
        [Required]
        public int Id { get; set; }
    }
}