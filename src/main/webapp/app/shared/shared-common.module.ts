import { NgModule } from '@angular/core';

import { Test8SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [Test8SharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [Test8SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Test8SharedCommonModule {}
