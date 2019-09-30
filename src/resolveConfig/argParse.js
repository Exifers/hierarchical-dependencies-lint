const ArgumentParser = require('argparse').ArgumentParser;
const args = require('yargs').argv;

module.exports = {
    root: args.root,
    entry: args.entry
};
