import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carosel',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './carosel.component.html',
  styleUrl: './carosel.component.css',
})
export class CaroselComponent {
  images = ['assets/couple.jpg', 'assets/dog.jpg', 'assets/family.jpg'];
}
