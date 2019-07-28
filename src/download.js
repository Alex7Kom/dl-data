'use strict';

const path = require('path');
const fs = require('fs');
const util = require('util');

const got = require('got');
const mkdirp = require('mkdirp');
const flatten = require('obj-flatten');

const writeFile = util.promisify(fs.writeFile);
const mkdir = util.promisify(mkdirp);

function downloadData(baseDir, files, options) {
  const client = got.extend(options);
  const fileList = flatten(files, '/');

  return Promise.all(
    Object.keys(fileList).map(async filePath => {
      const url = fileList[filePath];
      const dest = path.join(baseDir, filePath);

      await mkdir(path.dirname(dest));

      const response = await client(url, options);

      await writeFile(dest, response.body);
    })
  );
}

module.exports = downloadData;
