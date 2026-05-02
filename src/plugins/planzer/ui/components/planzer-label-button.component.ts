// src/plugins/planzer/ui/components/planzer-label-button.component.ts
import { Component } from '@angular/core';
import { CustomDetailComponent, Order } from '@vendure/admin-ui/core';

@Component({
    template: `
        <div *ngIf="order?.fulfillments?.length" class="planzer-actions">
            <button class="btn btn-secondary" 
                    *ngFor="let f of order.fulfillments"
                    (click)="printLabel(f.customFields?.planzerLabelUrl)"
                    [disabled]="!f.customFields?.planzerLabelUrl">
                <clr-icon shape="printer"></clr-icon>
                Print Planzer Label ({{ f.trackingCode }})
            </button>
        </div>
    `,
})
export class PlanzerLabelButtonComponent implements CustomDetailComponent {
    entity$: any; // Provided by Vendure
    order: Order;

    ngOnInit() {
        this.entity$.subscribe((order: Order) => {
            this.order = order;
        });
    }

    printLabel(url: string) {
        if (url) window.open(url, '_blank');
    }
}