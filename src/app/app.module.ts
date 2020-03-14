import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
// import { SignUpComponent } from './Components/sign-up/sign-up.component';
// import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    // SignUpComponent,
    // LoginComponent
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
