/**
 * Extracts the username from a GitHub Repo URL.
 *
 * @param url - The repo url.
 */
export default function extractNameFromGithubUrl(url: string): string | null {
  const reg = /((https?:\/\/)?(www\.)?github\.com\/)?(@|#!\/)?([A-Za-z0-9_]{1,15})(\/([-a-z]{1,20}))?/i;
  const components = reg.exec(url);

  if (components && components.length > 5) {
    return components[5];
  }

  return null;
}
