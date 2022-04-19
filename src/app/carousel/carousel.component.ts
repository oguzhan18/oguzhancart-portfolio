import {animate,AnimationBuilder,AnimationFactory,AnimationPlayer,style,} from '@angular/animations';
import {AfterViewInit,Component,ContentChildren,ElementRef,HostListener,Input,QueryList,ViewChild,ViewChildren} from '@angular/core';
import { CarouselItemDirective } from '../directivas/carousel-item.directive';

@Component({
  selector: 'carousel',
  exportAs: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  @ContentChildren(CarouselItemDirective)
  items!: QueryList<CarouselItemDirective>;

  @ViewChildren('carousel_item', { read: ElementRef })
  private itemsElements!: QueryList<ElementRef>;

  @ViewChild('carousel') private carousel!: ElementRef;
  @Input() timing = '0.5s ease-in-out';
  @Input() showControls = true;
  private player!: AnimationPlayer;
  private itemHeight!: number;
  private currentSlide = 0;
  carouselWrapperStyle = {};

  constructor(private builder: AnimationBuilder) {}

  private buildAnimation(offset: any, time: number) {
    return this.builder.build([
      animate(
        time == null ? this.timing : 0,
        style({ transform: `translateY(-${offset}px)` })
      ),
    ]);
  }
  next() {
    if (this.currentSlide + 1 == this.items.length) {
      let arr = this.items.toArray();
      let first: any = arr.shift();
      arr = arr.concat([first]);
      this.items.reset(arr);
      this.currentSlide--;
      this.transitionCarousel(0);
    }
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    this.transitionCarousel(null);
  }
  prev() {
    if (this.currentSlide == 0) {
      let arr: any = this.items.toArray();
      let last = arr.pop();
      arr = [last].concat(arr);
      this.items.reset(arr);
      this.currentSlide++;
      this.transitionCarousel(0);
    }
    this.currentSlide =
      (this.currentSlide - 1 + this.items.length) % this.items.length;
    this.transitionCarousel(null);
  }

  ngAfterViewInit() {
   setTimeout(() => {
    this.reSizeCarousel();
   }, 500);
  }

  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.reSizeCarousel();
  }
  @HostListener('window:click', ['$event'])
  onClick(event: any) {
    this.reSizeCarousel();
  }
  reSizeCarousel(): void {
    this.itemHeight = this.itemsElements
      .toArray()
      [this.currentSlide].nativeElement.getBoundingClientRect().height;
    this.carouselWrapperStyle = {
      height: `${this.itemHeight}px`,
    };
    this.transitionCarousel(null);
  }
  transitionCarousel(time: any) {
    const offset: any = this.currentSlide*this.itemHeight;
    const myAnimation: AnimationFactory = this.buildAnimation(offset, time);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }
}
