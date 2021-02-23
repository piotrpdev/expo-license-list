import test from 'ava';

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

// eslint-disable-next-line import/no-extraneous-dependencies
test("returns username in url when given a repo link", function (t) {
    t.is(extractNameFromGithubUrl("https://github.com/RazerMoon/expo-license-test"), "RazerMoon");
});
test("returns null when empty string is passed", function (t) {
    t.is(extractNameFromGithubUrl(""), null);
});
