export declare type ObjCsvOptions = {
    delimiter?: string;
    includeHeaders?: boolean;
    eol?: string;
};
declare const toCSV: (input: any, options?: ObjCsvOptions | undefined) => string;
declare const fromCSV: (input: string, options?: ObjCsvOptions | undefined) => {};
export declare const modestcsv: {
    toCSV: (input: any, options?: ObjCsvOptions | undefined) => string;
    fromCSV: (input: string, options?: ObjCsvOptions | undefined) => {};
};
export { toCSV, fromCSV };
export default modestcsv;
