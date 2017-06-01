"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var forms_2 = require("@angular/forms");
var primeng_1 = require("primeng/primeng");
var app_routing_1 = require("../Shared/app.routing");
var app_component_1 = require("../Shared/app.component");
var home_component_1 = require("../Home/home.component");
var add_role_component_1 = require("../Role/add-role.component");
var list_roles_component_1 = require("../Role/list-roles.component");
var role_tab_component_1 = require("../Role/role-tab.component");
var add_user_component_1 = require("../User/add-user.component");
var list_users_component_1 = require("../User/list-users.component");
var energy_data_entry_component_1 = require("../EnergyDE/view/energy-data-entry.component");
var ede_batch_tab_component_1 = require("../EnergyDE/view/ede-batch-tab.component");
var kd_entries_component_1 = require("../EnergyDE/view/kd-entries.component");
var zr_entries_component_1 = require("../EnergyDE/view/zr-entries.component");
var appModule = (function () {
    function appModule() {
    }
    return appModule;
}());
appModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routing_1.routing,
            forms_2.FormsModule,
            primeng_1.InputTextModule,
            primeng_1.ButtonModule,
            primeng_1.ConfirmDialogModule,
            primeng_1.SliderModule,
            primeng_1.DataTableModule,
            primeng_1.SharedModule,
            primeng_1.TabViewModule,
            primeng_1.PanelModule,
            primeng_1.CalendarModule,
            primeng_1.DialogModule,
            primeng_1.DropdownModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            add_role_component_1.AddRoleComponent,
            list_roles_component_1.ListRolesComponent,
            role_tab_component_1.RoleTabComponent,
            add_user_component_1.AddUserComponent,
            list_users_component_1.ListUsersComponent,
            energy_data_entry_component_1.EnergyDataEntryComponent,
            ede_batch_tab_component_1.EDEBatchTabComponent,
            zr_entries_component_1.ZREntriesComponent,
            kd_entries_component_1.KDEntriesComponent
        ],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }],
        bootstrap: [app_component_1.AppComponent]
    })
], appModule);
exports.appModule = appModule;
//# sourceMappingURL=app.module.js.map