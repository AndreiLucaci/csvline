import obj2csv from "../";

describe("toCSV sample test", () => {
  test("toCSV on simple input", () => {
    const item = {
      a: "b",
      c: "d",
    };

    const expectedResult = `a,c
b,d`;

    const result = obj2csv(item);

    expect(result).toEqual(expectedResult);
  });
});
