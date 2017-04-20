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
var core_1 = require("@angular/core");
var trainers_service_1 = require("./trainers.service");
var DetailTrainersComponent = (function () {
    function DetailTrainersComponent(_trainer) {
        var _this = this;
        this._trainer = _trainer;
        this.selected = null;
        this.trainers = [];
        this._trainer.getAllTrainers()
            .subscribe(function (data) {
            console.log(data);
            _this.trainers = data.trainers;
        });
        ;
    }
    return DetailTrainersComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DetailTrainersComponent.prototype, "selected", void 0);
DetailTrainersComponent = __decorate([
    core_1.Component({
        selector: 'trainerdetail',
        templateUrl: './template/details.html'
    }),
    __metadata("design:paramtypes", [trainers_service_1.TrainerService])
], DetailTrainersComponent);
exports.DetailTrainersComponent = DetailTrainersComponent;
//# sourceMappingURL=details.component.js.map