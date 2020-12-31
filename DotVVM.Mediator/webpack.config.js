const path = require('path');

var createModule = (moduleName, entryFileName) => {
    return {
        entry: moduleName + "/" + entryFileName,
        output: {
            filename: 'script.js',
            path: path.resolve(__dirname, './Resources/' + moduleName)
        },
        resolve: {
            extensions: [".webpack.js", ".web.js", ".ts", ".js"]
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: "ts-loader"
                }
            ]
        }
    };
};

module.exports = [
    createModule("./Controls/Mediator", "MediatorModule.ts")
];
