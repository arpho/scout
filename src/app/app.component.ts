import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { configs } from "./configs/credentials"
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: "Utenti", url: "/customers", icon: "people" },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public router: Router) { }
  ngOnInit(): void {
    const app = initializeApp(configs.firebase)
    const auth = getAuth()
    onAuthStateChanged(auth,async (user)=>{
      if(user){
        const token = await user.getIdTokenResult(true)
        console.log("user ok è",user)
        console.log("token.claims",token.claims)}
        else{
          this.router.navigate(["/users/login"])
        }
    }
    
    )

  }

}
  
