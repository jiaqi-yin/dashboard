import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UrlShortenerService } from './url-shortener.service';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.scss']
})
export class UrlShortenerComponent implements OnInit {
  shortlink: string;
  form: FormGroup;

  constructor(private urlShortenerService: UrlShortenerService) { }

  ngOnInit(): void {
    const reg = '(https?://)+([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.form = new FormGroup({
      'url': new FormControl(null, [Validators.required, Validators.pattern(reg)])
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    const payload = this.form.value;
    this.urlShortenerService.shorten(payload).subscribe(response => {
      this.shortlink = response.shortlink;
    });
  }

  onClear() {
    this.form.reset();
  }

}
