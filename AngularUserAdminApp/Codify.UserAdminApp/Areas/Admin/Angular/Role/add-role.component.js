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
var role_service_1 = require("./role.service");
var AddRoleComponent = (function () {
    function AddRoleComponent(roleService) {
        this.roleService = roleService;
        this.rangeValues = [20, 80];
    }
    AddRoleComponent.prototype.ngOnInit = function () {
        this.message = 'Enter Role name and save';
    };
    AddRoleComponent.prototype.addRole = function (name) {
        var _this = this;
        if (!name) {
            return;
        }
        this.roleService.saveRole(name)
            .subscribe(function (message) { return _this.message = message; }, function (error) { return _this.message = error; });
    };
    return AddRoleComponent;
}());
AddRoleComponent = __decorate([
    core_1.Component({
        selector: 'add-role',
        templateUrl: 'UserAdminApp/Areas/Admin/Angular/Role/add-role.component.html',
        providers: [role_service_1.RoleService]
    }),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], AddRoleComponent);
exports.AddRoleComponent = AddRoleComponent;
//# sourceMappingURL=add-role.component.js.map