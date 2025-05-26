import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterUserComponent } from './pages/auth/register-user/register-user.component';

export const routes: Routes = [

  {
    path: '',component:DashboardComponent
  },
  {
    path:'register',component:RegisterUserComponent
  }
];
