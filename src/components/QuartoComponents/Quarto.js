import MidSectionQuartosSolteiro from "./MidSectionQuartosSolteiro";
import BannerQuartosSolteiro from "./BannerQuartosSolteiro";
import ListaItensSolteiro from "./ListaItensSolteiro";
import MidSectionQuartosCasal from "./MidSectionQuartosCasal";
import BannerQuartosCasal from "./BannerQuartosCasal"
import ListaItensCasal from "./ListItensCasal";
import MidSectionQuartosFamilia from "./MidSectionQuartosFamilia";
import BannerQuartosFamilia from "./BannerQuartosFamilia";
import ListaItensFamilia from "./ListItensFamilia";

export default function Quarto() {
  return (
    <div>
        <main className="main-quarto"></main>
        <MidSectionQuartosSolteiro/>
        <BannerQuartosSolteiro/>
        <ListaItensSolteiro/>
        <MidSectionQuartosCasal/>
        <BannerQuartosCasal/>
        <ListaItensCasal/>
        <MidSectionQuartosFamilia/>
        <BannerQuartosFamilia/>
        <ListaItensFamilia/>
    </div>
  )
}
