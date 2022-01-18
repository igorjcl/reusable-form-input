import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFieldModule } from './shared/input-field/input-field.module';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [BrowserModule, ReactiveFormsModule, InputFieldModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
