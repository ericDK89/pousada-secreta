import { Link } from "react-router-dom"

export default function QuartosSection() {
  return (
    <div className="quartos container">
        <div className="quarto-card quarto-img-mobile">
            <img src="/assets/images/quarto-solteiro1.jpg" alt=""/>
            <Link to='/quarto' className="titulo-quartos"><p>Quarto de Solteiro</p></Link>
        </div>

        <div className="quarto-card quarto-img-mobile">
            <img src="/assets/images/quarto-casal1.jpg" alt=""/>
            <Link to='/quarto' className="titulo-quartos"><p>Quarto de casal</p></Link>
        </div>

        <div id="rota" className="quarto-card ultimo-card quarto-img-mobile">
            <img src="/assets/images/quarto-familia1.jpg" alt=""/>
            <Link to='/quarto' className="titulo-quartos"><p>Quarto de família</p></Link>
        </div>
    </div>
  )
}
