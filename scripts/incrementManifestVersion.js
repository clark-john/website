const path = require("path");
const semver = require("semver");
const fs = require("fs");

function main() {
  const manifestPath = path.resolve(process.cwd(), "manifest.json");

  const manifest = require(manifestPath);

  const release = process.argv[2];

  if (!release) {
    console.error(
      "Pass 2nd argument as release, it can be any of these following: major, minor, patch",
    );
    return 1;
  }

  const incrementedVersion = semver.inc(manifest.version, release);

  if (
    incrementedVersion === null ||
    !semver.RELEASE_TYPES.filter((x) => !x.startsWith("pre")).includes(release)
  ) {
    console.error(
      "Invalid release type, choose any of these following: major, minor, patch",
    );
    return 1;
  }

  manifest.version = incrementedVersion;

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf8");

  return 0;
}

process.exit(main());
