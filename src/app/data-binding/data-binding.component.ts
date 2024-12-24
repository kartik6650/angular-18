import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-data-binding',
  imports: [HomeComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  onMouseEnter(){
    console.log('mouse enter')
  }
  onMouseLeave(){
    console.log('mouse leave')
  }
}
