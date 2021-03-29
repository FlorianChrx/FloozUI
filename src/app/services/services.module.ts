import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './authentication.service';
import { User } from '../model/user';



@NgModule({
  declarations: [AuthenticationService],
  imports: [
    CommonModule,
  ]
})
export class ServicesModule { }
