import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';
import { User } from '../user';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css']
})
export class DisplayProfileComponent implements OnInit {

  constructor(private proS: ProfileServiceService) { }
  displayProfile : User = this.proS.rando;
  ngOnInit(): void {
  }

}
