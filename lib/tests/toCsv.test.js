"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require("../"));
describe("toCSV sample test", function () {
    test("toCSV on simple input", function () {
        var item = {
            a: "b",
            c: "d",
        };
        var expectedResult = "a,c\nb,d";
        var result = __1.default(item);
        expect(result).toEqual(expectedResult);
    });
});
