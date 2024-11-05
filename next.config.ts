import { NextConfig } from "next";

const config: NextConfig = {
    // TODO: Ignore TypeScript errors during builds temporarily
    typescript: {
        ignoreBuildErrors: true,
    },
    // Ignore ESBuild during builds because Biome is not configurable with Next.js
    // TODO: Support for alternative linters https://github.com/vercel/next.js/discussions/59347
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default config;
