import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../model/group';
import { Transaction } from '../model/Transaction';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.sass']
})
export class GroupComponent implements OnInit {
  group: Group;
  transactions: Array<Transaction>;
  loading: boolean;
  deleting: boolean;
  deletingId: number;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loading = true;
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.api.get(`user/groups/${id}`).subscribe((data: Group) => {
      this.group = data;
      this.api.get(`user/transaction/mine/${this.group.id}`).subscribe((data: Array<Transaction>) => {
        this.transactions = data;
        this.loading = false;
      });
    });
  }

  delete(id: number){
    this.deleting = true;
    this.deletingId = id;
    this.api.delete('user/transaction/'+id).subscribe(data =>{
      if(data['success']){
        this.api.get(`user/transaction/mine/${this.group.id}`).subscribe((data: Array<Transaction>) => {
          this.transactions = data;
          this.deleting= false;
        });
      }
    });
  }
}
