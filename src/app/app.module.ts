import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './login/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestingComponent } from './invoice-builder/components/testing/testing.component';
import { InputComponent } from './invoice-builder/components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestingComponent,
    InputComponent
  ],
  entryComponents: [InputComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
