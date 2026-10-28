import type { Metadata, Viewport } from "next";
import { ClientLayout } from "@/components/ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "गरायें लंभुआ ✨ (@garaye_garawa) | ग्राम पंचायत गरायें, सुल्तानपुर - Official VIP Portal",
  description: "ग्राम पंचायत गरायें (विकास खंड: लंभुआ, जनपद: सुल्तानपुर, उ.प्र. - 227304) का आधिकारिक वीआईपी पोर्टल। प्राथमिक विद्यालय (स्थापना 1917), ऐतिहासिक दुर्गा पूजा, विधायक सीताराम वर्मा, सांसद रामभुआल निषाद, ग्राम प्रधान, विकास निधि व जनसुनवाई पोर्टल।",
  keywords: [
    "गरायें लंभुआ",
    "garaye_garawa",
    "गरायें",
    "Garayen",
    "Lambhua",
    "Sultanpur",
    "सुल्तानपुर",
    "ग्राम पंचायत गरायें",
    "Sitaram Verma MLA Lambhua",
    "Rambhual Nishad MP Sultanpur",
    "Primary School Garayen 1917",
    "Dhopap Dham Lambhua",
    "Durga Puja Sultanpur",
    "227304"
  ],
  authors: [{ name: "Gram Panchayat Garayen (Lambhua)" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <head>
        <link rel="icon" href="/images/seal.jpg" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
