"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj2csv = void 0;
var os_1 = require("os");
var defaultOptions = {
    delimiter: ",",
    includeHeaders: true,
};
var parse = function (input) {
    var result = input.reduce(function (acc, curr, i) {
        Object.entries(curr).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (!acc[key])
                acc[key] = [];
            acc[key][i] = value;
        });
        return acc;
    }, {});
    return {
        result: result,
        count: input.length,
    };
};
var toCSV = function (input, options) {
    var workingInput;
    if (!input)
        return "";
    if (!Array.isArray(input))
        workingInput = [input];
    else
        workingInput = input;
    var workingOptions = __assign(__assign({}, defaultOptions), options);
    var csvString = "";
    var parsed = parse(workingInput);
    var headers = Object.keys(parsed.result);
    if (workingOptions.includeHeaders)
        csvString = headers.join(workingOptions.delimiter) + os_1.EOL;
    var _loop_1 = function (i) {
        var values = headers.map(function (x) { return parsed.result[x][i]; });
        csvString += values.join(workingOptions.delimiter) + os_1.EOL;
    };
    for (var i = 0; i < parsed.count; i++) {
        _loop_1(i);
    }
    return csvString.trim();
};
exports.obj2csv = {
    toCSV: toCSV,
};
exports.default = toCSV;
