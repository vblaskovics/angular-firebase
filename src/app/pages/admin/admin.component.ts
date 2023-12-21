import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AwesomeService } from 'src/app/services/awesome.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(
    private formBuilder: FormBuilder,
    private awesomeService: AwesomeService
  ) {}

  form = this.formBuilder.group({
    title: '',
    url: '',
  });

  onSubmit(): void {
    if (!this.form.value.title || !this.form.value.url) {
      return;
    }
    this.awesomeService
      .addAwesome(this.form.value.title, this.form.value.url)
      .then((doc) => {
        console.log('created awesome with id: ', doc.id);
        this.form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
}
