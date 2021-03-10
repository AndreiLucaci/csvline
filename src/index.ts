import { EOL } from "os";

export type ObjCsvOptions = {
  delimiter?: string;
  includeHeaders?: boolean;
};

const defaultOptions: ObjCsvOptions = {
  delimiter: ",",
  includeHeaders: true,
};

const parse = (
  input: any[]
): { result: { [key: string]: any[] }; count: number } => {
  const result = input.reduce((acc: any, curr: any, i) => {
    Object.entries<any>(curr).forEach(([key, value]) => {
      if (!acc[key]) acc[key] = [];
      acc[key][i] = value;
    });

    return acc;
  }, {});

  return {
    result,
    count: input.length,
  };
};

const toCSV = (input: any, options?: ObjCsvOptions): string => {
  let workingInput: any[];
  if (!input) return "";
  if (!Array.isArray(input)) workingInput = [input];
  else workingInput = input;

  const workingOptions: ObjCsvOptions = {
    ...defaultOptions,
    ...options,
  };

  let csvString = "";
  const parsed = parse(workingInput);
  const headers = Object.keys(parsed.result);

  if (workingOptions.includeHeaders)
    csvString = headers.join(workingOptions.delimiter) + EOL;

  for (let i = 0; i < parsed.count; i++) {
    const values = headers.map((x) => parsed.result[x][i]);
    csvString += values.join(workingOptions.delimiter) + EOL;
  }

  return csvString.trim();
};

export const obj2csv = {
  toCSV,
};

export default toCSV;
