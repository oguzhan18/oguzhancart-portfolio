import {
  Component,ElementRef,QueryList,Renderer2,ViewChild,ViewChildren,} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChildren('asList')
  public list!: QueryList<ElementRef>;

  @ViewChild('hamburger')
  public hamburger!: ElementRef;

  @ViewChild('headerMenu')
  public headerMenu!: ElementRef;

  constructor(private render2: Renderer2) { }

  objectKeys = Object.keys;
  navlist: any = {
    home: 'Home',
    about: 'AboutMe',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'ContactMe',
  };

  change(i: number) {
    const elementList = this.list.toArray()[i].nativeElement;
    this.list.forEach((element) => {
      this.render2.removeClass(element.nativeElement, 'active');
    });
    this.render2.addClass(elementList, 'active');
    this.render2.removeClass(this.hamburger.nativeElement, 'menu-open');
    this.render2.addClass(this.headerMenu.nativeElement, 'display-none');
  }

  openMenu() {
    if (this.hamburger.nativeElement.classList.contains('menu-open')) {
      this.render2.removeClass(this.hamburger.nativeElement, 'menu-open');
      this.render2.addClass(this.headerMenu.nativeElement, 'display-none');
    } else {
      this.render2.addClass(this.hamburger.nativeElement, 'menu-open');
      this.render2.removeClass(this.headerMenu.nativeElement, 'display-none');
    }
  }
}
