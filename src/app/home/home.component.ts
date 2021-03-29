import { Component, OnInit } from '@angular/core';
import { Group } from '../model/group';
import { ApiService } from '../services/api.service';

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
    });
  }
}
