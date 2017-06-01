"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var role_1 = require("./role");
var role_service_1 = require("./role.service");
var ListRolesComponent = (function () {
    function ListRolesComponent(roleService) {
        this.roleService = roleService;
        this.mode = 'Observable';
    }
    ListRolesComponent.prototype.ngOnInit = function () {
        this.getRoles();
    };
    ListRolesComponent.prototype.getRoles = function () {
        var _this = this;
        this.roleService.getRoles_Web()
            .subscribe(function (roles) { return _this.roles = roles; }, function (error) { return _this.errorMessage = error; });
        console.info(this.roles);
    };
    ListRolesComponent.prototype.addRole = function () {
        var roles = this.roles.slice();
        var role = new role_1.Role();
        role.RoleId = 1;
        role.RoleName = "Test";
        //role.RoleDate = new Date();
        roles.push(role);
        this.roles = roles;
    };
    return ListRolesComponent;
}());
ListRolesComponent = __decorate([
    core_1.Component({
        selector: 'list-roles',
        templateUrl: 'UserAdminApp/Areas/Admin/Angular/Role/list-roles.component.html',
        providers: [role_service_1.RoleService]
    }),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], ListRolesComponent);
exports.ListRolesComponent = ListRolesComponent;
//# sourceMappingURL=list-roles.component.js.map