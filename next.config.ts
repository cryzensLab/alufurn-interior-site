import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "picsum.photos" },
            { protocol: "https", hostname: "images.unsplash.com" },
            { protocol: "https", hostname: "flagcdn.com" },
        ],
    },
    async headers() {
        return [
            {
                // Cache all images in the public folder
                source: "/(.*).(jpg|jpeg|png|webp|avif|ico|svg)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            {
                // Cache fonts
                source: "/(.*).(woff|woff2|eot|ttf|otf)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
