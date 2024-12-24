import { Component, inject, Inject, OnInit, AfterViewInit } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { CrudService } from '../services/crud.service';
import { usermodel } from '../model/usermodel';
import { FormsModule } from '@angular/forms';
import { CommonModule,} from '@angular/common';


@Component({
  selector: 'app-api',
  imports: [HomeComponent,FormsModule,CommonModule],
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class ApiComponent implements OnInit {

  // use model instead of (any)
  data: usermodel[]=[];

  //inject service
listSer =inject(CrudService);

//new object to save data in form
object: usermodel= new usermodel();

//to print data directly
ngOnInit(): void{
  this.getUserList();
}

// get api
getUserList(){
  this.listSer.getUser().subscribe((res:any)=>{
this.data=res;
  })
}

//save function
save(){
  this.listSer.saveList(this.object).subscribe((res:any)=>{
if(res){
  alert(`data saved , id-${this.object.id}`);
  this.getUserList();
}else{
  alert("data not saved");
}
  })
}

onEdit(data :usermodel){
this.object = data;
}


//update
updateList(){
  this.listSer.updatelist(this.object).subscribe((res:any)=>{
    console.log(res);
    if(res){
      alert("data updated")
      this.getUserList();
        // this.closeOffcanvas(); 
    }else{
      alert("data not updated");
    }
  })
}

 
onDelete(id:number){
const confirmDelete = window.confirm("Are you sure you want to delete this item?");
if(confirmDelete){
  this.listSer.deleteList(id).subscribe((res:any)=>{
    if(res){
      alert("data updated")
      this.getUserList();
    }else{
      alert("data not updated");
    }
  })
}
}
}



