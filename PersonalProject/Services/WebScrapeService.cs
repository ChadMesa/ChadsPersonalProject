using FundamentalsReact.Models.InstagramWebScrape;
using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;

namespace FundamentalsReact.Services
{
    public class WebScrapeDemoService : IWebScrapeDemoService
    {

        public List<InstagramEntity> PicWebScrape()
        {
            List<InstagramEntity> Pictures = new List<InstagramEntity>();
            HtmlDocument doc = new HtmlDocument();

            doc.OptionFixNestedTags = true;
            string url = "https://web.stagram.com/ch4doy";
            HttpWebRequest req = HttpWebRequest.Create(url) as HttpWebRequest;
            req.Method = "GET";
            /* Sart browser signature */
            req.UserAgent = "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:31.0) Gecko/20100101 Firefox/31.0";
            req.Accept = "text/html,application/xhtml+xxml,application/xml;q=0.9,*/*;q=0.8";
            req.Headers.Add(HttpRequestHeader.AcceptLanguage, "en-us, n; q=0.5");
            /* Start browsser signature */
            WebResponse response = req.GetResponse();
            doc.Load(response.GetResponseStream(), true);
            if (doc.DocumentNode != null)
            {
                var articleNodes = doc.DocumentNode.SelectNodes(
                    "/html/body/div/article/div/div/div/a");
                if (articleNodes != null && articleNodes.Any())
                {
                    foreach (var articleNode in articleNodes)
                    {
                        var picNode = articleNode.SelectSingleNode("img");
                        string picUrl = picNode.Attributes["data-src"].Value;
                        Pictures.Add(new InstagramEntity { PictureUrl = picUrl });
                    }
                }
            }
            return Pictures;
        }
    }
}