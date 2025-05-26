import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { RegisterUserDto } from '../../../dtoes/auth/registerUserDto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class RegisterUserComponent implements OnInit {
  input: RegisterUserDto = {
    email: '',
    phoneNumber: '',
    nationalCode: '',
    passwordStr: '',
    rePasswordStr: '',
  };
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  onRegisterUser() {
    this.authService.register(this.input).subscribe((response) => {
      if (response.isSuccess) {
        console.log('User registered successfully:', response.data);
        // Handle successful registration, e.g., navigate to login page or show success message
      } else {
        console.error('Registration failed:', response.message);
        // Handle registration failure, e.g., show error message to user
      }
    });
  }
}
