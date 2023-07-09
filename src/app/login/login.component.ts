import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username='';
  loginForm='';
  constructor() { }
  loginUser(item:any)
  {
    this.username=item.userName;
    console.warn(item);
    alert("You Have Entered:"+" "+item.userName);
  }
  ngOnInit() {
    
  }

}
