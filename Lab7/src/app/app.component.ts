import { Component } from '@angular/core';
import { UserRequest } from './user-request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab7';
  public userData: UserRequest = new UserRequest();

  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  phoneRegex = /^(\+380)(50|66|67|98|97|96|68|39|63|93|99|95){1}[0-9]{7}$/;

  nameErr = '';
  loginErr = '';
  sexErr = '';
  bdErr = '';
  emailErr = '';
  phoneErr = '';
  animalErr = '';

  checkData()
  {
    this.nameErr = '';
    this.loginErr = '';
    this.sexErr = '';
    this.bdErr = '';
    this.emailErr = '';
    this.phoneErr = '';
    this.animalErr ='';
    let sw = true;

    if(this.userData.email==='')
    {

      this.emailErr = "Заполните";
      sw=false;

    }
    else if(!this.emailRegex.test(this.userData.email))
    {

      this.emailErr = "Fail";
      sw=false;

    }

  

    if(this.userData.phone==='')
    {

      this.phoneErr = "Заполните";
      sw=false;

    }
    else if(!this.phoneRegex.test(this.userData.phone))
    {

      this.phoneErr = "Fail";
      sw=false;

    }
    
    if(this.userData.name==='')
    {

      this.nameErr = "Заполните";
      sw=false;

    }

    if(this.userData.sex==='')
    {

      this.sexErr = "Выберите";
      sw=false;

    }



    if(this.userData.login==='')
    {

      this.loginErr = "Заполните";
      sw=false;

    }
    
    if(sw)
    {
      this.userData = new UserRequest();
      alert("Ошибка.");
    }
    if(this.userData.animals==='')
    {

      this.animalErr = "Выберите";
      sw=false;

    }
  }

}
