System.config({
  "paths": {
    "*": "*.js",
    "joi/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "hoek": "github:capaj/hoek-browser@2.12.0",
    "topo": "github:capaj/topo-browser@1.0.3",
    "moment": "github:moment/moment@2.9.0"
  }
});

