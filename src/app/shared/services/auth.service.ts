import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import {User} from '../models/user.model';
import {Router} from '@angular/router';


@Injectable()
export class AuthService {
	public isAuthenticated: boolean;
	public user: User;

	constructor(private http: HttpClient,
		private router: Router
	) { 
		this.isAuthenticated = !!window.localStorage.getItem('loginToken');

	}

  login(email: string, password: string)
  {
  	return new Observable((o: Observer<any>) => {
    	this.http.post('http://localhost:8000/api/login', {
  			'email': email,
  			'password': password
  	  	})
	        .subscribe(
	          (token: string) => {
	          	window.localStorage.setItem('loginToken', token);

	            o.next(token);
	            return o.complete();
	          },
	          (err) => {
	          	return o.error(err);
	          }
	        );
    });
	}
	
	registerUser(user) {
		return new Observable((o: Observer<any>) => {
				this.http.post('http://localhost:8000/api/register', {
						'first_name': user.first_name,
						'last_name': user.last_name,
						'email': user.email,
						'password': user.password
				}).subscribe((data: any) => {

						o.next(this.user);
						return o.complete();
				}, (error) => {
						return o.error(error);
				});
		});
}
logout() {
	window.localStorage.removeItem('loginToken');
	this.isAuthenticated = false;
	this.router.navigateByUrl('/login');
}

}