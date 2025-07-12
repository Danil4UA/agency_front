import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    CHAT_ID: process.env.CHAT_ID,
  },
};

export default nextConfig;
