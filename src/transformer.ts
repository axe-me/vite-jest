import { AsyncTransformer, TransformedSource } from "@jest/transform";
import { createServer, ViteDevServer } from "vite";
import { ProcessAsyncFunction, ViteTransformerOptions } from ".";

let vite: ViteDevServer;

/**
 * function to create a vite server when it doesn't exist, otherwise return the existing vite server
 * To do this to prevent create vite server on every file process
 */
const getVite = async (): Promise<ViteDevServer> => {
  if (!vite) {
    vite = await createServer({
      server: { middlewareMode: true }
    });
  }

  return vite;
}


export const processAsync: ProcessAsyncFunction = async (sourceText, sourcePath, options) => {
  let viteServer = await getVite()
  const result = await viteServer.transformRequest(sourcePath) as TransformedSource

  if (typeof result === 'string') {
    return result
  }

  return {
    code: result.code,
    map: result.map
  }
}

export const transformer: AsyncTransformer<ViteTransformerOptions> = {
  processAsync
};
