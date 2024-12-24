import { Component, inject } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { usermodel } from '../model/usermodel';
import { HomeComponent } from "../home/home.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [HomeComponent,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  
  // new object for reactive form
  reactiveformobj: FormGroup = new FormGroup({

    userId : new FormControl(0),
    id:new FormControl(0),
    title:new FormControl(""),
    body:new FormControl("")
  });  
  
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
onSave(){
  const formvalue = this.reactiveformobj.value;
  this.listSer.saveList(formvalue).subscribe((res:any)=>{
if(res){
  alert(`data saved`);
  this.getUserList();
}else{
  alert("data not saved");
}
  })
}

onEdit(data :usermodel){
// this.object = data;
 
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
