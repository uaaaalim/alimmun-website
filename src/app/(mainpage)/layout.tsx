"use client";

import React from "react";


export default function WebsiteLayout({children}: { children: React.ReactNode }) {
  return (
    <main>{children}</main>
  );
}