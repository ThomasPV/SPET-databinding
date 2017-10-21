import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    username:string = "";
    usernameEmpty="true";
    
setUsernameNotEmpty(){
        this.usernameEmpty="";
        console.log(this.usernameEmpty);
    }
clearUsername(){
        this.username="";
        this.usernameEmpty="true";
        
    }
    
    
}
