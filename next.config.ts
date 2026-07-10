import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/regio/maastricht",
        destination: "/zorgbeveiliging-maastricht",
        permanent: true,
      },
      {
        source: "/regio/heerlen",
        destination: "/zorgbeveiliging-heerlen",
        permanent: true,
      },
      {
        source: "/regio/sittard",
        destination: "/zorgbeveiliging-sittard-geleen",
        permanent: true,
      },
      {
        source: "/regio/geleen",
        destination: "/zorgbeveiliging-sittard-geleen",
        permanent: true,
      },
      {
        source: "/regio/sittard-geleen",
        destination: "/zorgbeveiliging-sittard-geleen",
        permanent: true,
      },
      {
        source: "/regio/roermond",
        destination: "/zorgbeveiliging-roermond",
        permanent: true,
      },
      {
        source: "/regio/venlo",
        destination: "/zorgbeveiliging-venlo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
