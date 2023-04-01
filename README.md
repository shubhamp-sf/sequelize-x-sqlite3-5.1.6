Reproduction for https://github.com/TryGhost/node-sqlite3/issues/1694

Context: [sqlite3](https://www.npmjs.com/package/sqlite3) had a [vulnerability](https://github.com/TryGhost/node-sqlite3/security/advisories/GHSA-jqv5-7xpx-qj74) from v5.0.0 - v5.1.4, which is said to be fixed by this [commit](https://github.com/TryGhost/node-sqlite3/commit/edb1934dd222ae55632e120d8f64552d5191c781#comments) and published starting the version 5.1.6, but this version came with a breaking funtionality i.e. an array is getting stored as '[object Object]'. As can be seen in [sample.log](./sample.log) while this works in `5.1.4`.
