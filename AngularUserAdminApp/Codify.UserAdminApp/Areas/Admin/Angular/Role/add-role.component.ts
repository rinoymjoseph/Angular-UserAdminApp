import { Component, Input, OnInit } from '@angular/core';
import { Role } from './role';
import { RoleService } from './role.service';

@Component({
    selector: 'add-role',
    templateUrl: 'UserAdminApp/Areas/Admin/Angular/Role/add-role.component.html',
    providers: [RoleService]
})
export class AddRoleComponent implements OnInit {
    message: string;
    roleName: string;
    rangeValues: number[] = [20, 80];
    val: number;
    value: Date;

    constructor(private roleService: RoleService) { }

    ngOnInit(): void {
        this.message = 'Enter Role name and save';
    }

    addRole(name: string) {
        if (!name) { return; }
        this.roleService.saveRole(name)
            .subscribe(
            message => this.message = message,
            error => this.message = <any>error);
    }
}