import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../shared/profile.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string;
  user: [];
  repos: [];
  constructor(private profileService: ProfileService) {
   }

  ngOnInit() {
    this.username = 'GhazanfarKhan';
    this.getUserProfile();
    this.getUserRepos();
  }
  getUserProfile() {
    this.profileService.getUserProfile(this.username).subscribe(user => this.user = user);
  }
  getUserRepos() {
    this.profileService.getUserRepos(this.username).subscribe(repos => this.repos = repos);
  }
  searchUser(form?: NgForm) {
    if (!form.valid) {
      return;
    }
    this.getUserProfile();
    this.getUserRepos();
  }
}
