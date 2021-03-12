"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require("../"));
describe("fromCSV sample input", function () {
    test("fromCSV on simple input", function () {
        var input = "a,c\nb,d";
        var expectedResult = [
            {
                a: "b",
                c: "d",
            },
        ];
        var result = __1.default.fromCSV(input);
        expect(result).toEqual(expectedResult);
    });
});
