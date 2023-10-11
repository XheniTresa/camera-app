import { Component, OnInit} from '@angular/core';
import { Camera } from './model/camera';
import {DataService} from "./shared/data.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.html',
  styleUrls: ['app.component.css']
})
export class DashboardComponent implements OnInit{
cameraList : Camera[] = [];
cameraObj  : Camera= {};
id : string = '';
name : string = '';
model : string = '';
ip : string = '';
resolution : string = '';

    constructor( private dataService: DataService){
    }
    ngOnInit(): void {
        this.getAllCameras();

    }
    //register(){
    //    this.auth.logout();

    getAllCameras(){
        this.dataService.getAllCameras().subscribe(res => {
            this.cameraList = res.map((e: any)=>{
                const data = e.payload.doc.data();
                data.id = e.payload.doc.id;
                return data;

            })

    }, err => {
        alert('Error while fetching camera data');
      });
}
resetForm(){
    this.id = '';
    this.name = '';
    this.model = '';
    this.ip ='';
    this.resolution = '';
}

addCamera() {
    if(this.name == '' || this.id == '' || this.model == '' )
    alert('fill all input fields');


this.cameraObj.id = this.id;
this.cameraObj.name = this.name;
this.cameraObj.ip = this.ip;
this.cameraObj.model = this.model;
this.cameraObj.resolution = this.resolution;
this.dataService.addCamera(this.cameraObj);
this.resetForm();
}
updateCamera(){

}
deleteCamera(camera : Camera){
    if(window.confirm('Are you sure you want to delete'+camera.name+ '?'))
    this.dataService.deleteCamera(camera);

}


  }

