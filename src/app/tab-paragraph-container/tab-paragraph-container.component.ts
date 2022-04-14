import { Component, OnInit } from '@angular/core';
import { CmsService, CMSTabParagraphContainer } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tab-paragraph-container',
  templateUrl: './tab-paragraph-container.component.html',
  styleUrls: ['./tab-paragraph-container.component.scss'],
})
export class TabParagraphContainerComponent {
  constructor(
    public componentData: CmsComponentData<CMSTabParagraphContainer>,
    private cmsService: CmsService
  ) {}

  components$: Observable<any[]> = this.componentData?.data$.pipe(
    switchMap((data) =>
      combineLatest(
        data.components!.split(' ').map((component) =>
          this.cmsService.getComponentData<any>(component).pipe(
            map((tab) => {
              return {
                ...tab,
                title: `CMSTabParagraphContainer.tabs.${tab.uid}`, //Custom mapping to pass additional data to the HTML. If not required the map can be omitted.
              };
            })
          )
        )
      )
    )
  );
}
