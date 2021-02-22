import React from "react";
import { FlatList, FlatListProps } from "react-native";

import { LicensesType } from "../utils/getLicensesFromJSON";

// TODO: Add dark mode support

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
const LicenseList = ({ ...rest }: FlatListProps<LicensesType>): JSX.Element => {
  return <FlatList {...rest} keyExtractor={({ key }) => key} />;
};

export default LicenseList;
