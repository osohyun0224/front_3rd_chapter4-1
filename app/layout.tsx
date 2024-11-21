import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: "./fonts/Pretendard-Black.ttf",
      weight: "900",
    },
    {
      path: "./fonts/Pretendard-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "./fonts/Pretendard-Bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/Pretendard-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/Pretendard-Medium.ttf",
      weight: "800",
    },
    {
      path: "./fonts/Pretendard-Bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/Pretendard-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/Pretendard-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Pretendard-Light.ttf",
      weight: "200",
    },
    {
      path: "./fonts/Pretendard-Thin.ttf",
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
