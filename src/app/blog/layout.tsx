import type { Metadata } from "next";
import Header from "@/components/layout/site/Header";
import Footer from "@/components/layout/site/Footer";

export const metadata: Metadata = {
  title: "Boillerplate Fibbo",
  description: "Created by Fibbo Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
