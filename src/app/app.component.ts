import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SharedModule} from "./shared/shared.module";
import {GifsModule} from "./gifs/gifs.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, GifsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gifs-app';
}
