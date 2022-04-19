export function About() {
    const $about = document.createElement('div'),
        $styles = document.getElementById('dynamic-style')
    $about.classList.add('page3__main')

    $styles.innerHTML = `
    .page3__main .section1 {
        height: calc(100vh - 127px)
    }
    
    @media (max-width:769px) {
        .page3__main .section1 {
            height: calc(100vh - 146px)
        }
    }
    
    @media (max-width:650px) {
        .page3__main .section1 {
            padding: 0 24px;
            height: auto
        }
    }
    
    .page3__main .section1__align {
        width: 100%;
        max-width: 1100px;
        margin: auto;
        padding: 64px 24px
    }
    
    @media (max-width:1025px) {
        .page3__main .section1__align {
            padding: 40px 0
        }
    }
    
    @media (max-width:650px) {
        .page3__main .section1__align {
            padding: 32px 0
        }
    }
    
    .page3__main .section1__main .item__list {
        width: 100%;
        margin: auto;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-wrap: wrap;
        -moz-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: space-between;
        -moz-justify-content: space-between;
        -ms-justify-content: space-between;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -ms-flex-pack: space-between;
        -webkit-align-items: center;
        -moz-align-items: center;
        -ms-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }
    
    @media (max-width:1025px) {
        .page3__main .section1__main .item__list {
            -webkit-justify-content: center;
            -moz-justify-content: center;
            -ms-justify-content: center;
            -webkit-box-pack: center;
            justify-content: center;
            -ms-flex-pack: center
        }
    }
    
    .page3__main .section1__main .item__list .item {
        width: 450px;
        text-align: center
    }
    
    @media (max-width:1025px) {
        .page3__main .section1__main .item__list .item {
            width: 400px
        }
    }
    
    @media (max-width:769px) {
        .page3__main .section1__main .item__list .item {
            margin-bottom: 24px;
            width: 500px
        }
    }
    
    .page3__main .section1__main .item__list .item:last-child {
        width: 550px;
        text-align: left
    }
    
    @media (max-width:1025px) {
        .page3__main .section1__main .item__list .item:last-child {
            width: 500px
        }
    }
    
    @media (max-width:769px) {
        .page3__main .section1__main .item__list .item:last-child {
            width: 500px
        }
    }
    
    .page3__main .section1__main .item__list .item__info {
        width: 100%;
        margin-bottom: 32px
    }
    
    .page3__main .section1__main .item__list .item__info:last-child {
        margin-bottom: 0
    }
    
    @media (max-width:650px) {
        .page3__main .section1__main .item__list .item__info:last-child {
            margin-bottom: 24px
        }
    }
    
    .page3__main .section1__main .item__list .item__info p {
        font-size: 16px;
        font-weight: 300;
        line-height: 35px;
        margin-bottom: 24px;
        color: #929292
    }
    
    .page3__main .section1__main .item__list .item__info p:last-child {
        margin-bottom: 0
    }
    
    @media (max-width:769px) {
        .page3__main .section1__main .item__list .item__info p {
            font-size: 15px
        }
    }
    
    @media (max-width:650px) {
        .page3__main .section1__main .item__list .item__info p {
            font-size: 14px;
            line-height: 20px
        }
    }
    
    .page3__main .section1__main .item__list .item__info p span {
        font-weight: 700;
        position: relative;
        cursor: pointer
    }
    
    .page3__main .section1__main .item__list .item__info p span:hover:after {
        display: block
    }
    
    .page3__main .section1__main .item__list .item__info p span:before {
        content: '';
        width: 78%;
        height: 10px;
        background: url(../app/assets/images/svg/linea.svg) no-repeat;
        background-size: 100%;
        left: 0;
        right: 0;
        display: inline-block;
        margin: auto;
        position: absolute;
        bottom: -10px
    }
    
    @media (max-width:650px) {
        .page3__main .section1__main .item__list .item__info p span:before {
            display: none
        }
    }
    
    @media (max-width:650px) {
        .page3__main .section1__main .item__list .item__link {
            text-align: center
        }
    }
    
    .page3__main .section1__main .item__list .item__link span {
        width: 200px;
        margin-right: 20px;
        display: inline-block;
        text-align: center;
        height: 48px;
        margin-right: 16px;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
        border: 1px solid transparent;
        -webkit-border-radius: 4px 4px 4px 4px;
        -moz-border-radius: 4px 4px 4px 4px;
        border-radius: 4px 4px 4px 4px;
        background: #ef173b
    }
    
    .page3__main .section1__main .item__list .item__link span:last-child {
        margin-bottom: 0
    }
    
    @media (max-width:650px) {
        .page3__main .section1__main .item__list .item__link span {
            margin-right: 0;
            margin-bottom: 16px
        }
    }
    
    .page3__main .section1__main .item__list .item__link span:hover {
        background: #bf0f2c;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out
    }
    
    .page3__main .section1__main .item__list .item__link span.type2 {
        border: 1px solid #ef173b;
        background: none;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out
    }
    
    .page3__main .section1__main .item__list .item__link span.type2:hover {
        background: #ef173b;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out
    }
    
    .page3__main .section1__main .item__list .item__link span.type2:hover a {
        color: #ffffff;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out
    }
    
    .page3__main .section1__main .item__list .item__link span.type2:hover a:before {
        background: url(../app/assets/images/svg/flecha-hacia-abajo_v2.svg);
        background-size: 100%
    }
    
    .page3__main .section1__main .item__list .item__link span.type2 a {
        color: #ef173b;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out
    }
    
    .page3__main .section1__main .item__list .item__link span.type2 a:before {
        background: url(../app/assets/images/svg/flecha-hacia-abajo.svg);
        background-size: 100%
    }
    
    .page3__main .section1__main .item__list .item__link span a {
        color: #ffffff;
        font-size: 14px;
        display: block;
        line-height: 48px;
        position: relative
    }
    
    .page3__main .section1__main .item__list .item__link span a:before {
        content: '';
        width: 20px;
        height: 20px;
        position: absolute;
        right: 20px;
        top: 12px;
        background: url(../app/assets/images/svg/whatsapp.svg);
        background-size: 100%
    }
    
    .page3__main .section1__main .item__list .item__image {
        width: 300px;
        height: 300px;
        margin: auto;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 32px
    }
    
    @media (max-width:769px) {
        .page3__main .section1__main .item__list .item__image {
            margin: auto
        }
    }
    
    @media (max-width:650px) {
        .page3__main .section1__main .item__list .item__image {
            width: 200px;
            height: 200px
        }
    }
    
    .page3__main .section1__main .item__list .item__image img {
        width: 100%
    }
    `

    $about.innerHTML = `
    <section class="section1">
        <div class="section1__align">
        <div class="section1__main">
            <div class="item__list">
            <div class="item skeletor">
                <div class="item__image"><img src="app/assets/images/png/jorzon.png"></div>
            </div>
            <div class="item skeletor">
                <div class="item__info">
                <p>Me llamo Jorzon, soy <span> 🔥Developer Frontend & UI🔥, </span>  con más de 3 años de experiencia, en el desarrollo de <span>⚡plataformas e interfaces⚡. </span>  Estoy en constante aprendizaje sobre las nuevas tecnológias. Estoy disponible para diferentes propuestas, mientras represente un reto y apoye mi crecimiento profesional.	</p>
                <p>Me gusta jugar futbol ⚽ los fines de semana, jugar en la pc juegos de ps1🎮, ver mucho nexflit y me encanta viajar ✈🌄️.</p>
                </div>
                <div class="item__link"><span class="type2"><a href="https://jorzon.github.io/port/assets/files/JorzonDelgadoCv.pdf" download>Descargar cv</a></span><span><a href="https://api.whatsapp.com/send?phone=+51936022870&amp;text=Hola" target="_blank">Conversemos</a></span></div>
            </div>
            </div>
        </div>
        </div>
    </section>
    `

    return $about
}