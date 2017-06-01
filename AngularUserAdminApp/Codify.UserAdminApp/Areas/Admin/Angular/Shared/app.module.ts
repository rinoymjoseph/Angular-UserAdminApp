import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {
    InputTextModule, ButtonModule, ConfirmDialogModule, SliderModule, DataTableModule,
    SharedModule, TabViewModule, PanelModule, CalendarModule, DialogModule, DropdownModule
} from 'primeng/primeng';
import { routing } from '../Shared/app.routing';
import { AppComponent } from '../Shared/app.component';
import { HomeComponent } from '../Home/home.component';
import { HomeTab1Component } from '../Home/home.tab1.component';
import { HomeTab2Component } from '../Home/home.tab2.component';
import { AddRoleComponent } from '../Role/add-role.component';
import { ListRolesComponent } from '../Role/list-roles.component';
import { RoleTabComponent } from '../Role/role-tab.component';
import { AddUserComponent } from '../User/add-user.component';
import { ListUsersComponent } from '../User/list-users.component';
import { EnergyDataEntryComponent } from '../EnergyDE/view/energy-data-entry.component';
import { EDEBatchTabComponent } from '../EnergyDE/view/ede-batch-tab.component';
import { KDEntriesComponent } from '../EnergyDE/view/kd-entries.component';
import { ZREntriesComponent } from '../EnergyDE/view/zr-entries.component';

@NgModule({
    imports: [BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        routing,
        FormsModule,
        InputTextModule,
        ButtonModule,
        ConfirmDialogModule,
        SliderModule,
        DataTableModule,
        SharedModule,
        TabViewModule,
        PanelModule,
        CalendarModule,
        DialogModule,
        DropdownModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AddRoleComponent,
        ListRolesComponent,
        RoleTabComponent,
        AddUserComponent,
        ListUsersComponent,
        EnergyDataEntryComponent,
        EDEBatchTabComponent,
        ZREntriesComponent,
        KDEntriesComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent]
})

export class appModule { }