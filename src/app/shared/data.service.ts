import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Camera } from '../model/camera';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore) { }

//add camera
addCamera(camera : Camera) {

  camera.id = this.afs.createId();
  return this.afs.collection('/Cameras').add(camera);

}
//getallcameras
getAllCameras(){
  return this.afs.collection('/Cameras').snapshotChanges();
}

//delete
deleteCamera(camera : Camera) {
  return this.afs.doc('/Cameras/'+camera.id).delete();
}

//update 
updateCamera(camera : Camera){

  this.deleteCamera(camera);
  this.addCamera(camera);
}}
