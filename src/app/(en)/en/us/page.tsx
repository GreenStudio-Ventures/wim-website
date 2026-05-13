import { HomePageContent, getHomeMetadata } from "@/components/site/pages/home-page";

export const metadata = getHomeMetadata("en", "us");

export default function Page() {
  return <HomePageContent locale="en" country="us" />;
}
