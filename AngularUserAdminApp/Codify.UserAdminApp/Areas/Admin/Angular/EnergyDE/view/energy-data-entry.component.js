"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ede_batch_1 = require("../model/ede-batch");
var EnergyDataEntryComponent = (function () {
    function EnergyDataEntryComponent() {
        this.energyDEBatches = new Array();
    }
    EnergyDataEntryComponent.prototype.addBatch = function (name) {
        console.log(name);
        if (!name) {
            return;
        }
        var edeBatches = this.energyDEBatches.slice();
        var edeBatch = new ede_batch_1.EnergyDEBatch();
        edeBatch.BatchName = name;
        edeBatches.push(edeBatch);
        this.energyDEBatches = edeBatches;
        console.log(edeBatches);
    };
    return EnergyDataEntryComponent;
}());
EnergyDataEntryComponent = __decorate([
    core_1.Component({
        selector: 'energy-de',
        templateUrl: 'UserAdminApp/Areas/Admin/Angular/EnergyDE/view/energy-data-entry.component.html',
    })
], EnergyDataEntryComponent);
exports.EnergyDataEntryComponent = EnergyDataEntryComponent;
//# sourceMappingURL=energy-data-entry.component.js.map