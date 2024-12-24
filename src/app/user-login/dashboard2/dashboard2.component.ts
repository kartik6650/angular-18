import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard2',
  imports: [JsonPipe],
  templateUrl: './dashboard2.component.html',
  styleUrl: './dashboard2.component.css'
})
export class Dashboard2Component implements OnInit{

storeData: any[]= []


ngOnInit(): void {
  this.getapi()
}

http = inject(HttpClient);

getapi(){
  
  
  this.http.get('https://freeapi.miniprojectideas.com/api/User/GetAllUsers').subscribe((res:any)=>{
this.storeData=res.data
  })
}
}
