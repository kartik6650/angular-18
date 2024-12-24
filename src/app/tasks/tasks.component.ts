import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlobOptions } from 'buffer';
import { log } from 'console';

@Component({
  selector: 'app-tasks',
  imports: [FormsModule, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  selectedGender :string= "";

  // task 2
  isSelected:boolean=false;
isSelected1:boolean=false

  mobile:string[] = ["apple","samsung","etc"];
  laptop:string[] = ["dell", "hp", "lenovo"];
camera:string[]= ["canon","nikon"]

laptopp(isShow:boolean){
  this.isSelected=isShow; 
}
cameraa(a:boolean){
  console.log('clicked');
  
this.isSelected1=a;
}
}
