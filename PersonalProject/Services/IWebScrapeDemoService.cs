using System.Collections.Generic;
using FundamentalsReact.Models.InstagramWebScrape;

namespace FundamentalsReact.Services
{
    public interface IWebScrapeDemoService
    {
        List<InstagramEntity> PicWebScrape();
    }
}