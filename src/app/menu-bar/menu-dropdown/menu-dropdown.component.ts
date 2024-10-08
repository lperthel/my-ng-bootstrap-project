import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu-dropdown',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './menu-dropdown.component.html',
  styleUrl: './menu-dropdown.component.css',
})
export class MenuDropdownComponent {}
