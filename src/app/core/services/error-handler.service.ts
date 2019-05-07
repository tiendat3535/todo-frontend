import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseError } from '../models/error.model';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  getError(errorResponse: HttpErrorResponse): ResponseError {
    const error = JSON.parse(errorResponse.error);
    return new ResponseError(error.message, error.errorCode);
  }
}
