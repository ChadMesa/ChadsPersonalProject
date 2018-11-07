using System.Collections.Generic;
using FundamentalsReact.Domain;
using FundamentalsReact.Models.Comments;

namespace FundamentalsReact.Services.Commentschad
{
    public interface ICommentService
    {
        int Create(CommentAddRequest model);
        void Delete(int id);
        List<Comment> ReadAll();
        void Update(CommentUpdateRequest model);
        Comment ReadById(int id);
    }
}