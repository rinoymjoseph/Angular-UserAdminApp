import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Role } from './role';
import { ROLES } from './mock-roles';

@Injectable()
export class RoleService {

    private roleServiceUrl = 'UserAdminApp/RoleService/';  // URL to web API
    constructor(private http: Http) { }

    getRoles(): Promise<Role[]> {
        return Promise.resolve(ROLES);
    }


    getRoles_Web(): Observable<Role[]> {
        return this.http.get(this.roleServiceUrl + 'GetRoles')
            .map(this.extractData)
            .catch(this.handleError);
    }

    saveRole(name: String): Observable<string> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.roleServiceUrl + 'SaveRole', { RoleId: 0, RoleName: name }, options)
            .map(this.extractData)
            .catch(this.handleError);

    }

    private extractData(res: Response) {

        let body = res.json();
        //return body.data || {};
        console.log(body);
        return body;
    }
    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}