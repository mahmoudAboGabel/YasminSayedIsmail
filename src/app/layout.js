import "./globals.css";
import { Cairo } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cairo = Cairo({ subsets: ["arabic", "latin"], display: "swap" });

export const metadata = {
  title: "معمل العلوم | الصف الرابع الابتدائي",
  description: "منصة تعليمية تفاعلية للعلوم: دروس واختبارات قبلية ونهائية ومساعد ذكي.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} flex min-h-screen flex-col antialiased`}>
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}