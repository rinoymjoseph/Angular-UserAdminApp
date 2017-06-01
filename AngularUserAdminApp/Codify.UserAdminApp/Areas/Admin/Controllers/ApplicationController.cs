using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Codify.UserAdminApp.Areas.Admin.Controllers
{
    public class ApplicationController : Controller
    {
        // GET: Admin/Application
        public ActionResult Index()
        {
            return View();
        }
    }
}