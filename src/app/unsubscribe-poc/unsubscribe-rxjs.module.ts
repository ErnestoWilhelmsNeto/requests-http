import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsubscribeRxjsRoutingModule } from './unsubscribe-rxjs-routing.module';
import { UnsubscribePocComponent } from './unsubscribe-poc.component';
import { PocComponent } from '../poc/poc.component';
import { PocAsyncComponent } from '../poc-async/poc-async.component';
import { PocTakeUntilComponent } from '../poc-take-until/poc-take-until.component';
import { PocTakeComponent } from '../poc-take/poc-take.component';
import { PocUnsubComponent } from '../poc-unsub/poc-unsub.component';
import { PocBaseComponent } from '../poc-base/poc-base.component';

@NgModule({
  imports: [
    CommonModule,
    UnsubscribeRxjsRoutingModule
  ],
  declarations: [
    UnsubscribePocComponent,
    PocComponent,
    PocAsyncComponent,
    PocTakeUntilComponent,
    PocTakeComponent,
    PocUnsubComponent,
    PocBaseComponent
  ]
})
export class UnsubscribeRxjsModule {}
