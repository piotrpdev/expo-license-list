# expo-license-list

A group of components used to display the licenses your expo app is using

## Usage

Generate the license JSON data using the following script (uses [`npm-license-crawler`](https://www.npmjs.com/package/npm-license-crawler)):

```bash
npm-license-crawler -onlyDirectDependencies -json ./assets/licenses.json
```

Then use like this:

```js
import { openBrowserAsync } from "expo-web-browser";
import { LicenseList, getLicensesFromJSON, LicensesListItem } from "expo-license-list"

<LicenseList
  data={getLicensesFromJSON(licenses)}
  renderItem={({ item }) => (
    <LicensesListItem onPress={(url) => openBrowserAsync(url)} {...item} />
  )}
/>
```

## ToDo

- [ ] Add tests.
