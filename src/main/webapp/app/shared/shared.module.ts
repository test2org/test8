import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Test8SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Test8SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Test8SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Test8SharedModule {
  static forRoot() {
    return {
      ngModule: Test8SharedModule
    };
  }
}
