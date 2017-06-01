"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ede_batch_1 = require("../model/ede-batch");
var kd_entry_1 = require("../model/kd-entry");
var mock_data_1 = require("../mock-data");
var KDEntriesComponent = (function () {
    function KDEntriesComponent() {
        this.kdEntries = mock_data_1.MockKDEntries;
        this.kdEntry = new kd_entry_1.KDEntry();
    }
    KDEntriesComponent.prototype.showDialogToAdd = function () {
        console.log(this.kdEntries);
        this.displayDialog = true;
    };
    return KDEntriesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", ede_batch_1.EnergyDEBatch)
], KDEntriesComponent.prototype, "edeBatch", void 0);
KDEntriesComponent = __decorate([
    core_1.Component({
        selector: 'kd-entries',
        templateUrl: 'UserAdminApp/Areas/Admin/Angular/EnergyDE/view/kd-entries.component.html',
    })
], KDEntriesComponent);
exports.KDEntriesComponent = KDEntriesComponent;
//# sourceMappingURL=kd-entries.component.js.map