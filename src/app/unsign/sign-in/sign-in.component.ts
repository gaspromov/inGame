import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { OutputAuthService } from 'src/app/shared/outputAuth/output-auth.service';
import { User } from 'src/app/shared/interfaces/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Md5} from 'ts-md5/dist/md5';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user;
  formSignIn: FormGroup;
  disabled = false;
  message: string = '';
  typeUser: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private parent: OutputAuthService
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.setUserType(params);
    }) 
  }

  ngOnInit(): void {
    this.formSignIn = new FormGroup({
      email: new FormControl({value: '', disabled: this.disabled}, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl({ value: '', disabled: this.disabled }, [Validators.required])
    })
    // document.getElementById('name').innerHTML += "PPP"
  }

  
  setUserType(params: any = {}){
    this.typeUser = params.type;
    this.parent.emitChange(this.typeUser);
  }

  async logIn(){
    let md5 = new Md5();
    this.message = "";
    let password = this.formSignIn.value.password;

    this.formSignIn.value.password = md5.appendAsciiStr(this.formSignIn.value.password).end();

    await this.auth.getUser(this.formSignIn.value)
    .then(w =>{
      this.message = "";
      this.user = w;
      this.auth.setLocalStorageUser(this.user);
      this.router.navigate(['home']);
    })
    .catch(e =>{
      this.message = e.error.message;
      this.formSignIn.value.password = password;
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
