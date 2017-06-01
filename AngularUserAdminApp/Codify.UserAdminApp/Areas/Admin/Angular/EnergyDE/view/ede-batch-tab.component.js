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
var EDEBatchTabComponent = (function () {
    function EDEBatchTabComponent() {
    }
    return EDEBatchTabComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", ede_batch_1.EnergyDEBatch)
], EDEBatchTabComponent.prototype, "edeBatch", void 0);
EDEBatchTabComponent = __decorate([
    core_1.Component({
        selector: 'ede-batch-tab',
        templateUrl: 'UserAdminApp/Areas/Admin/Angular/EnergyDE/view/ede-batch-tab.component.html',
    })
], EDEBatchTabComponent);
exports.EDEBatchTabComponent = EDEBatchTabComponent;
//# sourceMappingURL=ede-batch-tab.component.js.map