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
var trainers_service_1 = require("./trainers.service");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var ListTrainersComponent = (function () {
    function ListTrainersComponent(_trainer) {
        var _this = this;
        this._trainer = _trainer;
        this.trainers = [];
        this._trainer.getAllTrainers()
            .subscribe(function (data) {
            console.log(data);
            _this.trainers = data.trainers;
        });
        // this.selectedItem = 0;
        // this.trainers = [];
        // this._http.get('./data/trainers.json')
        // .map((res: any) => {
        //   console.log(res.json());
        //   let data = res.json();
        //   this.trainers = data.trainers;
        // })
        // .subscribe(
        //   (data: any) => {
        //     console.log(data);
        //   });
        // }
    }
    ListTrainersComponent.prototype.show = function (i) {
        this.selectedItem = i;
    };
    return ListTrainersComponent;
}());
ListTrainersComponent = __decorate([
    core_1.Component({
        selector: 'list-trainer',
        template: "\n  <h1>List Trainner</h1>\n  <ul>\n  <li *ngFor=\"let item of trainers; let i = index\">{{item.fullname}}\n  <button (click)=\"show(i)\">Show</button>\n  </li>\n</ul>\n<trainerdetail [selected]=\"selectedItem\"></trainerdetail>\n \n   ",
    }),
    __metadata("design:paramtypes", [trainers_service_1.TrainerService])
], ListTrainersComponent);
exports.ListTrainersComponent = ListTrainersComponent;
//# sourceMappingURL=trainers.component.js.map