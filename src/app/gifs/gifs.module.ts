import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HomePageComponent} from "./components/home/home-page.component";
import {SearchBoxComponent} from "./components/search-box/search-box.component";
import {ListComponent} from "./components/list/list.component";
import {provideHttpClient} from "@angular/common/http";

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, ListComponent],
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  exports: [
    HomePageComponent
  ],
  providers: [provideHttpClient()]
})
export class GifsModule { }
