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
var Counter = (function () {
    function Counter() {
        this.value = 0;
        this.countChange = new core_1.EventEmitter();
    }
    Counter.prototype.increment = function () {
        this.value++;
        this.countChange.emit(this.value);
    };
    return Counter;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], Counter.prototype, "value", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Counter.prototype, "countChange", void 0);
Counter = __decorate([
    core_1.Component({
        selector: 'counter',
        template: "\n  <div>\n  <p>\n  COUNT :{{value}}\n  <button (click)=\"increment()\">Increment</button>\n  </p>\n  </div>\n  ",
    })
], Counter);
exports.Counter = Counter;
//# sourceMappingURL=count.component.js.map