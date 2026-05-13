import type { Metadata } from "next";

import { RootLayoutShell, sharedMetadata } from "@/components/site/root-layout-shell";

import "../globals.css";

export const metadata: Metadata = sharedMetadata;

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootLayoutShell lang="en">{children}</RootLayoutShell>;
}
