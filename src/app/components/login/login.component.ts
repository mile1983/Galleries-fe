import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(

                private authService: AuthService,

                private router: Router
            ) { }

  ngOnInit() {
  }

  login(email, password) {
    this.authService.login(email, password)
        .subscribe(
        () => {
            this.router.navigateByUrl('/');
        },
        (err: HttpErrorResponse) => {
            alert(`${err.error.error}`);
        }
        );
}

// logout() {
//     this.authService.logout();
// }

}
