"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var pencil_component_1 = require("./pencil.component");
var book_component_1 = require("./book.component");
var stock_component_1 = require("./stock.component");
var app_routes_1 = require("./app.routes");
var router_1 = require("@angular/router");
var customurl_1 = require("./customurl");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        providers: [
            { provide: router_1.UrlSerializer, useClass: customurl_1.CustomUrlSerializer }
        ],
        imports: [platform_browser_1.BrowserModule, app_routes_1.routing],
        declarations: [app_component_1.AppComponent, pencil_component_1.PencilComponent, book_component_1.BookComponent, stock_component_1.StockComponent],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map