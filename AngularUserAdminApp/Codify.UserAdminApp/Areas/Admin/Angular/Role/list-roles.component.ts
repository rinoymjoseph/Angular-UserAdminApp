import { Component, OnInit } from '@angular/core';
import { Role } from './role';
import { RoleService } from './role.service';

@Component({

    selector: 'list-roles',
    templateUrl: 'UserAdminApp/Areas/Admin/Angular/Role/list-roles.component.html',
    providers: [RoleService]
})

export class ListRolesComponent implements OnInit{

    errorMessage: string;
    roles: Role[];
    mode = 'Observable';
    value: Date;

    constructor(private roleService: RoleService) { }

    ngOnInit(): void {
        this.getRoles();
    }

    getRoles() {
        this.roleService.getRoles_Web()
            .subscribe(
            roles => this.roles = roles,
            error => this.errorMessage = <any>error);

        console.info(this.roles);
    }

    addRole() {

        let roles = [...this.roles];
        let role = new Role();
        role.RoleId = 1;
        role.RoleName = "Test";
        //role.RoleDate = new Date();
        roles.push(role);
        this.roles = roles;
    }
}
