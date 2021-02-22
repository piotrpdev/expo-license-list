// eslint-disable-next-line import/no-extraneous-dependencies
import test from "ava";

import extractNameFromGithubUrl from "./extractNameFromGithubUrl";

test("returns username in url when given a repo link", (t) => {
  t.is(
    extractNameFromGithubUrl("https://github.com/RazerMoon/expo-license-test"),
    "RazerMoon"
  );
});

test("returns null when empty string is passed", (t) => {
  t.is(extractNameFromGithubUrl(""), null);
});
