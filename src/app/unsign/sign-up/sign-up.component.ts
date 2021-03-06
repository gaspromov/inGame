import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { User } from 'src/app/shared/interfaces/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Md5} from 'ts-md5/dist/md5';
import { Router, ActivatedRoute } from '@angular/router';
import { OutputAuthService } from 'src/app/shared/outputAuth/output-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  message: string = "";
  formSignUp: FormGroup;
  user: any = {};
  disabled = false;
  password_repeat: string = "";
  typeUser: string;


  constructor(
    private auth: AuthService,
    private router: Router,
    private parent: OutputAuthService,
    private activetedRoute: ActivatedRoute,
  ){ 
    this.activetedRoute.params.subscribe(params => {
      this.typeUser = params.type;
      this.generateFormGroup();
      this.parent.emitChange(this.typeUser);

    })
  }

  

  ngOnInit() {
    this.generateFormGroup();
  }

  generateFormGroup(){
    if (this.typeUser == "advertiser"){
      this.formSignUp = new FormGroup({
        email: new FormControl({ value: '', disabled: this.disabled }, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
        password: new FormControl({ value: "", disabled: this.disabled }, [Validators.required]),
        name: new FormControl( { value: "", disabled: this.disabled }, [Validators.required]),
        number: new FormControl( { value: "", disabled: this.disabled }, [Validators.required]),
        type: new FormControl({value: "advertiser", disabled: this.disabled}),
        telegram: new FormControl({ value: "", disabled: this.disabled })
      })
    }else if (this.typeUser == "serverowner"){
      this.formSignUp = new FormGroup({
        email: new FormControl({ value: '', disabled: this.disabled }, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
        password: new FormControl({ value: "", disabled: this.disabled }, [Validators.required]),
        social: new FormControl({value: '', disabled: this.disabled}),
        name: new FormControl( { value: "", disabled: this.disabled }, [Validators.required]),
        number: new FormControl( { value: "", disabled: this.disabled }, [Validators.required]),
        type: new FormControl({value: "serverowner", disabled: this.disabled}),
        telegram: new FormControl({ value: "", disabled: this.disabled }, [Validators.required]),
        vk: new FormControl({ value: '', disabled: this.disabled })
      })      
    }else{
      console.log(this.typeUser);
      // this.router.navigate(['/sign-up/serverowner'])
    }

  }

  async signUp(){

    if (this.password_repeat != this.formSignUp.value.password){
      this.message = "Пароли не совпадают";
      return true;
    }

    if (!document.querySelector('#agreement:checked')){
      this.message = "Поставьте галочку";
      return true;
    }

    let md5 = new Md5();
    this.message = "";
    let password = this.formSignUp.value.password;

    this.formSignUp.value.password = md5.appendAsciiStr(this.formSignUp.value.password).end();
    this.formSignUp.value.number = "+7" + String(this.formSignUp.value.number);
    console.log(this.formSignUp.value)

    await this.auth.postNewUser(this.formSignUp.value)
    .then(w =>{
      this.message = "";
      console.log(w)
      this.user = w;
      this.auth.setLocalStorageUser(this.user);
      this.router.navigate(['home']);
    })
    .catch(e => {
      this.message = e.error.message;
      this.formSignUp.value.password = password;
    })
  }

  
  
  show_hide_password(){
    let input = document.getElementById('password');
    if (input.getAttribute('type') == 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
    return false;
  }


  
}
