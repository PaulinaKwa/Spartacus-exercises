import { Component } from '@angular/core';
import { OutletPosition } from '@spartacus/storefront';

export enum ICON_TYPE {
  CART = 'cart',
  SEARCH = 'search',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spartacus-store';

OutletPosition = OutletPosition
 
}
