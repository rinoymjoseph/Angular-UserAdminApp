using Codify.DataAccess.Admin;
using Codify.DataAccess.Admin.Repository;
using Codify.DataAccess.Admin.Repository.Interfaces;
using Codify.Entity.Admin;
using Codify.UserAdminApp.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Codify.UserAdminApp.Areas.Admin.Controllers
{
    public class RoleController : Controller
    {
        // GET: Admin/Role
        public ActionResult Index()
        {
            return View();
        }
    }
}