import { Text, type TextProps, View, ViewProps } from "react-native";
import { cn } from "@/src/lib/utils";

export type ThemedTextProps = TextProps & {
    type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
    className?: string;
};

export function ThemedText({ style, type = "default", className, ...rest }: ThemedTextProps) {
    // 基础类名映射
    // const baseClassNames = {
    //     default: "text-sm leading-6 text-gray-900 dark:text-white",
    //     defaultSemiBold: "text-sm leading-6 font-semibold text-gray-900 dark:text-white",
    //     title: "text-base font-bold leading-none text-gray-900 dark:text-white",
    //     subtitle: "text-base font-bold text-gray-900 dark:text-white",
    //     link: "leading-8 text-base text-blue-500 dark:text-blue-400",
    // };

    // 使用 cn 函数合并类名，确保 className 参数的优先级更高
    const mergedClassName = cn(className);

    return <Text className={mergedClassName} style={style} {...rest} />;
}

export type ThemedViewProps = ViewProps & {
    className?: string;
};

export function ThemedView({ style, className, ...rest }: ThemedViewProps) {
    // 使用 cn 函数合并类名，确保 className 参数的优先级更高
    const mergedClassName = cn("bg-white dark:bg-gray-900", className);

    return <View className={mergedClassName} style={style} {...rest} />;
}

export default {
    Text: ThemedText,
    View: ThemedView,
};
