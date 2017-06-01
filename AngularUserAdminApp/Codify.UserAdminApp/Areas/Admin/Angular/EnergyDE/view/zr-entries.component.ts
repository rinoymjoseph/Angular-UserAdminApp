import { Component, Input } from '@angular/core';
import { EnergyDEBatch } from '../model/ede-batch';
import { ZREntry } from '../model/zr-entry';
import { MockZREntries } from '../mock-data';

@Component({
    selector: 'zr-entries',
    templateUrl: 'UserAdminApp/Areas/Admin/Angular/EnergyDE/view/zr-entries.component.html',
})

export class ZREntriesComponent {
    batchName: string;
    zrEntries: ZREntry[] = MockZREntries;
    @Input() edeBatch: EnergyDEBatch;
}