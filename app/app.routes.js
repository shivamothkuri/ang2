"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var book_component_1 = require("./book.component");
var pencil_component_1 = require("./pencil.component");
var stock_component_1 = require("./stock.component");
// Route Configuration
exports.routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: book_component_1.BookComponent },
    { path: 'pencils', component: pencil_component_1.PencilComponent },
    { path: 'stock', component: stock_component_1.StockComponent, outlet: 'sidebar' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map