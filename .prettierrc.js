// .prettierrc.js
module.exports = {
    semi: true, // 使用分号, 默认true
    singleQuote: false, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
    trailingComma: "all", // 行尾逗号,默认none,可选 none|es5|all
    printWidth: 200,
    tabWidth: 4, // tab缩进大小,默认为2
    useTabs: false, // 使用tab缩进，默认false
    quoteProps: "consistent",
    bracketSpacing: true,
    arrowParens: "always",
    htmlWhitespaceSensitivity: "ignore",
    vueIndentScriptAndStyle: true,
};
