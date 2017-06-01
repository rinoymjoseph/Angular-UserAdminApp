import { Component, Input } from '@angular/core';
import { EnergyDEBatch } from '../model/ede-batch';

@Component({
    selector: 'ede-batch-tab',
    templateUrl: 'UserAdminApp/Areas/Admin/Angular/EnergyDE/view/ede-batch-tab.component.html',
})

export class EDEBatchTabComponent {
    batchName: string;
    @Input() edeBatch: EnergyDEBatch;
}