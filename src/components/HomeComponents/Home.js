import SejaBemVindo from "./SejaBemVindo"
import QuartosSection from "./QuartosSection"
import Rota from "./Rota"
import Iframe from "./Iframe"
import SobreAPousada from "./SobreAPousada"
import Descricao from "./Descricao"

export default function Home() {
  return (
    <div>
        <main>
            <div className="banner-title">
                <h1>Pousada Secreta</h1>
                <p>A pousada reservada em Angra dos Reis</p>
            </div>
        </main>
        <SejaBemVindo/>
        <QuartosSection/>
        <Rota/>
        <Iframe/>
        <SobreAPousada/>
        <Descricao/>
    </div>
  )
}
