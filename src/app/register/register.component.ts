import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username='';
  email='';
  registerForm='';
  registerUser(item:any){
      alert("You Have Entered:"+" "+item.email+" "+"\n"+
      "You Have Entered Password:"+" "+item.password);
      this.username=item.username;
}

  constructor() { }
  ngOnInit(): void
  {

  }

}
