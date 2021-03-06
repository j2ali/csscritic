// PhantomJS regression runner for csscritic
// This version references all dependencies and can be used to test against the latest changes.

phantom.injectJs("node_modules/imagediff/imagediff.js");
phantom.injectJs("node_modules/jssha/src/sha.js");
phantom.injectJs("node_modules/rasterizehtml/dist/rasterizeHTML.allinone.js");
phantom.injectJs("src/cli/phantomjsbind.js");
phantom.injectJs("src/utils.js");
phantom.injectJs("src/cli/phantomjsrenderer.js");
phantom.injectJs("src/cli/signoffreporter.js");
phantom.injectJs("src/cli/terminalreporter.js");
phantom.injectJs("src/cli/htmlfilereporter.js");
phantom.injectJs("src/cli/filestorage.js");
phantom.injectJs("src/csscritic.js");
phantom.injectJs("src/cli/phantomjs_runner.js");
