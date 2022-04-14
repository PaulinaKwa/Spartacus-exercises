import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  AppRoutingModule,
  IconModule,
  MediaModule,
  OutletPosition,
  provideOutlet,
} from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { CustomRoutingModule } from './custom-routing/custom-routing.module';
import { NewHeaderComponent } from './new-header/new-header.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { MyMiniCartComponent } from './my-mini-cart/my-mini-cart.component';
import { MyMiniCartModule } from './my-mini-cart/my-mini-cart.module';
import { RouterModule } from '@angular/router';
import { RoutingModule } from '@spartacus/storefront';
import { RoutingResolveBreadcrumbsOptions } from '@spartacus/core';
import { ROUTING_FEATURE } from '@spartacus/core';
import { UrlModule } from '@spartacus/core';
import { MyCartModule } from './my-cart/my-cart.module';
import { MyBannerModule } from './my-banner/my-banner.module';
import { MyLayoutModule } from './my-layout/my-layout.module';
import { BestsellersModule } from './bestsellers/bestsellers.module';
import { StaticBannerModule } from './static-banner/static-banner.module';
import { CustomProductSummaryComponent } from './components/custom-product-summary/custom-product-summary.component';
import { CustomProductSummaryModule } from './components/custom-product-summary/custom-product-summary.module';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomComponentModule } from './custom-component/custom-component.module';

@NgModule({
  declarations: [AppComponent, MyMiniCartComponent, FileUploadComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CustomComponentModule,
    // CustomRoutingModule,
    // MyMiniCartModule,
    RouterModule,
    IconModule,
    UrlModule,
    // MyCartModule,
    // MyBannerModule,
    MediaModule,
    // MyLayoutModule,
    // BestsellersModule,
    // StaticBannerModule,
    // CustomProductSummaryModule,
    ReactiveFormsModule,
    // B2cStorefrontModule.withConfig({

    // })
  ],
  providers: [
    //   provideOutlet({
    //   id: 'header',
    //   position: OutletPosition.REPLACE,
    //   component: NewHeaderComponent,
    // }),
    // provideOutlet({
    //   id: 'Section1',
    //   position: OutletPosition.REPLACE,
    //   component: NewHeaderComponent,
    // }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
