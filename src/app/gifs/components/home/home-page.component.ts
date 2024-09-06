import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {GifsService} from "../../services/gifs.service";
import {Gif} from "../../core/interfaces/gifs.interfaces";

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild('gifsList') gifsList!: ElementRef<HTMLDivElement>;
  @ViewChild('sidebar') sidebar!: ElementRef<HTMLDivElement>;

  constructor(private gifsService: GifsService) {
  }

  ngAfterViewInit(): void {
    this.calcListMaxHeight();
  }

  private calcListMaxHeight() {
    const sidebarHeight = this.sidebar.nativeElement.offsetHeight;
    this.gifsList.nativeElement.style.maxHeight = `${sidebarHeight}px`;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.calcListMaxHeight();
  }

  get gifs() {
    return this.gifsService.gifs;
  }
}
