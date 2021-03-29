import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent implements OnInit {

  addGroupForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.addGroupForm = this.formBuilder.group({
      motif: ['', [Validators.required, Validators.maxLength(50)]],
      amount: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.addGroupForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addGroupForm.invalid) {
      return;
    }

    this.loading = true;

    const routeParams = this.route.snapshot.paramMap;
    const group = Number(routeParams.get('id'));
    const partialTransaction = {
      amount: this.f.amount.value,
      motif: this.f.motif.value
    }
    this.api.put(`user/transaction/mine/${group}`, partialTransaction).pipe(first()).subscribe(
      data => {
        this.router.navigateByUrl(`/group/${group}`);
      },
      error => {
        this.error = `An error has occured`;
        this.loading = false;
      });
  }
}
