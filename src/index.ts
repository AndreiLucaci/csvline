import { EOL } from "os";

export type ObjCsvOptions = {
  delimiter?: string;
  includeHeaders?: boolean;
  eol?: string;
};

const defaultOptions: ObjCsvOptions = {
  delimiter: ",",
  includeHeaders: true,
  eol: EOL,
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
    csvString = headers.join(workingOptions.delimiter) + workingOptions.eol;

  for (let i = 0; i < parsed.count; i++) {
    const values = headers.map((x) => parsed.result[x][i]);
    csvString += values.join(workingOptions.delimiter) + workingOptions.eol;
  }

  return csvString.trim();
};

const fromCSV = (input: string, options?: ObjCsvOptions) => {
  if (!input) return {};
  input = input.trim();

  const workingOptions: ObjCsvOptions = {
    ...defaultOptions,
    ...options,
  };

  const lines = input.split(workingOptions.eol!);
  if (!lines?.length) return {};

  const headers = workingOptions.includeHeaders
    ? lines.shift()?.split(workingOptions.delimiter!)
    : lines[0].split(workingOptions.delimiter!).map((_, i) => i);
  let line;
  const result: any[] = [];
  do {
    line = lines.shift();

    if (line && headers) {
      const values = line.split(workingOptions?.delimiter!);

      const obj: { [key: string]: any } = {};
      for (let i = 0; i < values.length; i++) {
        obj[headers[i]] = values[i];
      }

      result.push(obj);
    }
  } while (line);

  return result;
};

export const modestcsv = {
  toCSV,
  fromCSV,
};

export { toCSV, fromCSV };

export default modestcsv;
