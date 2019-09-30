const dependencyTree = require('dependency-tree');
const analyseTree = require('./analyseTree');
const config = require('./resolveConfig/resolveConfig');

const tree = dependencyTree({
    filename: config.entry,
    directory: config.root
});

const errors = analyseTree(tree);
