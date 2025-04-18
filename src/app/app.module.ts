import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Make sure FormsModule is imported

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- Add FormsModule here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
