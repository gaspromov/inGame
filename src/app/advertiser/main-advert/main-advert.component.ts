import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdversService } from 'src/app/shared/advers/advers.service';

@Component({
  selector: 'app-main-advert',
  templateUrl: './main-advert.component.html',
  styleUrls: ['./main-advert.component.css']
})
export class MainAdvertComponent implements OnInit {
  formAdd: FormGroup;
  disabled = false;

  constructor(
    public http: AdversService,
  ) { }

  ngOnInit(){
    this.formAdd = new FormGroup({
      name: new FormControl({value: '', disabled: this.disabled}),
      promoURL: new FormControl({value: '', disabled: this.disabled}),
      CPA: new FormControl({value: '', disabled: this.disabled}),
      originalURL: new FormControl({value: '', disabled: this.disabled}),
    })
  }

  async postCPC(){
    await this.http.postNewCPC(this.formAdd.value)
    .then(w => {
      console.log(w);
    })
    .catch(e => {
      console.log(e);
    })
  }

}
