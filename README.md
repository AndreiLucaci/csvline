# csvline

Minimalist objects to csv string composer -> one liner

## Description

In memory minimalist CSV parser. It maps all properties from the given object to CSV columns

## Install

`npm i csvline`
`yarn add csvline`

## Usage

```typescript
import csvline from "csvline";

const item = {
  a: "b",
  c: "d",
};

const expectedResult = `a,c
b,d`;

const result = csvline(item);

expect(result).toEqual(expectedResult);
```

## API

`csvline` - CSV parser

**Signature**: `csvline(input[, options])`

`@input`: JS `object` / `Array`.

`@output`: `string`

The method allow custom options:

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
