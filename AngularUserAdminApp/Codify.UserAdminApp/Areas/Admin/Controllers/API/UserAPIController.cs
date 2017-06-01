using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Codify.UserAdminApp.Areas.Admin.Controllers.API
{
    [Route("UserService")]
    public class UserAPIController : ApiController
    {
        [Route("UserService")]
        [HttpGet]
        public string Info()
        {
            return "This is UserService";
        }
    }
}
