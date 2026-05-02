// src/plugins/planzer/ui/planzer-ui.module.ts
import { NgModule } from '@angular/core';
import { SharedModule, registerCustomDetailComponent } from '@vendure/admin-ui/core';
import { PlanzerLabelButtonComponent } from './components/planzer-label-button.component';

@NgModule({
    imports: [SharedModule],
    declarations: [PlanzerLabelButtonComponent],
    providers: [
        registerCustomDetailComponent({
            component: PlanzerLabelButtonComponent,
            locationId: 'order-detail', // Places it in the Order Detail view
        }),
    ],
})
export class PlanzerUiModule {}