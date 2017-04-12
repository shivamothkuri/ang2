"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var CustomUrlSerializer = (function () {
    function CustomUrlSerializer() {
    }
    CustomUrlSerializer.prototype.parse = function (url) {
        // Change plus signs to encoded spaces
        url = url.replace('(', '%20');
        var dus = new router_1.DefaultUrlSerializer();
        // Use the default serializer that you can import to just do the 
        // default parsing now that you have fixed the url.
        return dus.parse(url);
    };
    CustomUrlSerializer.prototype.serialize = function (tree) {
        var dus = new router_1.DefaultUrlSerializer();
        var str = dus.serialize(tree);
        var newstr = str.replace(/\(|\)|:/g, '/');
        return newstr;
    };
    return CustomUrlSerializer;
}());
exports.CustomUrlSerializer = CustomUrlSerializer;
//# sourceMappingURL=customurl.js.map