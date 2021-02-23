/// <reference types="react" />
import { FlatListProps } from "react-native";
import { LicensesType } from "../utils/getLicensesFromJSON";
/**
 * Creates a list of licenses.
 *
 * ### Example
 * ```js
 * import { openBrowserAsync } from "expo-web-browser";
 * import { LicenseList, getLicensesFromJSON, LicensesListItem } from "expo-license-list"
 *
 * <LicenseList
 *   data={getLicensesFromJSON(licenses)}
 *   renderItem={({ item }) => (
 *     <LicensesListItem onPress={(url) => openBrowserAsync(url)} {...item} />
 *   )}
 * />
 * ```
 *
 * @param data - The converted JSON license data.
 * @param renderItem - What you want to render.
 */
declare const LicenseList: ({ ...rest }: FlatListProps<LicensesType>) => JSX.Element;
export default LicenseList;
