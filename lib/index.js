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
exports.objcsv = void 0;
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
    return csvString;
};
var items = [
    {
        code: "2-LPW",
        name: "Loanpal",
        sellable: true,
        gdkfh: 231,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "3-CGS",
        name: "Credigy",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "4-NRB",
        name: "NRB",
        sellable: false,
        gdkfh: 3498,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "5-CVI",
        name: "Carval",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "6-GSB",
        name: "GoldmanSachs",
        sellable: false,
        is_securitization: false,
        gdkfh: 12354,
        is_warehouse: false,
    },
    {
        code: "7-ERB",
        name: "EnerBank",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "9-MC1",
        name: "MillCity",
        sellable: false,
        is_securitization: true,
        is_warehouse: false,
    },
    {
        code: "15-MC2",
        name: "MillCity2",
        sellable: false,
        is_securitization: true,
        is_warehouse: false,
    },
    {
        code: "10-GSW",
        name: "GoldmanWarehouse",
        sellable: true,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "11-GAF",
        name: "GlobalAtlantic",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "12-STB",
        name: "Truist",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "13-PFD",
        name: "PenFed",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "14-KFC",
        name: "Kinecta",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "16-IOL",
        name: "InstallerOwned",
        sellable: true,
        ooo: 1,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "17-BAR",
        name: "Barclays",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "17-GFB",
        name: "GoodFinch1",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "18-PPL",
        name: "PeoplesBank",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "19-AMH",
        name: "AmericanHeritage",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "21-BSB",
        name: "Beneficial",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "35-PF01",
        name: "PerformanceTrust1",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "32-SL3",
        name: "LoanpalSolarTrust3",
        sellable: false,
        is_securitization: true,
        is_warehouse: false,
    },
    {
        code: "30-LMI",
        name: "LibertyMutual (BX)",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "36-SL4",
        name: "LoanpalSolarTrust4",
        sellable: false,
        is_securitization: true,
        hihi: "asdf",
        is_warehouse: false,
    },
    {
        code: "41-TCR",
        name: "TeachersFederal",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "40-GSL",
        name: "GoldmanSachsNPL",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "33-GA2",
        name: "GlobalAtlantic2",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
        lol: "huehuehue",
    },
    {
        code: "25-SL2",
        name: "LoanpalSolarTrust2",
        sellable: false,
        is_securitization: true,
        is_warehouse: false,
    },
    {
        code: "24-SL1",
        name: "LoanpalSolarTrust1",
        sellable: false,
        is_securitization: true,
        is_warehouse: false,
    },
    {
        code: "29-FGI",
        name: "Fidelity (BX)",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "39-G2N",
        name: "GoodFinch2NPL",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "23-GF2",
        name: "GoodFinch2",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "17-GF1",
        name: "GoodFinch1",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "20-MC3",
        name: "MillCity3",
        sellable: false,
        is_securitization: true,
        is_warehouse: false,
    },
    {
        code: "27-DKP",
        name: "DK",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "37-CSL",
        name: "CreditSuisse",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "31-BXB",
        name: "BlackStone2",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "34-GF3",
        name: "GoodFinch3",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "22-LPO",
        name: "LoanpalOwned",
        sellable: true,
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "28-VAR",
        name: "Varadero",
        sellable: false,
        asdf: "hehe",
        is_securitization: false,
        is_warehouse: false,
    },
    {
        code: "26-BXC",
        name: "Blackstone1",
        sellable: false,
        is_securitization: false,
        is_warehouse: false,
    },
];
console.log(toCSV(items));
exports.objcsv = {
    toCSV: toCSV,
};
exports.default = toCSV;
