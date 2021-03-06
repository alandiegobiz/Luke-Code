import React from 'react';
import Animation from '../../components/Animation';
import CardCourse from '../../components/CardCourse';
import CardCategory from '../../components/CardCategory';

import './styles.css';

import yoda from '../../assets/images/characters/yoda.png'
import separator from '../../assets/images/separator.svg'
import courseReactRedux from '../../assets/images/courses/react-redux.jpg';
import coursePhp from '../../assets/images/courses/php.jpg';
import courseFlutter from '../../assets/images/courses/flutter.jpg';
import markRight from '../../assets/images/mark-right.svg';
import markLeft from '../../assets/images/mark-left.svg';
import userReviewImage from '../../assets/images/users/user.png';



const Home = () => {
    
    return (
        <>

            <Animation />

            <div className="section-1">
                <div className="box">
                    <header className="header">
                        <h2>Luke Code</h2>
                        <nav>
                            <button>FAZER LOGIN</button>
                            <button>INCREVA-SE</button>
                            <button className="btn-menu"><i className="fas fa-bars"></i></button>
                        </nav>
                    </header>
                    <main>
                        <section>
                            <h1>Se torne um mestre <br/> da programação!</h1>
                            <img src={separator} alt=""/>
                            <p>
                                De o próximo passo para o seu futuro, <br/>
                                que a força esteja com você.
                            </p>
                        </section>
                        <section>
                            <img src={yoda} alt="Yoda - Star Wars"/>
                        </section>
                    </main>
                </div>
            </div>
            <div className="section-2">
                <div className="box">
                    <h2>+3 Cursos Completos</h2>
                    <p>
                        Na Luke Code, você tem acesso a 3 cursos gratuitos, basta se cadastrar na plataforma.
                    </p>
                    <section className="card-container">
                        <CardCourse image={courseReactRedux} description="Desenvolvimento front-end React e Redux">
                            Desenvolvimento front-end<br />React e Redux
                        </CardCourse>
                        <CardCourse image={coursePhp} description="PHP 7 - Trabalhando com PSRs">
                            PHP 7 - Trabalhando com PSRs
                        </CardCourse>
                        <CardCourse image={courseFlutter} description="Desenvolvimento IOS e Android com Flutter">
                            Desenvolvimento IOS e Android <br /> com Flutter
                        </CardCourse>
                    </section>
                    <button>
                        INCREVA-SE
                    </button>
                </div>
            </div>
            <div className="section-3">
                <div className="box">
                    <h2>O que oferecemos para você</h2>
                    <section className="categories-container">
                        <CardCategory image="http://pngimg.com/uploads/php/php_PNG32.png" title="BACK-END" courses="22 cursos" color="red" />
                        <CardCategory title="BANCO DE DADOS" courses="2 cursos" color="yellow" />
                        <CardCategory title="SEGURANÇA" courses="22 cursos" color="purple" />
                        <CardCategory title="MOBILE" courses="17 cursos" color="blue" />
                        <CardCategory title="FRONT-END" courses="12 cursos" color="green" />
                        <CardCategory title="CLOUDING-COMPUTING" courses="8 cursos" color="orange" />
                    </section>
                </div>
            </div>
            <div className="section-4">
                <div className="box">
                    <h2>Depoimentos</h2>
                    <div className="image-review">
                        <img src={userReviewImage} width="300px" alt="Joaquim"/>
                    </div>
                    <div className="review">
                        <img src={markLeft} alt=""/>
                        <p>
                            Professor extremamente didático e com amplos conhecimentose <br /> 
                            o curso tem conteúdo que permite exercitar o que é ensinado!
                        </p>
                        <img src={markRight} alt=""/>
                    </div>
                    <div className="user-review">
                        <h4>
                            Joaquim
                        </h4>
                    </div>
                </div>
            </div>
            <footer>
                <div className="box">
                &copy; Luke Code - Alguns direitos reservados - { new Date().getFullYear() }
                </div>
            </footer>
        </>
    )

}

export default Home;