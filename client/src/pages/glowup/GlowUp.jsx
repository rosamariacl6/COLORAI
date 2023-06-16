import React from 'react'
import { Carousel, Card, Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap'
import { NavbarGlow } from '../../components/navbarglow/NavbarGlow'
import { BotonRosa } from '../../components/botonrosa/BotonRosa'
import { BotonMoradoGlow } from '../../components/botonmoradoglow/BotonMoradoGlow'
import { InputForm } from '../../components/inputform/InputForm'
import "./glowup.scss"
export const GlowUp = () => {
  return (
    <Row className='fondoglow'>
        <NavbarGlow/>
    {/* ----------------- FONDO PRINCIPAL ----------------- */}
        <Row className='floresverdes m-auto d-flex align-items-center text-center'>
            <Col className='colglow align-items-center'>
                <h1 className="tituloglow">GLOW UP</h1>
                <h5 className='text-white titulo-estudio'>ESTUDIO DE IMAGEN PERSONAL</h5>
            </Col>
        </Row>
    {/* ----------------- QUIENES SOMOS ----------------- */}
        <div>
            <div className='d-flex justify-content-start'>
                    <img className='hojaverde2' src="../../../../assets/images/fondos/hojas1.png" alt="" />
                </div>
                <h2 className='text-center fw-bold pt-2 titulo-quienes-somos'>Somos el primer estudio de imagen centrado <br/> en la asesoría de imagen en España</h2>
                <p className='text-center pt-3'>Ayúdanos a que todo el mundo conozca el poder de la asesoría de imagen, como forma de empoderamiento, creando una imagen personalizada.</p>
                <div className='text-center pt-2 quienessomos'>
                    <BotonRosa titulo="DESCUBRE QUIÉNES SOMOS"/>
                </div>
                <div className='d-flex justify-content-end'>
                    <img className='hojaverde1' src="../../../../assets/images/fondos/hojas1.png" alt="" />
            </div>
        </div>
    {/* ----------------- EXPERIENCIA Y TECNOLOGIA ----------------- */}
        <section class="skin-beauty padding-section">
            <Row>
                <Col>
                <h3 className='text-center fw-bold pt-5'>Estudiamos tu imagen combinando experiencia y tecnología</h3>
                </Col>
            </Row>
            <div className='cards m-5'>
                <Row className='justify-content-center'>
                    <div className='card-beauty col-12 col-md-6 col-lg-3 m-2'>
                        <img src="../../../../assets/images/cards/card1.png" alt="" className='m-2' />
                        <h3>skin & beauty care</h3>
                        <p class="grey">
                            Somos el primer salón de belleza centrado en la asesoría de la imagen.
                        </p>
                    </div>
                    <div className='card-beauty col-12 col-md-6 col-lg-3 m-2'>
                        <img src="../../../../assets/images/cards/card2.png" alt="" className='m-2' />
                        <h3>skin & beauty care</h3>
                        <p class="grey">
                            Contamos con un sistema de IA en el proceso de aseosría de la imagen personal.
                        </p>
                    </div>
                    <div className='card-beauty col-12 col-md-6 col-lg-3 m-2'>
                        <img src="../../../../assets/images/cards/card3.png" alt="" className='m-2' />
                        <h3>skin & beauty care</h3>
                        <p class="grey">
                            Ofrecemos servicios de peluquería, maquillaje, uñas y pestañas.
                        </p>
                        </div>
                    <div className='card-beauty col-12 col-md-6 col-lg-3 m-2'>
                        <img src="../../../../assets/images/cards/card4.png" alt="" className='m-2' />
                        <h3>skin & beauty care</h3>
                        <p class="grey">
                            Escuchamos las necesidades de las personas para diseñar una imagen que potencie su verdadera naturaleza.
                        </p>
                    </div>
                </Row>
            </div>
            <h6 className='text-center pt-5 pb-5'>¿Tienes alguna pregunta? <span className='contactanos'> Contáctanos.</span></h6>
        </section>

    {/* ----------------- RESERVA TU CITA ----------------- */}
        <Row className='d-flex align-items-center justify-content-center pb-5'>
            <Col xs={12} md={12} lg={6} className='divfotoflores pt-5'>
                <img className="flores" src="../../../../assets/images/fondos/flores.png" alt="" />
            </Col>
            <Col xs={12} md={12} lg={6} className='text-center'>
                <h2 className='p-3'>En Glow up unimos innovación, tecnología, imagen personal, colorimetría y asesoría de imagen.</h2>
                <BotonRosa titulo="Reserva tu cita"/>
            </Col>
        </Row>
    {/* ----------------- NUESTROS SERVICIOS ----------------- */}
        <Row className='p-5 nuestrosservicios'>
            <Col>
                <h2 className='col-12 col-md-6 col-lg-3 textoservicios'>
                    Queremos que todo el mundo pueda aprovechar todo lo que la aseosría de imagen puede aportar.
                </h2>
                <div>
                    <BotonRosa titulo="Conoce todos nuestros servicios"/>
                </div>
            </Col>
        </Row>
    {/* ----------------- SERVICIOS: CARROUSEL ----------------- */}
        <Carousel className='pt-5 pb-5'>
        <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
            <Card className='bordecarrusel'>
                <Card.Img className="fotoscarrusel" variant="top" src="../../../../assets/images/carrusel/carrusel1.png"/>
                <Card.Body>
                <Card.Text>
                    <h2 className='mqmcarrusel text-center'>PESTAÑAS</h2>
                    <p className='textocarrusel text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet veritatis, aliquam tempore velit soluta fuga sed accusamus at ullam.</p>
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
            <Card>
                <Card.Img className="fotoscarrusel" variant="top" src="../../../../assets/images/carrusel/carrusel2.png"/>
                <Card.Body>
                <Card.Text>
                <   h2 className='mqmcarrusel text-center'>UÑAS</h2>
                    <p className='textocarrusel text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet veritatis, aliquam tempore velit soluta fuga sed accusamus at ullam.</p>
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
            <Card>
                <Card.Img className="fotoscarrusel" variant="top" src="../../../../assets/images/carrusel/carrusel3.png"/>
                <Card.Body>
                <Card.Text>
                    <h2 className='mqmcarrusel text-center'>MAQUILLAJE</h2>
                    <p className='textocarrusel text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet veritatis, aliquam tempore velit soluta fuga sed accusamus at ullam.</p>
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
            <Card>
                <Card.Img className="fotoscarrusel" variant="top" src="../../../../assets/images/carrusel/carrusel4.png"/>
                <Card.Body>
                <Card.Text>
                    <h2 className='mqmcarrusel text-center'>PELUQUERÍA</h2>
                    <p className='textocarrusel text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet veritatis, aliquam tempore velit soluta fuga sed accusamus at ullam.</p>
                </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </Carousel.Item>
        </Carousel>
{/* ----------------- WAITLIST ----------------- */}
        <Row className='waitlist p-5 d-flex justify-content-center align-items-center'>
            <Col xs={12} md={6} lg={6} className='fw-bold textowaitlist mt-4'>
                <h2 className='text-center p-3'>¡Apuntate a nuestra Waitlist!</h2>
                <p className='text-center'>¡En Málaga, este próximo mes de SEPTIEMBRE es la inauguración del salón y nos encantaría tenerte cerca!</p>
            </Col>
            <Col xs={12} md={6} lg={6}  className='inputwaitlist text-center'>
                <InputForm
                    type="text"
                    label="Nombre"
                    name="nombre"
                    placeholder='Nombre completo*'
                />
                <br />
                <InputForm
                    type="email"
                    label="Email"
                    name="email"
                    placeholder='Correo electrónico*'
                />
                <br />
                <BotonMoradoGlow titulo="¡Quiero apuntarme!"/>
            </Col>
        </Row>

    {/* ----------------- INSTAGRAM ----------------- */}
        <Row className='text-center pt-5'>
            <h2>Síguenos en Instagram</h2>
            <h6>#glowupsalon</h6>
                <Row className='p-1'>
                    <Col className="colinstagram" xs={12} md={6} lg={12}>
                        <img className="minifotosinstagram p-3" src="../../../../assets/images/glowupinstagram/tigre.png" alt="" />
                        <img className="minifotosinstagram p-3" src="../../../../assets/images/glowupinstagram/flor.png" alt="" />
                        <img className="minifotosinstagram p-3" src="../../../../assets/images/glowupinstagram/espejos.png" alt="" />
                    </Col>
                    <Col className="colinstagram" xs={12} md={6} lg={12}>
                        <img className="minifotosinstagram p-3" src="../../../../assets/images/glowupinstagram/chica1.png" alt="" />
                        <img className="minifotosinstagram p-3" src="../../../../assets/images/glowupinstagram/party.png" alt="" />
                        <img className="minifotosinstagram p-3" src="../../../../assets/images/glowupinstagram/chica2.png" alt="" />
                    </Col>
                </Row>
            <h6 className='pt-3 pb-5 contactanos'>Ir a instagram</h6>
        </Row>


{/* ----------------- FOOTER ----------------- */}

        <footer className="footer">
            <Row className="text-center bottom_border">
                    <Col xs={12} md={6} lg={3} >
                        <h5 className="headin5_amrc col_white_amrc pt2">Contáctanos</h5>
                        <p className="fa fa-location-arrow"> Calle Larios, 35 Málaga </p>
                        <p className="fa fa-phone">+34 999987838  </p>
                        <p className="fa fa fa-envelope">example@glowupsalon.com  </p>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <h5 className="headin5_amrc col_white_amrc pt2">Saber más</h5>
                        <ul className="footer_ul_amrc">
                            <li>Misión y equipo</li>
                            <li>Trabajo con nosotros</li>
                            <li>Blog</li>
                            <li>Sostenibilidad</li>
                            <li>Prensa</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <h5 className="headin5_amrc col_white_amrc pt2">Nuestros productos</h5>
                        <ul className="footer_ul_amrc">
                            <li>Glow Beauty</li>
                            <li>Productos de pestañas</li>
                            <li>Laca de uñas</li>
                            <li>Sostenibilidad</li>
                            <li>Productos veganos</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <h5 className="headin5_amrc col_white_amrc pt2">Ayuda</h5>
                        <ul className="footer_ul2_amrc">
                            <li>FAQ's</li>
                            <li>Nuestra política</li>
                        </ul>
                    </Col>
            </Row>
            <div className="text-center">
                <p className="text-center">@ 2023 | Glowup Málaga</p>
                <Row className="social_footer">
                    <Col>
                        <img src="../../../../assets/images/redessociales/linkedin.png" alt="" className='p-2' />
                         <img src="../../../../assets/images/redessociales/instagram.png" alt="" className='p-2'  />
                        <img src="../../../../assets/images/redessociales/pinterest.png" alt="" className='p-2'  />
                        <img src="../../../../assets/images/redessociales/facebook.png" alt=""
                        className='p-2' />
                        <img src="../../../../assets/images/redessociales/youtube.png" alt="" />
                    <img src="../../../../assets/images/redessociales/tiktok.png" alt=""
                    className='p-2'/>
                    </Col>
                </Row>
            </div>
        </footer>
    </Row>
  )
}







