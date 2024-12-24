import { Component, inject, Inject } from "@angular/core";
import { HomeComponent } from "../../home/home.component";
import { Router, RouterLink } from "@angular/router";
import { FormsModule, NgModel } from "@angular/forms";
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-login',
  imports: [RouterLink, HomeComponent,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

  export class LoginComponent  {
   
    loginObj:any = {
      "emailId": "",
      "password": ""
    }
    
    http = inject(HttpClient);
    
    router = inject(Router)
 
    onLogin(){
      this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",this?.loginObj)?.subscribe((res:any)=>{
        if(res?.result){
          alert('login successfully');
          localStorage.setItem('angular18token',res.data.token);
          // localStorage.setItem("angular19login",this.loginObj.user)
          this.router.navigateByUrl("dashboard2")
        }else{
          alert('check username and password')
        }
      })
    }


    
 
}
