import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaroselComponent } from './carosel/carosel.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CaroselComponent, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
