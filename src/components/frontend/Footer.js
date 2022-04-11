import React from 'react'
function Footer() {

    return (
        <footer class="footer-area">
        <div class="footer-wave-box">
            <div class="footer-wave footer-animation"></div>
        </div>
        <div class="main">
            <div class="footer">
                <div class="single-footer">
                    <h4>Sobre Nosotros</h4>
                    <p>Somos líderes en ventas </p>
                    <p>   en todo el país.</p>
                    <p> Visita nuestras redes sociales.</p>


                </div>
                <div class="single-footer">
                    <h4>Menu Principal</h4>
                    <ul>
                        <li><a href="/"><i class="fas fa-chevron-right"></i> Inicio</a></li>
                        {/* <li><a href="/about"><i class="fas fa-chevron-right"></i> Sobre Nosotros</a></li> */}
                        <li><a href="/Collections"><i class="fas fa-chevron-right"></i> Coleccion</a></li>
                        <li><a href="/cart"><i class="fas fa-chevron-right"></i> Compra</a></li>
                    </ul>
                </div>
                <div class="single-footer">
                    <h4>quick links</h4>
                    <ul>
                        <li><a href="/privacy"><i class="fas fa-chevron-right"></i> Política de privacidad</a></li>
                        <li><a href="/terms"><i class="fas fa-chevron-right"></i> Terminos & Condiciones</a></li>
                        {/* <li><a href="/disclaimer"><i class="fas fa-chevron-right"></i> disclaimer</a></li> */}
                    </ul>
                </div>
                <div class="single-footer">
                    <h4>contact us</h4>
                    <ul>
                        <li><a href=""><i class="fas fa-map-marker-alt"></i> Av. Ricardo Elías Aparicio 740, La Molina</a></li>
                        <li><a href=""><i class="fas fa-mobile-alt"></i> +88 0123 456 789</a></li>
                        <li><a href=""><i class="far fa-envelope"></i> gabrielquezada159@gmail.com</a></li>
                    </ul>
                    <div class="footer-social">
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

            </div>
            <div class="copy">
                <p>&copy; 2022, Todos los derechos reservados</p>
            </div>
        </div>
    </footer>

    );

}

export default Footer; 