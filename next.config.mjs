/** @type {import('next').NextConfig} */
const nextConfig = {
images:{
    dangerouslyAllowSVG: true,
    domains: ["codemobiles.com", "pospos.co", "localhost"],
    minimumCacheTTL: 0,
}

};

export default nextConfig;
