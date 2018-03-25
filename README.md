# dl-data

> Download files in a structured way

## Installation

```
npm install dl-data
```

## Usage

Require the module:

```js
const downloadData = require('dl-data');
```

## API

### downloadData(baseDir, filesObject)

Returns a Promise.

* `baseDir` - an absolute path which will be used as a base directory for placing files

* `filesObject` - an object with a structure mirroring a directory structure:

```json
{
  "sample.json": "https://example.com/sample.json",
  "data": {
    "example.json": "https://example.com/example.json"
  }
}
```

## License

MIT © Alexey Komarov <alex7kom@gmail.com>
