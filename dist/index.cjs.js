'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactNative = require('react-native');
var reactNativePaper = require('react-native-paper');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

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
var LicenseList = function (_a) {
    var rest = __rest(_a, []);
    return React__default['default'].createElement(reactNative.FlatList, __assign({}, rest, { keyExtractor: function (_a) {
            var key = _a.key;
            return key;
        } }));
};

var styles = reactNative.StyleSheet.create({
    avatar: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5,
    },
});
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
var LicenseListItem = function (_a) {
    var image = _a.image, username = _a.username, name = _a.name, version = _a.version, repository = _a.repository, licenses = _a.licenses, onPress = _a.onPress, style = _a.style, leftStyle = _a.leftStyle, rightStyle = _a.rightStyle, _b = _a.iconName, iconName = _b === void 0 ? "open-in-new" : _b;
    return (React__default['default'].createElement(reactNativePaper.List.Item, { title: name, description: version + " \u2022 " + licenses + " \u2022 " + username, style: __assign({ margin: 5 }, style), onPress: function () { return onPress(repository); }, left: function (props) { return (React__default['default'].createElement(reactNativePaper.Avatar.Image, __assign({}, props, { style: __assign(__assign(__assign({}, styles.avatar), props.style), leftStyle), source: { uri: image } }))); }, right: function (props) { return (React__default['default'].createElement(reactNativePaper.List.Icon, __assign({}, props, { style: __assign(__assign({ alignSelf: "center" }, props.style), rightStyle), icon: iconName }))); } }));
};

/**
 * Extracts the username from a GitHub Repo URL.
 *
 * @param url - The repo url.
 */
function extractNameFromGithubUrl(url) {
    var reg = /((https?:\/\/)?(www\.)?github\.com\/)?(@|#!\/)?([A-Za-z0-9_]{1,15})(\/([-a-z]{1,20}))?/i;
    var components = reg.exec(url);
    if (components && components.length > 5) {
        return components[5];
    }
    return null;
}

/**
 * Parses JSON license data to an array of objects.
 *
 * `resolveJsonModule` in tsconfig must be set to `true` for this to work.
 * @param jsonData The parsed JSON license data.
 */
var getLicensesFromJSON = function (jsonData) { return Object.entries(jsonData).map(function (_a) {
    var _b;
    var _key = _a[0], value = _a[1];
    var licenses = value.licenses, license = __rest(value, ["licenses"]);
    var key = _key.charAt(0) === "@" ? _key.substring(1) : _key; // Prevents bug on next line if package starts with @
    var _c = key.split("@"), name = _c[0], version = _c[1];
    // ! It is assummed that the repository field is never undefined
    var username = (_b = (license.repository == null
        ? extractNameFromGithubUrl(license.licenseUrl)
        : extractNameFromGithubUrl(license.repository))) !== null && _b !== void 0 ? _b : "";
    var userUrl;
    var image;
    if (username) {
        username = username.charAt(0).toUpperCase() + username.slice(1);
        image = "http://github.com/" + username + ".png";
        userUrl = "http://github.com/" + username;
    }
    return __assign({ key: key,
        name: name,
        image: image,
        userUrl: userUrl,
        username: username,
        licenses: licenses,
        version: version }, license);
}); };

exports.LicenseList = LicenseList;
exports.LicenseListItem = LicenseListItem;
exports.extractNameFromGithubUrl = extractNameFromGithubUrl;
exports.getLicensesFromJSON = getLicensesFromJSON;
