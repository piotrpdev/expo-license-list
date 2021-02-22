import extractNameFromGithubUrl from "./extractNameFromGithubUrl";

// * Used for parsing JSON License data generated by npm-license-crawler -onlyDirectDependencies

// ! This type was just thrown togther
export type LicensesType = {
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

// ! It is not certain all these fields will be present
export type jsonData = {
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
const getLicensesFromJSON = (
  jsonData: Record<string, jsonData>
): LicensesType[] => <LicensesType[]>Object.entries(jsonData).map(
    ([_key, value]) => {
      const { licenses, ...license } = value;

      const key = _key.charAt(0) === "@" ? _key.substring(1) : _key; // Prevents bug on next line if package starts with @
      const [name, version] = key.split("@");

      // ! It is assummed that the repository field is never undefined
      let username =
        (license.repository == null
          ? extractNameFromGithubUrl(license.licenseUrl)
          : extractNameFromGithubUrl(license.repository)) ?? "";

      let userUrl;
      let image;

      if (username) {
        username = username.charAt(0).toUpperCase() + username.slice(1);
        image = `http://github.com/${username}.png`;
        userUrl = `http://github.com/${username}`;
      }

      return {
        key,
        name,
        image,
        userUrl,
        username,
        licenses, // Previously this used licenses.slice(0, 405), I don't exactly know why (Prevent overflow?) so I removed it.
        version,
        ...license,
      };
    }
  );

export default getLicensesFromJSON;
