import { Component, Input, OnInit} from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({

    selector: 'add-user',
    templateUrl: 'UserAdminApp/Areas/Admin/Angular/User/add-user.component.html',
    providers: [UserService]

})

export class AddUserComponent implements OnInit {

    user: User = new User();

    ngOnInit(): void { }


}