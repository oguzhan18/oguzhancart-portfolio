import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent  {

  skillsList: any = ['Skills', 'Experience', 'Education'];
  items = [
    { title: 'Front-end', html: '../assets/images/html_logo.png', css: '../assets/images/css_logo.png', js: '../assets/images/js_logo.png', typescript: '../assets/images/ts_logo.png', angular:  '../assets/images/angular_logo.png', vue: '../assets/images/vue_logo.png' },
    { title: 'Back-end', java: '../assets/images/java_logo.png', laravel: '../assets/images/laravel_logo.png', python: '../assets/images/python_logo.png', node: '../assets/images/node_logo.png', mysql: '../assets/images/mysql_logo.png', firebase: '../assets/images/firebase_logo.png' },
    { title: 'Other-skills', bootstrap: '../assets/images/bootstrap_logo.png',docker:'../assets/images/docker_logo.png',linux:'../assets/images/linux_logo.png', git: '../assets/images/git_logo.png',ionic:'../assets/images/ionic_logo.png',ngrx:'../assets/images/ngrx_logo.svg',sass:'../assets/images/sass_logo.png', adobexd:'../assets/images/adobexd_logo.png' },
  ];

  @ViewChild('skillContent')
  public skillContent!: ElementRef;

  @ViewChildren('listItem')
  public listItem!: QueryList<ElementRef<HTMLLIElement>>;

  constructor(private render2: Renderer2) {}

  ngAfterViewInit() {
    this.listItem.toArray()[0].nativeElement.classList.add('active');
  }

  unsetAllOptions(i: number) {
    const skillList = this.listItem.toArray()[i].nativeElement;
    this.listItem.forEach((element) => {
      this.render2.removeClass(element.nativeElement, 'active');
    });
    this.render2.addClass(skillList, 'active');

    let posicion = i;
    let operacion = posicion * -(100 / 3);
    this.render2.setStyle(
      this.skillContent.nativeElement,
      'transform',
      `translateX(${operacion}%)`
    );
  }

}
