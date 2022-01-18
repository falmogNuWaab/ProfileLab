import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';
import { User } from '../user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private proS: ProfileServiceService) { }
  editProfile: User = this.proS.getUserProfile();
  ngOnInit(): void {
  }
  updateProfile(){
    let n = (<HTMLInputElement>document.getElementById('name')).value;
    let ci = (<HTMLInputElement>document.getElementById('contactInfo')).value;
    let b = (<HTMLInputElement>document.getElementById('bio')).value;
    this.proS.setUserProfile(n,ci,b);
  }
}
