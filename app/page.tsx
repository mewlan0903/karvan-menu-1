import menuData from "@/data/menu.json";
import type { Menu } from "@/types/menu";
import MenuView from "@/components/MenuView";
import Welcome from "@/components/Welcome";
import BackgroundParticles from "@/components/BackgroundParticles";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const menu = menuData as Menu;

export default function Home() {
  return (
    <main className="flex-1">
      <Welcome />
      <BackgroundParticles />
      <ScrollProgress />
      <MenuView menu={menu} />
      <BackToTop />
    </main>
  );
}
