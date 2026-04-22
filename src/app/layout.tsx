import type { Metadata } from "next";
import "./ui/globals.css";
import { Vazirmatn } from "next/font/google";
// import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Dawnjoo – English Classes, Soft Skills & Behavioral Economics",
  description:
    "Interactive learning for English mastery, soft skills, and behavioral insights.",
};

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className={`${vazirmatn.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

//? we can use {inter.className} instead of the primary font
//? to use just uncomment code below and import statement from fonts.tsx file

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} antialiased`}>{children}</body>
//     </html>
//   );
// }
