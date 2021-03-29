import { Component, OnInit } from '@angular/core';
import { Group } from '../model/group';
import { User } from '../model/user';
import { ApiService } from '../services/api.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  groups: Array<Group>;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get(`user/groups`).subscribe((data: Array<Group>) => {
      this.groups = data;
    })
    this.api.get(`public/message/test`).subscribe(data => {
      console.log(data);
    });
    this.api.get(`user/transaction/1`).subscribe(data =>{
      console.log(data);
    });
  }
}
