import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../Home/home.component';
import { HomeTab1Component } from '../Home/home.tab1.component';
import { HomeTab2Component } from '../Home/home.tab2.component';
import { AddRoleComponent } from '../Role/add-role.component';
import { ListRolesComponent } from '../Role/list-roles.component';
import { AddUserComponent } from '../User/add-user.component';
import { ListUsersComponent } from '../User/list-users.component';
import { EnergyDataEntryComponent} from '../EnergyDE/view/energy-data-entry.component';

const routes: Routes = [
    { path: '', redirectTo: 'UserAdminApp', pathMatch: 'full' },
    { path: 'UserAdminApp', component: HomeComponent },
    { path: 'UserAdminApp/Role/AddRole', component: AddRoleComponent },
    { path: 'UserAdminApp/Role/ListRoles', component: ListRolesComponent },
    { path: 'UserAdminApp/User/AddUser', component: AddUserComponent },
    { path: 'UserAdminApp/User/ListUsers', component: ListUsersComponent },
    { path: 'UserAdminApp/EnergyDataEntry', component: EnergyDataEntryComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);