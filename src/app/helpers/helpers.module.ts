import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { BasicAuthInterceptor } from './basic-auth.interceptor';



@NgModule({
  declarations: [AuthGuard],
  imports: [
    CommonModule
  ]
})
export class HelpersModule { }
