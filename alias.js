const moduleAlias = require("module-alias");

moduleAlias.addAliases({
  "@middleware": __dirname + "/dist/src/middleware",
  "@utils": __dirname + "/dist/src/utils",
  "@routes": __dirname + "/dist/src/routes",
  "@controller": __dirname + "/dist/src/controller",
});

// Import your main index file
require("./dist/src/index");
