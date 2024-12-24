import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from "../home/home.component";

@Component({ 
  selector: 'app-contol-flow',
  imports: [FormsModule, HomeComponent],
  templateUrl: './contol-flow.component.html',
  styleUrl: './contol-flow.component.css'
})
export class ContolFlowComponent {


  isDivVisisble:boolean=true

  isDivHide(isshow:boolean){
this.isDivVisisble=isshow;
  }

  isDiv2Visible: string = "no"
dayname: string ="";


// for loop
cityList: string[] = ["roorkee","haridwar","dehradun","manali","go"]
}
