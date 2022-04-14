import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticBannerComponent } from './static-banner.component';
import { provideCmsStructure } from '@spartacus/storefront';
import { CmsConfig, ConfigModule } from '@spartacus/core';

@NgModule({
  declarations: [StaticBannerComponent],
  imports: [
    CommonModule,
    // ConfigModule.withConfig({
    //   cmsComponents: {
    //     StaticBanner: {
    //       component: StaticBannerComponent,
    //     },
    //   },
    // } as CmsConfig),
  ],
  providers: [
    provideCmsStructure({
      componentId: 'StaticBanner',
      pageSlotPosition: 'StaticBannerSlot',
    }),
  ],
})
export class StaticBannerModule {}
