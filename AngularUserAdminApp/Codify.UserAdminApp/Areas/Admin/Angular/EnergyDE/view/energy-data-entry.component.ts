import { Component } from '@angular/core';
import { EnergyDEBatch } from '../model/ede-batch';

@Component({
    selector: 'energy-de',
    templateUrl: 'UserAdminApp/Areas/Admin/Angular/EnergyDE/view/energy-data-entry.component.html',
})

export class EnergyDataEntryComponent {
    batchName: string;
    energyDEBatches: EnergyDEBatch[] = new Array<EnergyDEBatch>();

    addBatch(name: string) {
        console.log(name);
        if (!name) { return; }
        let edeBatches = [...this.energyDEBatches];
        let edeBatch = new EnergyDEBatch();
        edeBatch.BatchName = name;
        edeBatches.push(edeBatch);
        this.energyDEBatches = edeBatches;
        console.log(edeBatches);
        
    }

}