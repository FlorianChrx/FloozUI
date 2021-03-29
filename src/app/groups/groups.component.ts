import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-group',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.sass']
})
export class GroupsComponent implements OnInit {

  addGroupForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.addGroupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
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
    this.api.put(`user/groups/add`, { id: 0, users: [], name: this.f.name.value }).pipe(first()).subscribe(
      data => {
        this.router.navigateByUrl(`/home`);
      },
      error => {
        this.error = `An error has occured`;
        this.loading = false;
      });
  }
}
