export default function Footer() {
  return (
    <div className="footer">
        <div className="contato">

            <div className="contato-text">
                <h4>Entre em contato conosco:</h4>
            </div>

            <div className="contato-all-infos">
                <div className="contato-info">
                    <img src="./assets/icons/endereco.png" alt=""/>
                    <p>Endereço Av. 123, 222 - Rio de Janeiro RJ</p>
                </div>

                <div className="contato-info">            
                    <img src="./assets/icons/telefone.png" alt=""/>
                    <a href="tel:+5521000000000"><p>Cel: 5521000000000</p></a>
                </div>

                <div className="contato-info">
                    <img src="./assets/icons/calendario.png" alt=""/>
                    <a href="https://www.booking.com/index.pt.html" rel="noreferrer" target="_blank"><p>Faça sua reserva pelo Booking.com</p></a>
                </div>
            </div>

        </div>

        <div className="copyright">
            <p>© Copyright - PousadaDev</p>
        </div>

    </div>
  )
}
