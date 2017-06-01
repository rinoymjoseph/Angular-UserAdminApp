using System.Web.Mvc;

namespace Codify.UserAdminApp.Areas.Admin
{
    public class AdminAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Admin";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            //context.MapRoute(
            //    "Admin_default",
            //    "Admin/{controller}/{action}/{id}",
            //    new { action = "Index", id = UrlParameter.Optional }
            //);

            context.MapRoute(
                "Admin_default",
                "Admin/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional },
                new { controller = "Login|Application|RoleAPI" }
            );

            context.MapRoute(
               name: "Admin-angular",
               url: "{*url}",
               defaults: new { controller = "Home", action = "Index" }
               );
        }
    }
}