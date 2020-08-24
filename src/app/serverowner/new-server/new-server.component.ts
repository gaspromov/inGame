import { Component, OnInit } from '@angular/core';
import { ServersService } from 'src/app/shared/servers/servers.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-server',
  templateUrl: './new-server.component.html',
  styleUrls: ['./new-server.component.css']
})
export class NewServerComponent implements OnInit {
  file: File = null;
  formData: FormData;
  formAdd: FormGroup;
  disabled: boolean = false;
  selectGame: string = "0";

  constructor(
    public servers: ServersService,
  ) { }

  ngOnInit(){
    this.formAdd = new FormGroup({
      name: new FormControl({value: "", disabled: this.disabled}, [Validators.required] ),
      ip: new FormControl({value: "", disabled: this.disabled}, [Validators.required] ),
      port: new FormControl({value: "", disabled: this.disabled}, [Validators.required] ),
      game: new FormControl({value: this.selectGame, disabled: this.disabled}, [Validators.required] ),
      vk: new FormControl({value: "", disabled: this.disabled}, [Validators.required] ),
      logo: new FormControl({value: "", disabled: this.disabled}, [Validators.required])
    })

  }

  addPhoto(event){
    
    let target = event.target || event.srcElement;
    this.file = target.files.item(0);

    let confirm = document.getElementById('button-upload');

    if (this.file) {
      let formData: FormData = new FormData();
      formData.append('photo', this.file, this.file.name);
      this.formData = formData;
      confirm.innerHTML = 'Загружен';
    }else{
      confirm.innerHTML = 'Попробуйте еще раз';
    }
  }

  newServer(){
    this.formAdd.value.logo = this.formData;
    console.log(this.formAdd.value)
    this.servers.postServer(this.formAdd.value)
    .then((w: any = {}) =>{
      console.log(w);
      // document.getElementById("createServer").setAttribute = "disabled"
      document.getElementById("modal-success").style.display = "grid";
      document.getElementsByTagName('main')[0].style.opacity = "0.5";
      document.querySelector('span.message').innerHTML = String(w.message);
      
    })
    .catch(e =>{
      console.log(e);
      document.getElementById("modal-success").style.display = "grid";
      document.getElementsByTagName('main')[0].style.opacity = "0.3";
      document.querySelector('span.message').innerHTML = String(e.error.message);
    })
  }

  hidden(id){
    document.getElementById(id).style.display = "none";
    document.getElementsByTagName('main')[0].style.opacity = "1";
    this.formAdd.reset();
    this.file = null;
    this.formData = null;
    this.selectGame = '0';
    let confirm = document.getElementById('button-upload');
    confirm.innerHTML = 'Загрузить';
    // this.formAdd.value.game = '0';
  }

}
