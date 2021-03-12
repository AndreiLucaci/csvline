# modestcsv

Minimalist objects to csv string composer -> one liner

## Description

In memory minimalist CSV parser. It maps all properties from the given object to CSV columns

## Install

`npm i modestcsv`
`yarn add modestcsv`

## Usage

### toCSV

```typescript
import csv from "modestcsv";

const item = {
  a: "b",
  c: "d",
};

const expectedResult = `a,c
b,d`;

const result = csv.toCSV(item);

expect(result).toEqual(expectedResult);
```

### fromCSV

```typescript
import csv from "modestcsv";

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
```

## API

`modestcsv` - CSV parser

**Module exports**:

```typescript
const modestcsv: {
  toCSV: (input: any, options?: ObjCsvOptions | undefined) => string;
  fromCSV: (input: string, options?: ObjCsvOptions | undefined) => {};
};
```

**Signature**: `toCSV(input[, options])`

`@input`: JS `object` / `Array`.

`@output`: `string`

**Signature**: `fromCSV(input[, options])`

`@input`: JS `string`.

`@output`: `object`

### The methods allow custom options:

```typescript
type ObjCsvOptions = {
  delimiter?: string;
  includeHeaders?: boolean;
};
```

Default values are
|property| description|default|
|---|---|-----|
|`delimiter`| the delimiter between the CSV columns| `,`|
|includeHeaders| `boolean` indicating whether the column headers should be included or not| `true`|
