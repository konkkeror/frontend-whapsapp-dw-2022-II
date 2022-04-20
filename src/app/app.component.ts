import { Component } from '@angular/core';
import { faCake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-whapsapp-dw2022-II';
  faCake = faCake;
}
