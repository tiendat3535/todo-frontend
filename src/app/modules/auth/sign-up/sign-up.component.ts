import { ErrorHandlerService } from './../../../core/services/error-handler.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, take } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'todo-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private form: FormGroup;
  private errorMessage: string;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private errorService: ErrorHandlerService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error instanceof HttpErrorResponse && error.status === 400 ) {
      this.errorMessage = this.errorService.getError(error).errorCode; 
    } else {
      return throwError(error); 
    }
  };

  signUp(): void {
    const user = this.form.value;
    this.authService.authenticateUser(user.email, user.password)
      .pipe(
        take(1),
        catchError((error) => this.handleError(error))
      )
      .subscribe(token => {
        this.errorMessage = null;
        this.router.navigate(['']);
      });
  }

}
