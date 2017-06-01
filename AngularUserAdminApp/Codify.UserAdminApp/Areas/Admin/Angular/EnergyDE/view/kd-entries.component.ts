import { Component, Input } from '@angular/core';
import { EnergyDEBatch } from '../model/ede-batch';
import { KDEntry } from '../model/kd-entry';
import { MockKDEntries} from '../mock-data';

@Component({
    selector: 'kd-entries',
    templateUrl: 'UserAdminApp/Areas/Admin/Angular/EnergyDE/view/kd-entries.component.html',
})

export class KDEntriesComponent {
    @Input() edeBatch: EnergyDEBatch;
    kdEntries: KDEntry[] = MockKDEntries;
    displayDialog: boolean;
    kdEntry: KDEntry = new KDEntry();

    showDialogToAdd() {

        console.log(this.kdEntries);
        this.displayDialog = true;
    }
}