import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 合并 className，并确保后面的类名优先级更高
 * @param inputs className 数组
 * @returns 合并后的 className 字符串
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
