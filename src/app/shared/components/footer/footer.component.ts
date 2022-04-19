import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl:'./foooter.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent{
  dateVal  =new Date();
  intagramLink = 'https://www.instagram.com/oguzhan_cart/';
  linkedinLink = 'https://www.linkedin.com/in/o%C4%9Fuzhan-%C3%A7art-b73405199/';
  GithubLink = 'https://github.com/oguzhan18/';
}
