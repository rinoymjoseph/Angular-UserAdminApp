import { Component } from '@angular/core';
import { UserService } from '../User/user.service';

@Component({
    selector: 'list-users',
    templateUrl: 'UserAdminApp/Areas/Admin/Angular/User/list-users.component.html',
    providers: [UserService]

})

export class ListUsersComponent { }