import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  cleanForm() {
    this.form.reset();
  }

  f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
