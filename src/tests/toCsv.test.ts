import csv from "../";

describe("toCSV sample test", () => {
  test("toCSV on simple input", () => {
    const item = {
      a: "b",
      c: "d",
    };

    const expectedResult = `a,c
b,d`;

    const result = csv.toCSV(item);

    expect(result).toEqual(expectedResult);
  });
});
