'use strict';

const path = require('path');

const download = require('download');
const flatten = require('obj-flatten');

function downloadData(baseDir, files) {
  const fileList = flatten(files, '/');

  return Promise.all(
    Object.keys(fileList).map(filePath => {
      const url = fileList[filePath];
      const dest = path.join(baseDir, path.dirname(filePath));
      const filename = path.basename(filePath);

      return download(url, dest, { filename });
    })
  );
}

module.exports = downloadData;
