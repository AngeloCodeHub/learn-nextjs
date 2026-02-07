import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */

  // output: 'export',
  // typescript: {
  //   ignoreBuildErrors: true,
  //   tsconfigPath: 'tsconfig.json',
  // },
  reactStrictMode: true,

  // 修正自動偵測家目錄的 lockfile 問題
  outputFileTracingRoot: path.join(__dirname)
};

export default nextConfig;
