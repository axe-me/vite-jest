import { TransformedSource, TransformOptions } from "@jest/transform";

export { processAsync, transformer as default } from "./transformer";

export interface ViteTransformerOptions {
}

export type ProcessAsyncFunction = (sourceText: string, sourcePath: string, options: TransformOptions<ViteTransformerOptions>) => Promise<TransformedSource>;

