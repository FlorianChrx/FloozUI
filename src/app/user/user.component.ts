import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  addUserForm: FormGroup;
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
    this.addUserForm = this.formBuilder.group({
      username: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.addUserForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addUserForm.invalid) {
      return;
    }

    this.loading = true;

    const routeParams = this.route.snapshot.paramMap;
    const group = Number(routeParams.get('id'));
    this.api.put(`user/groups/addUser/${group}/${this.f.username.value}`, {}).pipe(first()).subscribe(
      data => {
        this.router.navigateByUrl(`/group/${group}`);
      },
      error => {
        this.error = `An error has occured`;
        this.loading = false;
      });
  }
}
