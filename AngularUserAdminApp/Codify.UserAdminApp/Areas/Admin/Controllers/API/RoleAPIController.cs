using Codify.DataAccess.Admin;
using Codify.DataAccess.Admin.Repository;
using Codify.DataAccess.Admin.Repository.Interfaces;
using Codify.Entity.Admin;
using Codify.UserAdminApp.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Codify.UserAdminApp.Areas.Admin.Controllers.API
{
    [Route("RoleService")]
    public class RoleAPIController : ApiController
    {
        [Route("RoleService")]  
        [HttpGet]
        public string Info()
        {
            return "This is RoleService";
        }

        [HttpPost]
        [Route("RoleService/SaveRole")]
        public IHttpActionResult SaveRole(RoleModel roleModel)
        {
            IRoleRepository roleRepo = new RoleRepository(new CodifyDataContext());
            Role role = new Role();
            role.RoleId = roleModel.RoleId;
            role.RoleName = roleModel.RoleName;
            role.CreatedBy = Environment.UserName;
            role.ModifiedBy = Environment.UserName;
            role.CreatedDate = DateTime.Now;
            role.ModifiedDate = DateTime.Now;
            roleRepo.AddRole(role);
            string message = roleRepo.SaveChanges();
            return Ok(message);
        }

        [HttpGet]
        [Route("RoleService/GetRoles")]
        public IHttpActionResult GetRoles()
        {
            IRoleRepository roleRepo = new RoleRepository(new CodifyDataContext());
            List<Role> roles = roleRepo.GetRoles();
            List<RoleModel> roleModelList = null;

            if (roles != null && roles.Count > 0)
            {
                roleModelList = new List<RoleModel>();

                foreach (Role role in roles)
                {
                    RoleModel roleModel = new RoleModel();
                    roleModel.RoleId = role.RoleId;
                    roleModel.RoleName = role.RoleName;
                    roleModelList.Add(roleModel);
                }
            }

            return Ok(roleModelList);
        }
    }
}
