export declare type ObjCsvOptions = {
    delimiter?: string;
    includeHeaders?: boolean;
};
declare const toCSV: (input: any, options?: ObjCsvOptions | undefined) => string;
export declare const objcsv: {
    toCSV: (input: any, options?: ObjCsvOptions | undefined) => string;
};
export default toCSV;
