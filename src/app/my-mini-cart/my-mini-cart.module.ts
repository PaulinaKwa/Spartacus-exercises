import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, ConfigModule, UrlModule } from '@spartacus/core';
import { MyMiniCartComponent } from './my-mini-cart.component';
import { IconModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconModule,
    RouterModule,
    UrlModule,
    ConfigModule.withConfig({
      cmsComponents: {
        MiniCartComponent: {
          component: MyMiniCartComponent
        }
      }
    } as CmsConfig) 
  ]
})
export class MyMiniCartModule { }
