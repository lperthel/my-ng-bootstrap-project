import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { MenuDropdownComponent } from './menu-dropdown/menu-dropdown.component';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [NgbCollapseModule, RouterLink, MenuDropdownComponent],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css',
})
export class MenuBarComponent {
  isMenuCollapsed = true;
}
