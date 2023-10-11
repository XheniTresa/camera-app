import { NgModule } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { provideAuth, getAuth } from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire/compat";
import { provideFirestore, getFirestore } from "@angular/fire/firestore";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import {DashboardComponent} from "./dashboard.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from "@angular/common";


const routes: Routes = [{path:'',component: DashboardComponent

}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

@NgModule({
  declarations: [
    AppComponent,DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    
    CommonModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent,DashboardComponent]
})
export class AppModule {
}
