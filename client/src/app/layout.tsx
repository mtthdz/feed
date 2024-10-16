import type { Metadata } from "next";
import "@/components/globals.css";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "feed",
  description: "hackernews client",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}