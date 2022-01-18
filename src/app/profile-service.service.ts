import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})


export class ProfileServiceService {
  rando: User;
  
  constructor() {this.rando = new User("Randal Randomson","Emailme@myemailaddress.com","Just a random guy who likes doing random things. Mind your business");}
  
  getUserProfile() : User{    
    return this.rando;
  }

  setUserProfile(name: string, contactInfo: string, bio: string){
    this.rando.name = name;
    this.rando.contactInfo = contactInfo;
    this.rando.bio = bio;
  }
}
