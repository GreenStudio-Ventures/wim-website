import { MarketLayoutShell } from "@/components/site/pages/market-layout";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <MarketLayoutShell locale="en" country="us">
      {children}
    </MarketLayoutShell>
  );
}
