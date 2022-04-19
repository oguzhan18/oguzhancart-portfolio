import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselItemDirective } from './directivas/carousel-item.directive';
import { CarouselItemElementDirective } from './directivas/carousel-item-element.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { SkillsComponent } from './shared/components/skills/skills.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { ProjectsComponent } from './shared/components/projects/projects.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { DragScrollModule } from 'ngx-drag-scroll';
@NgModule({
  declarations: [
    AppComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
    CarouselComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPageScrollModule,
    DragScrollModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
