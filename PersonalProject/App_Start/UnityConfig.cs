using FundamentalsReact.Services;
using FundamentalsReact.Services.Commentschad;
using System.Web.Http;
using System.Web.Mvc;
using Unity;
using Unity.WebApi;

namespace FundamentalsReact
{
    public sealed class UnityConfig
    {
        private static readonly UnityConfig _instance = new UnityConfig();
        static UnityConfig() { }
        private UnityConfig() { }
        public static UnityConfig Instance { get { return _instance; } }

        public void RegisterComponents()
        {
            var container = new UnityContainer();
            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<ICommentService, CommentService>();
            container.RegisterType<IWebScrapeDemoService, WebScrapeDemoService>();
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
            DependencyResolver.SetResolver(new Unity.Mvc5.UnityDependencyResolver(container));
        }
    }
}