import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUserDto } from '../../dtoes/auth/registerUserDto';
import { Observable } from 'rxjs';
import { Result } from '../../dtoes/result';
import { ApiAddress } from '../../utilities/apiAddress';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(model: RegisterUserDto): Observable<Result<RegisterUserDto>> {
    return this.httpClient.post<Result<RegisterUserDto>>(
      ApiAddress.RegisterUser,
      model
    );
  }
}
