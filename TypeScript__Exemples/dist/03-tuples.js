"use strict";
// Tuple
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var point2D = [3, 10];
point2D[2] = 5;
var point3D = __spreadArray(__spreadArray([], point2D, true), [5], false);
point3D.push(8);
console.log(point3D[3]);
exports["default"] = {};
