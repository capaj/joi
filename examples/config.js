System.config({
  "paths": {
    "*": "*.js",
    "joi/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "hoek-browser": "github:capaj/hoek-browser@2.12.0"
  }
});

