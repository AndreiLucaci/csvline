import csv from "../";

describe("fromCSV sample input", () => {
  test("fromCSV on simple input", () => {
    const input = `a,c
b,d`;

    const expectedResult = [
      {
        a: "b",
        c: "d",
      },
    ];

    const result = csv.fromCSV(input);

    expect(result).toEqual(expectedResult);
  });
});
