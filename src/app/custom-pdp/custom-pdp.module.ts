import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductIntroComponent } from './custom-product-intro/custom-product-intro.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [
    CustomProductIntroComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents
      
    } as CmsConfig)
  ]
})
export class CustomPdpModule { }
