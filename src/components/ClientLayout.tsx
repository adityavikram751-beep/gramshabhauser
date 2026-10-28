"use client";

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LanguageProvider>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flexGrow: 1 }}>{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};
