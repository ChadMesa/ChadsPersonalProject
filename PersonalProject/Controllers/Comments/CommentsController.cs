using FundamentalsReact.Domain;
using FundamentalsReact.Models;
using FundamentalsReact.Models.Comments;
using FundamentalsReact.Responses;
using FundamentalsReact.Services.Commentschad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace FundamentalsReact.Controllers.Comments
{
    [RoutePrefix("api/comments")]
    public class CommentsController : ApiController
    {
        ICommentService _commentService;

        public CommentsController(ICommentService commentService)
        {
            _commentService = commentService;
        }
        [Route(), HttpGet]
        public IHttpActionResult GetAll()
        {
            try
            {
                if (!ModelState.IsValid) { return BadRequest(ModelState); }
                ItemsResponse<Comment> response = new ItemsResponse<Comment>
                {
                    Items = _commentService.ReadAll()
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [Route("{id:int}"), HttpGet]
        public IHttpActionResult GetById(int id)
        {
            try
            {
                if (!ModelState.IsValid) { return BadRequest(ModelState); }
                ItemResponse<Comment> response = new ItemResponse<Comment>
                {
                    Item = _commentService.ReadById(id)
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [Route(), HttpPost]
        public IHttpActionResult Post(CommentAddRequest model)
        {
            try
            {
                if (!ModelState.IsValid) { return BadRequest(ModelState); }
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _commentService.Create(model)
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [Route("{id:int}"), HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            try
            {
                if (!ModelState.IsValid) { return BadRequest("invalid model!"); }
                _commentService.Delete(id);

                return Ok(new SuccessResponse());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [Route(), HttpPut]
        public IHttpActionResult Put(CommentUpdateRequest model)
        {
            try
            {
                if (!ModelState.IsValid) { return BadRequest(ModelState); }

                _commentService.Update(model);

                return Ok(new SuccessResponse());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}