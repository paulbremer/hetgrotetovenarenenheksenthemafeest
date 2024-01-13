import type { Metadata } from "next";
import { Macondo } from "next/font/google";
import "./globals.css";

const macondo = Macondo({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "🧙🏼‍♂️ Heksen & Tovenaren Themafeest",
    description: "🧙🏼",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={macondo.className}>{children}</body>
        </html>
    );
}
