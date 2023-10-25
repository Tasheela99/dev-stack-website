import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import { HeaderDirective } from './header.directive';
import { NavbarDirective } from './navbar.directive';
import { HeaderComponent } from './components/header/header.component';
import { AnimationDirective } from './animation.directive';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    HeaderDirective,
    NavbarDirective,
    HeaderComponent,
    AnimationDirective
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CarouselModule
  ]
})
export class DashboardModule { }
