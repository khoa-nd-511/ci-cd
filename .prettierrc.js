/** @type {import("prettier").Config} */
module.exports = {
    singleQuote: false,
    semi: true,
    tabWidth: 4,
    endOfLine: "auto",

    // Sorting rules
    plugins: [
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-organize-imports",
    ],
    importOrder: [
        "<BUILTIN_MODULES>",
        "<THIRD_PARTY_MODULES>",
        "",
        "^(@/components|@/lib)/(.*)$",
        "",
        "^[./]",
    ],
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderTypeScriptVersion: "5.0.0",
};
