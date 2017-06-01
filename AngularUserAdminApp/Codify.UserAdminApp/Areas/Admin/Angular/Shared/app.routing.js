"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("../Home/home.component");
var add_role_component_1 = require("../Role/add-role.component");
var list_roles_component_1 = require("../Role/list-roles.component");
var add_user_component_1 = require("../User/add-user.component");
var list_users_component_1 = require("../User/list-users.component");
var energy_data_entry_component_1 = require("../EnergyDE/view/energy-data-entry.component");
var routes = [
    { path: '', redirectTo: 'UserAdminApp', pathMatch: 'full' },
    { path: 'UserAdminApp', component: home_component_1.HomeComponent },
    { path: 'UserAdminApp/Role/AddRole', component: add_role_component_1.AddRoleComponent },
    { path: 'UserAdminApp/Role/ListRoles', component: list_roles_component_1.ListRolesComponent },
    { path: 'UserAdminApp/User/AddUser', component: add_user_component_1.AddUserComponent },
    { path: 'UserAdminApp/User/ListUsers', component: list_users_component_1.ListUsersComponent },
    { path: 'UserAdminApp/EnergyDataEntry', component: energy_data_entry_component_1.EnergyDataEntryComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map