import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact REAL LEVELING",
  description: "Contact the REAL LEVELING team for support and business inquiries.",
  alternates: {
    canonical: "https://realleveling.com/contact",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
