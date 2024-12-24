import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { url } from 'inspector';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-dependent-dropdown',
  imports: [FormsModule, HomeComponent],
  templateUrl: './dependent-dropdown.component.html',
  styleUrl: './dependent-dropdown.component.css'
})
export class DependentDropdownComponent {

  userList:any[]=[];

constructor(private http:HttpClient){}

getAPI(){
  debugger
  this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res:any)=>{
    debugger
this.userList=res;
  })
}
 

// how to create variables?
courseName : string = "variable in angular";
courseDuration: number = 22;
minLength: number = 5;
type: string= "checkbox"
dynamicClass: string= 'text-danger'
property:any ="text-center"


showMessage(){
  alert('welcome guyssss')
}
changestate(event:any){

  // to print the value of that state
  const name = event.target?.['value']
  alert("state changes" + " " +  name )
}


}
