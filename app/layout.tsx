import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: "./fonts/Pretendard-Black.woff",
      weight: "900",
    },
    {
      path: "./fonts/Pretendard-ExtraBold.woff",
      weight: "800",
    },
    {
      path: "./fonts/Pretendard-Bold.woff",
      weight: "700",
    },
    {
      path: "./fonts/Pretendard-SemiBold.woff",
      weight: "600",
    },
    {
      path: "./fonts/Pretendard-Medium.woff",
      weight: "500",
    },
    {
      path: "./fonts/Pretendard-Regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/Pretendard-Light.woff",
      weight: "300",
    },
    {
      path: "./fonts/Pretendard-ExtraLight.woff",
      weight: "200",
    },
    {
      path: "./fonts/Pretendard-Thin.woff",
      weight: "100",
    },
  ],
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Vacgom",
  description: "영유아를 위한 헬스케어 서비스, Vacgom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}