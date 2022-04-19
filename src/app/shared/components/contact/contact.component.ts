import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { SweetalertService } from 'src/app/services/sweetalert.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private fb: FormBuilder, private _emailService: EmailService,private _alertService:SweetalertService) {}

  userForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required],
  });
  onSubmit() {
    if (this.userForm.valid) {
      this._emailService.sendEmail(this.userForm.value).subscribe((data) => {
        if (data.ok === true) {
          this.userForm.reset();
          this._alertService.alert('success','Message sent successfully');
        } else {
          this._alertService.alert('error','Message not sent');
        }
      });
    } else {
      this._alertService.alert('error','Form is invalid');
    }
  }
}
