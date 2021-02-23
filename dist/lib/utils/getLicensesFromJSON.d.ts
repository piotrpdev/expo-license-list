export declare type LicensesType = {
    repository: string;
    licenseUrl: string;
    parents: string;
    key: string;
    name: string;
    image: string | undefined;
    userUrl: string | undefined;
    username: string | null;
    licenses: string;
    version: string;
};
export declare type jsonData = {
    licenses: string;
    repository: string;
    licenseUrl: string;
    parents: string;
};
/**
 * Parses JSON license data to an array of objects.
 *
 * `resolveJsonModule` in tsconfig must be set to `true` for this to work.
 * @param jsonData The parsed JSON license data.
 */
export declare const getLicensesFromJSON: (jsonData: Record<string, jsonData>) => LicensesType[];
