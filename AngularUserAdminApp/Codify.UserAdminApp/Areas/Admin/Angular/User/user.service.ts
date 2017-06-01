import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { BaseService } from '../Shared/base.service';
import { User } from './user';

@Injectable()
export class UserService extends BaseService {

    private userServiceUrl = 'UserAdminApp/UserService/';  // URL to web API
    constructor(private http: Http) { super(); }

    getUsers(): Observable<User[]> {
        return this.http.get(this.userServiceUrl + 'GetUsers')
            .map(this.extractData)
            .catch(this.handleError);
    }

}