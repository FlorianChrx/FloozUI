import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repayement } from '../model/repayement';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.sass']
})
export class BalanceComponent implements OnInit {

  loading: boolean;
  repayements: Array<Repayement>;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loading = true;
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.api.get(`user/transaction/balance/${id}`).subscribe((data: Array<Repayement>) => {
      this.repayements = data;
      console.log(data);
    });
    this.api.get(`user/Dgroups`).subscribe(data => {
      console.log(data);
    });
  }

}
