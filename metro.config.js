const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Modify the config for SVG and 3D model support
config.transformer = {
    ...config.transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

config.resolver = {
    ...config.resolver,
    assetExts: [
        ...config.resolver.assetExts,
        // 添加 3D 模型相关的文件扩展名
        "glb",
        "gltf",
        "obj",
        "mtl",
        "fbx",
        "bin",
    ].filter((ext) => ext !== "svg"),
    sourceExts: [...config.resolver.sourceExts, "svg"],
};

module.exports = withNativeWind(config, { input: "./src/styles/global.css" });
