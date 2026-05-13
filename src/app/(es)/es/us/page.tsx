import { HomePageContent, getHomeMetadata } from "@/components/site/pages/home-page";

export const metadata = getHomeMetadata("es", "us");

export default function Page() {
  return <HomePageContent locale="es" country="us" />;
}
