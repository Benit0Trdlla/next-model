/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    // disable: process.env.NODE_ENV === "development",
    register: true,
    scope: "/",
    sw: "service-worker.js",
    fallbacks:{
        document: "/~offline",
    },
    // publicExcludes: ["globals.css"],
    // cacheOnFrontendNav: true
});

export default withPWA({
    // Your Next.js config
});
