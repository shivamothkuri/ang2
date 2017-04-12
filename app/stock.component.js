"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var StockComponent = (function () {
    function StockComponent() {
        this.stockValue = null;
        this.imgUrl = "http://lorempixel.com/400/800/";
    }
    StockComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer = Rx_1.Observable.timer(2000, 1000);
        timer.subscribe(function (t) { return _this.stockValue = t; });
    };
    return StockComponent;
}());
StockComponent = __decorate([
    core_1.Component({
        template: "<h1>Today's stock value is : {{stockValue}}</h1>\n  <img src='{{imgUrl}}' />"
    })
], StockComponent);
exports.StockComponent = StockComponent;
//# sourceMappingURL=stock.component.js.map