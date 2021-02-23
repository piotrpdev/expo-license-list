/// <reference types="react" />
import { ViewStyle } from "react-native";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { LicensesType } from "../utils/getLicensesFromJSON";
declare type Props = Omit<LicensesType, "parents" | "key"> & {
    onPress: (url: string) => void;
    leftStyle?: ViewStyle;
    rightStyle?: ViewStyle;
    style?: ViewStyle;
    iconName?: IconSource;
};
/**
 * A List.Item with license data.
 *
 * ### Example
 * ```js
 * import { openBrowserAsync } from "expo-web-browser";
 * import { LicensesListItem } from "expo-license-list"
 *
 * // ...
 * renderItem={({ item }) => (
 *   <LicensesListItem onPress={(url) => openBrowserAsync(url)} {...item} />
 * )}
 * ```
 *
 * @param onPress - The function to call when the List.Item is pressed.
 */
declare const LicenseListItem: ({ image, username, name, version, repository, licenses, onPress, style, leftStyle, rightStyle, iconName, }: Props) => JSX.Element;
export default LicenseListItem;
