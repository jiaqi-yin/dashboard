import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VerificationCodeService } from './verification-code.service';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent implements OnInit {
  phone = '';
  
  isGenerated = false;
  generationError = '';
  gf: FormGroup;

  verificationError = '';
  isVerified = false;
  vf: FormGroup;

  constructor(private verificationCodeService: VerificationCodeService) { }

  ngOnInit(): void {
    this.gf = new FormGroup({
      'phone_number': new FormControl(null, Validators.required)
    });
    this.vf = new FormGroup({
      'phone_number': new FormControl(null, Validators.required),
      'verification_code': new FormControl(null, Validators.required)
    });
  }

  onGenerate() {
    const payload = this.gf.value;
    this.phone = this.gf.controls['phone_number'].value;
    this.verificationCodeService.generate(payload).subscribe(
      data => {
        if (data) {
          this.isGenerated = true;
          this.generationError = '';
        }
      },
      error => {
        this.generationError = error.error.message;
      });
  }

  onVerify() {
    const payload = this.vf.value;
    this.verificationCodeService.verify(payload).subscribe(
      data => {
        if (data) {
          this.isVerified = true;
          this.verificationError = '';
        }
      },
      error => {
        this.isVerified = false;
        this.verificationError = error.error.message;
      });
  }
}
