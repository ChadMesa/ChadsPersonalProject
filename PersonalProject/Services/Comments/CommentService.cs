using DbAccess1.Tools;
using FundamentalsReact.Domain;
using FundamentalsReact.Models.Comments;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace FundamentalsReact.Services.Commentschad
{
    public class CommentService : BaseService, ICommentService
    {
        public List<Comment> ReadAll()
        {
            return Adapter.LoadObject<Comment>(
            "Comments_Comment_SelectAll");
        }
        public Comment ReadById(int id)
        {
            return Adapter.LoadObject<Comment>(
                "Comments_Comment_SelectById",
                new[] { SqlDbParameter.Instance.BuildParameter("@id", id, System.Data.SqlDbType.Int) }
                ).FirstOrDefault();
        }
        public int Create(CommentAddRequest model)
        {
            int id = 0;
            Adapter.ExecuteQuery(
            "Comments_Comment_Insert",
             new[] {
                    SqlDbParameter.Instance.BuildParameter("@commentText", model.CommentText, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@username", model.Username, SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@id", id, System.Data.SqlDbType.Int, 0, ParameterDirection.Output),

             },
             (parameters =>
             {
                 id = parameters.GetParamValue<int>("@id");
             }));
            return id;
        }
        public void Update(CommentUpdateRequest model)
        {
            Adapter.ExecuteQuery("Comments_Comment_Update",
                new[]
                {
                    SqlDbParameter.Instance.BuildParameter("@commentText", model.CommentText, System.Data.SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@username", model.Username, System.Data.SqlDbType.NVarChar),
                    SqlDbParameter.Instance.BuildParameter("@id", model.Id, System.Data.SqlDbType.Int)
                });
        }
        public void Delete(int id)
        {
            Adapter.ExecuteQuery("Comments_Comment_Delete",
                new[]
                {
                    SqlDbParameter.Instance.BuildParameter("@Id", id, SqlDbType.Int)
                });
        }
    }
}