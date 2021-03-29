import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
    constructor(private http: HttpClient, private auth: AuthenticationService) {
    }
    
    get(path: string) {
        return this.http.get(`${environment.apiUrl}/${path}`)
    }

    put(path: string, data: any) {
        return this.http.put(`${environment.apiUrl}/${path}`, data)
    }

}