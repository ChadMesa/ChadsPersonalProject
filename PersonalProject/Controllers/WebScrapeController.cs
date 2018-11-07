using FundamentalsReact.Models;
using FundamentalsReact.Models.InstagramWebScrape;
using FundamentalsReact.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FundamentalsReact.Controllers.Api
{
    [RoutePrefix("api/webscrapedpics")]
    public class WebScrappingController : ApiController
    {
        IWebScrapeDemoService _webScrapeDemoService;

        public WebScrappingController(IWebScrapeDemoService webScrapeDemoService)
        {
            _webScrapeDemoService = webScrapeDemoService;
        }

        [Route(), HttpGet]
        public IHttpActionResult GetPicsWebScrape()
        {
            try
            {
                ItemsResponse<InstagramEntity> response = new ItemsResponse<InstagramEntity>
                {
                    Items = _webScrapeDemoService.PicWebScrape()
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}