import { GitService } from './git.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'GIt Search';
  user;
  repo;
  username: string;

  constructor(private _gitservice: GitService) {}

  ngOnInit() {
    this.getUser();
    this.getRepos();
  }

  getUser() {
    this._gitservice.getUser().subscribe(resp => {
      this.user = resp;
    });
  }

  getRepos() {
    this._gitservice.getRepos().subscribe( resp => this.repo = resp);
  }

  searchUsername(username) {
    this._gitservice.updateUser(this.username);
    this.getUser();
    this.getRepos();
  }
}
