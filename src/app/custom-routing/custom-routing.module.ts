import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StaticPageComponent } from '../static-page/static-page.component';
import { CmsPageGuard } from '@spartacus/storefront';
import { FileUploadComponent } from '../file-upload/file-upload.component';

const routes: Routes = [
  /* add custom route to use together in Spartacus ecosystem */
  {
    path: 'static-page',
    component: StaticPageComponent,
    canActivate: [CmsPageGuard], // allow route to be rendered inside spartacus frame
    data: { pageLabel: 'cart' },
  },
  {
    path: 'file-upload',
    component: FileUploadComponent,
    // canActivate: [CmsPageGuard], // allow route to be rendered inside spartacus frame
    // data: { pageLabel: 'cart' },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CustomRoutingModule {}
