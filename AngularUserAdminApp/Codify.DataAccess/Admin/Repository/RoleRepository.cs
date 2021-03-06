﻿
using Codify.DataAccess.Admin.Repository.Interfaces;
using Codify.Entity.Admin;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace Codify.DataAccess.Admin.Repository
{
    public class RoleRepository : BaseRepository, IRoleRepository
    {
        public readonly DbContext _dataContext;

        public RoleRepository(DbContext dataContext) : base(dataContext)
        {
            _dataContext = dataContext;
        }
        public void AddRole(Role role)
        {
            if (role == null)
            {
                throw new ArgumentNullException("role");
            }

            var set = _dataContext.Set<Role>();
            set.Add(role);
        }
        public List<Role> GetRoles()
        {
            //return _dataContext.Set<Role>().Where(x => x.IsCurrent).ToList();
            return _dataContext.Set<Role>().ToList();
        }
    }
}
