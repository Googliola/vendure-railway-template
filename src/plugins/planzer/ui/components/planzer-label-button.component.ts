import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SharedModule, CustomDetailComponent } from '@vendure/admin-ui/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'planzer-label-button',
    template: `
        <button *ngIf="labelUrl" class="button primary" (click)="openLabel()">
            Print Planzer Label
        </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false,
})
export class PlanzerLabelButtonComponent implements CustomDetailComponent, OnInit {
    entity$: Observable<any>;
    detailForm: any;
    labelUrl: string | null = null;

    ngOnInit() {
        this.entity$.pipe(
            switchMap((order: any) => {
                if (order?.fulfillments?.length) {
                    for (const f of order.fulfillments) {
                        const url = f.customFields?.planzerLabelUrl;
                        if (url) {
                            return of(url);
                        }
                    }
                }
                return of(null);
            }),
        ).subscribe(url => {
            this.labelUrl = url;
        });
    }

    openLabel() {
        if (this.labelUrl) {
            window.open(this.labelUrl, '_blank');
        }
    }
}
