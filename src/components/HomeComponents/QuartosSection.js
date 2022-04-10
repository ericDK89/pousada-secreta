import { HashLink } from "react-router-hash-link"

export default function QuartosSection() {
  return (
    <div className="quartos container">
        <div className="quarto-card quarto-img-mobile">
            <img src="/assets/images/quarto-solteiro1.jpg" alt=""/>
            <HashLink to='/quarto#solteiro' className="titulo-quartos"><p>Quarto de Solteiro</p></HashLink>
        </div>

        <div className="quarto-card quarto-img-mobile">
            <img src="/assets/images/quarto-casal1.jpg" alt=""/>
            <HashLink to='/quarto#casal' className="titulo-quartos"><p>Quarto de casal</p></HashLink>
        </div>

        <div id="rota" className="quarto-card ultimo-card quarto-img-mobile">
            <img src="/assets/images/quarto-familia1.jpg" alt=""/>
            <HashLink to='/quarto#familia' className="titulo-quartos"><p>Quarto de família</p></HashLink>
        </div>
    </div>
  )
}
