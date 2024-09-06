import {Component, Input} from '@angular/core';
import {Gif} from "../../core/interfaces/gifs.interfaces";

@Component({
  selector: 'gifs-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() gifs: Gif[] = [];
}
