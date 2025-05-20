import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../app.component';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    TodosComponent
  ],
  providers: [],
 
  
})
export class AppModule { }