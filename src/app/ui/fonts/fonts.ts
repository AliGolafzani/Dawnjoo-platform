// import { Inter, Lusitana } from "next/font/google";

// export const inter = Inter({ subsets: ["latin"] });

// export const lusitana = Lusitana({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

import localFont from "next/font/local";

export const futuraCyrillic = localFont({
  src: [
    {
      path: "./futura-cyrillic/FuturaCyrillicLight-100.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./futura-cyrillic/FuturaCyrillicBook-300.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./futura-cyrillic/FuturaCyrillicMedium-400.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./futura-cyrillic/FuturaCyrillicDemi-500.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./futura-cyrillic/FuturaCyrillicHeavy-600.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./futura-cyrillic/FuturaCyrillicBold-700.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./futura-cyrillic/FuturaCyrillicExtraBold-900.woff",
      weight: "900",
      style: "normal",
    },
  ],
});
