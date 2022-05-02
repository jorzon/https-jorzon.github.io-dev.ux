export function CardDetail(props) {

    let { content } = props[0],
        $styles = document.getElementById('dynamic-style')



    $styles.innerHTML = `
    .page2__main .section1__main {
        background: #f9f9f9
    }
    
    .page2__main .section1__main .item__btn {
        width: 100%;
        max-width: 1100px;
        margin: auto;
        padding: 32px 24px 0
    }
    
    .page2__main .section1__main .item__btn span {
        width: 150px;
        height: 48px;
        background: transparent;
        border: 1px solid #FF560A;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
        position: relative;
        -webkit-border-radius: 4px 4px 4px 4px;
        -moz-border-radius: 4px 4px 4px 4px;
        border-radius: 4px 4px 4px 4px;
        display: inline-block
    }
    
    .page2__main .section1__main .item__btn span:before {
        content: '';
        width: 26px;
        height: 26px;
        top: 13px;
        pointer-events: none;
        left: 30px;
        position: absolute;
        background: url(./app/assets/images/svg/volver.svg) no-repeat;
        background-size: 100%
    }
    
    .page2__main .section1__main .item__btn span:hover {
        background: #FF560A;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
        border: 1px solid transparent
    }
    
    .page2__main .section1__main .item__btn span:hover:before {
        content: '';
        width: 26px;
        height: 26px;
        top: 10px;
        left: 30px;
        position: absolute;
        background: url(./app/assets/images/svg/volver-w.svg) no-repeat;
        background-size: 100%
    }
    
    .page2__main .section1__main .item__btn span:hover a {
        color: #ffffff;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out
    }
    
    .page2__main .section1__main .item__btn span a {
        font-size: 14px;
        margin-left: 10px;
        text-align: center;
        width: 100%;
        display: inline-block;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
        line-height: 48px;
        color: #FF560A
    }
    
    .page2__main .section1__main .item__list {
        width: 100%;
        margin: auto;
        padding-top: 40px;
        padding-bottom: 80px
    }
    
    @media (max-width:650px) {
        .page2__main .section1__main .item__list {
            padding-top: 40px;
            padding-bottom: 40px
        }
    }
    
    .page2__main .section1__main .item__list .item {
        width: 320px;
        height: 570px;
        margin: auto;
        position: relative
    }
    
    .page2__main .section1__main .item__list .item__down {
        position: absolute;
        width: 40px;
        height: 40px;
        display: inline-block;
        left: 0;
        cursor: pointer;
        bottom: -55px;
        right: 0;
        background: url(./app/assets/images/svg/flecha-hacia-abajo.svg) center center no-repeat;
        background-size: 20px;
        margin: auto;
        border-radius: 50%;
        border: 1px solid #383C47333
    }
    
    @media (max-width:769px) {
        .page2__main .section1__main .item__list .item {
            width: 250px;
            height: 446px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section1__main .item__list .item {
            width: 220px;
            height: 393px
        }
    }
    
    .page2__main .section1__main .item__list .item__image {
        width: 100%;
        text-align: center
    }
    
    .page2__main .section1__main .item__list .item__image img {
        width: 85%;
        display: inline-block;
        margin: auto
    }
    
    @media (max-width:650px) {
        .page2__main .section2 {
            padding: 0 24px
        }
    }
    
    .page2__main .section2__align {
        width: 100%;
        max-width: 1100px;
        margin: auto;
        padding: 64px 24px
    }
    
    @media (max-width:650px) {
        .page2__main .section2__align {
            padding: 40px 0
        }
    }
    
    .page2__main .section2__header .item__list {
        width: 100%;
        margin: auto
    }
    
    .page2__main .section2__header .item__list .item {
        width: 100%;
        margin-bottom: 32px
    }
    
    .page2__main .section2__header .item__list .item__info {
        width: 100%
    }
    
    .page2__main .section2__header .item__list .item__info h2 {
        font-size: 24px;
        font-weight: 500;
        text-transform: uppercase;
        color: #FF560A
    }
    
    @media (max-width:769px) {
        .page2__main .section2__header .item__list .item__info h2 {
            font-size: 22px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section2__header .item__list .item__info h2 {
            font-size: 20px
        }
    }
    
    .page2__main .section2__main .item__list {
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
        -ms-flex-pack: space-between
    }
    
    .page2__main .section2__main .item__list .item {
        width: 450px
    }
    
    @media (max-width:769px) {
        .page2__main .section2__main .item__list .item {
            width: 370px
        }
        .page2__main .section2__main .item__list .item:last-child {
            width: 300px
        }
    }
    
    @media (max-width:769px) and (max-width:650px) {
        .page2__main .section2__main .item__list .item:last-child .item__info:last-child {
            margin-bottom: 0!important
        }
    }
    
    .page2__main .section2__main .item__list .item__info {
        width: 100%;
        margin-bottom: 32px
    }
    
    .page2__main .section2__main .item__list .item__info:last-child {
        margin-bottom: 0
    }
    
    @media (max-width:650px) {
        .page2__main .section2__main .item__list .item__info:last-child {
            margin-bottom: 24px
        }
    }
    
    .page2__main .section2__main .item__list .item__info h2 {
        font-size: 20px;
        margin-bottom: 8px;
        font-weight: 500;
        color: #383C47;
        text-transform: capitalize
    }
    
    @media (max-width:769px) {
        .page2__main .section2__main .item__list .item__info h2 {
            font-size: 18px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section2__main .item__list .item__info h2 {
            font-size: 16px
        }
    }
    
    .page2__main .section2__main .item__list .item__info p {
        font-size: 16px;
        font-weight: 300;
        color: #929292
    }
    
    @media (max-width:769px) {
        .page2__main .section2__main .item__list .item__info p {
            font-size: 15px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section2__main .item__list .item__info p {
            font-size: 14px
        }
    }
    
    .page2__main .section3__main .item__list {
        width: 100%;
        height: 350px;
        overflow: hidden;
        position: relative
    }
    
    .page2__main .section3__main .item__list img {
        position: relative;
        top: -70%;
        width: 100%
    }
    
    @media (max-width:769px) {
        .page2__main .section3__main .item__list img {
            top: -40px
        }
    }
    
    @media (max-width:769px) {
        .page2__main .section3__main .item__list {
            height: 280px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section3__main .item__list {
            height: 150px
        }
    }
    
    .page2__main .section3__main .item__list:before {
        content: '';
        width: 100%;
        height: 100%;
        background: #00000069;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 5
    }
    
    @media (max-width:650px) {
        .page2__main .section4 {
            padding: 0 24px
        }
    }
    
    .page2__main .section4__align {
        width: 100%;
        max-width: 1100px;
        padding: 64px 24px;
        border-bottom: 1px solid #f5f5f5;
        margin: auto
    }
    
    @media (max-width:650px) {
        .page2__main .section4__align {
            padding: 40px 0
        }
    }
    
    .page2__main .section4__header .item__list {
        width: 100%;
        margin: auto
    }
    
    .page2__main .section4__header .item__list .item {
        width: 100%;
        margin-bottom: 32px
    }
    
    @media (max-width:650px) {
        .page2__main .section4__header .item__list .item {
            margin-bottom: 32px
        }
    }
    
    .page2__main .section4__header .item__list .item__info {
        width: 100%
    }
    
    .page2__main .section4__header .item__list .item__info h2 {
        font-size: 24px;
        font-weight: 500;
        color: #383C47;
        color: #FF560A;
        margin-bottom: 8px;
        text-transform: uppercase
    }
    
    @media (max-width:769px) {
        .page2__main .section4__header .item__list .item__info h2 {
            font-size: 22px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section4__header .item__list .item__info h2 {
            font-size: 20px
        }
    }
    
    .page2__main .section4__header .item__list .item__info p {
        font-size: 16px;
        font-weight: 300;
        color: #929292
    }
    
    @media (max-width:769px) {
        .page2__main .section4__header .item__list .item__info p {
            font-size: 15px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section4__header .item__list .item__info p {
            font-size: 14px
        }
    }
    
    .page2__main .section4__header .item__list .item__image {
        width: 100%;
        font-size: 0
    }
    
    .page2__main .section4__header .item__list .item__image img {
        width: 100%
    }
    
    .page2__main .section4__header .item__list .item__question {
        width: 900px;
        margin: auto;
        padding: 40px;
        background: #f9f9f9
    }
    
    @media (max-width:769px) {
        .page2__main .section4__header .item__list .item__question {
            width: 700px;
            padding: 32px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section4__header .item__list .item__question {
            width: 100%;
            max-width: 320px;
            padding: 24px
        }
    }
    
    .page2__main .section4__header .item__list .item__question h2 {
        color: #FF560A;
        font-weight: 600;
        font-size: 50px;
        margin-bottom: 8px
    }
    
    @media (max-width:769px) {
        .page2__main .section4__header .item__list .item__question h2 {
            font-size: 30px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section4__header .item__list .item__question h2 {
            font-size: 20px
        }
    }
    
    .page2__main .section4__header .item__list .item__question p {
        margin-bottom: 32px;
        font-size: 16px;
        font-weight: 300;
        color: #929292
    }
    
    @media (max-width:769px) {
        .page2__main .section4__header .item__list .item__question p {
            font-size: 15px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section4__header .item__list .item__question p {
            font-size: 14px;
            margin-bottom: 24px
        }
    }
    
    .page2__main .section4__header .item__list .item__question .item__quest {
        padding: 0 0 0 64px
    }
    
    @media (max-width:650px) {
        .page2__main .section4__header .item__list .item__question .item__quest {
            padding: 0
        }
    }
    
    .page2__main .section4__header .item__list .item__question .item__quest ul li {
        font-weight: 500;
        font-size: 40px;
        margin-bottom: 24px
    }
    
    @media (max-width:769px) {
        .page2__main .section4__header .item__list .item__question .item__quest ul li {
            font-size: 20px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section4__header .item__list .item__question .item__quest ul li {
            font-size: 15px;
            margin-bottom: 16px
        }
    }
    
    .page2__main .section4__header .item__list .item__question .item__quest ul li:last-child {
        margin-bottom: 0
    }
    
    .page2__main .section4__main .item__list {
        width: 100%;
        margin: auto;
        padding: 0;
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
        -ms-flex-pack: space-between
    }
    
    .page2__main .section4__main .item__list .item {
        width: 450px
    }
    
    @media (max-width:769px) {
        .page2__main .section4__main .item__list .item {
            width: 350px
        }
        .page2__main .section4__main .item__list .item:last-child {
            width: 300px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section4__main .item__list .item {
            margin-bottom: 32px
        }
        .page2__main .section4__main .item__list .item:last-child {
            margin-bottom: 0
        }
    }
    
    .page2__main .section4__main .item__list .item__info {
        width: 100%
    }
    
    .page2__main .section4__main .item__list .item__info h2 {
        font-size: 20px;
        font-weight: 500;
        color: #383C47;
        margin-bottom: 8px
    }
    
    @media (max-width:769px) {
        .page2__main .section4__main .item__list .item__info h2 {
            font-size: 18px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section4__main .item__list .item__info h2 {
            font-size: 16px
        }
    }
    
    .page2__main .section4__main .item__list .item__info p {
        font-size: 16px;
        font-weight: 300;
        color: #929292
    }
    
    @media (max-width:769px) {
        .page2__main .section4__main .item__list .item__info p {
            font-size: 15px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section4__main .item__list .item__info p {
            font-size: 14px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section5 {
            padding: 0 24px
        }
    }
    
    .page2__main .section5__align {
        width: 100%;
        padding: 64px 24px;
        max-width: 1100px;
        border-bottom: 1px solid #f5f5f5;
        margin: auto
    }
    
    @media (max-width:650px) {
        .page2__main .section5__align {
            padding: 40px 0
        }
    }
    
    .page2__main .section5__header .item__list {
        width: 100%;
        margin: auto
    }
    
    .page2__main .section5__header .item__list .item {
        width: 100%;
        margin-bottom: 32px
    }
    
    .page2__main .section5__header .item__list .item__info {
        width: 100%
    }
    
    .page2__main .section5__header .item__list .item__info h2 {
        font-size: 24px;
        font-weight: 500;
        color: #383C47;
        color: #FF560A;
        margin-bottom: 8px;
        text-transform: uppercase
    }
    
    @media (max-width:769px) {
        .page2__main .section5__header .item__list .item__info h2 {
            font-size: 22px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section5__header .item__list .item__info h2 {
            font-size: 20px
        }
    }
    
    .page2__main .section5__header .item__list .item__info p {
        font-size: 16px;
        font-weight: 300;
        color: #929292
    }
    
    @media (max-width:769px) {
        .page2__main .section5__header .item__list .item__info p {
            font-size: 15px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section5__header .item__list .item__info p {
            font-size: 14px
        }
    }
    
    .page2__main .section5__header .item__list .item__image {
        width: 100%;
        font-size: 0
    }
    
    .page2__main .section5__header .item__list .item__image img {
        width: 100%
    }
    
    .page2__main .section5__header .item__list .item__user {
        width: 900px;
        background: #f9f9f9;
        margin: auto;
        padding: 40px
    }
    
    @media (max-width:769px) {
        .page2__main .section5__header .item__list .item__user {
            width: 700px;
            padding: 32px 32px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section5__header .item__list .item__user {
            width: 100%;
            max-width: 320px;
            padding: 24px 24px
        }
    }
    
    .page2__main .section5__header .item__list .item__user p {
        font-size: 16px;
        font-weight: 500;
        color: #383C47;
        margin-bottom: 16px
    }
    
    .page2__main .section5__header .item__list .item__user .user {
        width: 100%;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-wrap: wrap;
        -moz-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-bottom: 16px;
        -webkit-align-items: center;
        -moz-align-items: center;
        -ms-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }
    
    .page2__main .section5__header .item__list .item__user .user__image {
        width: 200px;
        margin-right: 16px
    }
    
    @media (max-width:650px) {
        .page2__main .section5__header .item__list .item__user .user__image {
            margin: auto;
            width: 250px
        }
    }
    
    .page2__main .section5__header .item__list .item__user .user__image img {
        width: 100%
    }
    
    @media (max-width:650px) {
        .page2__main .section5__header .item__list .item__user .user__image {
            margin-bottom: 16px;
            text-align: center;
            margin-right: 0
        }
    }
    
    .page2__main .section5__header .item__list .item__user .user__name h2 {
        font-size: 64px;
        font-weight: 600;
        color: #FF560A
    }
    
    @media (max-width:769px) {
        .page2__main .section5__header .item__list .item__user .user__name h2 {
            font-size: 45px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section5__header .item__list .item__user .user__name h2 {
            font-size: 20px;
            margin-bottom: 4px
        }
    }
    
    .page2__main .section5__header .item__list .item__user .user__name h3 {
        font-size: 50px;
        font-weight: 500;
        color: #383C47
    }
    
    @media (max-width:769px) {
        .page2__main .section5__header .item__list .item__user .user__name h3 {
            font-size: 35px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section5__header .item__list .item__user .user__name h3 {
            font-size: 18px
        }
    }
    
    .page2__main .section5__header .item__list .item__user .userinfo {
        width: 100%;
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
        -ms-flex-pack: space-between
    }
    
    .page2__main .section5__header .item__list .item__user .userinfo p {
        font-size: 16px;
        width: 100%;
        font-weight: 300;
        color: #929292;
        margin-bottom: 24px
    }
    
    @media (max-width:769px) {
        .page2__main .section5__header .item__list .item__user .userinfo p {
            font-size: 14px
        }
    }
    
    .page2__main .section5__header .item__list .item__user .userinfo__apps {
        width: 250px
    }
    
    @media (max-width:769px) {
        .page2__main .section5__header .item__list .item__user .userinfo__apps {
            width: 300px
        }
    }
    
    .page2__main .section5__header .item__list .item__user .userinfo__apps h3 {
        margin-bottom: 16px;
        font-size: 16px
    }
    
    @media (max-width:769px) {
        .page2__main .section5__header .item__list .item__user .userinfo__apps h3 {
            font-size: 15px
        }
    }
    
    .page2__main .section5__header .item__list .item__user .userinfo__apps ul li {
        position: relative;
        display: inline-block;
        margin-right: 8px
    }
    
    .page2__main .section5__header .item__list .item__user .userinfo__apps ul li img {
        height: 40px;
        width: auto
    }
    
    @media (max-width:650px) {
        .page2__main .section5__header .item__list .item__user .userinfo__apps ul li img {
            height: 30px
        }
    }
    
    .page2__main .section5__header .item__list .item__user .userinfo__info {
        width: 250px
    }
    
    @media (max-width:769px) {
        .page2__main .section5__header .item__list .item__user .userinfo__info {
            margin-bottom: 24px;
            width: 300px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section5__header .item__list .item__user .userinfo__info {
            width: 100%
        }
    }
    
    .page2__main .section5__header .item__list .item__user .userinfo__info h3 {
        margin-bottom: 16px;
        font-size: 16px
    }
    
    @media (max-width:769px) {
        .page2__main .section5__header .item__list .item__user .userinfo__info h3 {
            font-size: 15px
        }
    }
    
    .page2__main .section5__header .item__list .item__user .userinfo__info ul li {
        position: relative;
        padding-left: 16px;
        font-size: 14px;
        margin-bottom: 8px;
        color: #929292
    }
    
    .page2__main .section5__header .item__list .item__user .userinfo__info ul li:last-child {
        margin-bottom: 0
    }
    
    .page2__main .section5__header .item__list .item__user .userinfo__info ul li:before {
        content: '';
        position: absolute;
        left: 0;
        top: 7px;
        width: 6px;
        height: 6px;
        background: red;
        -webkit-border-radius: 3px 3px 3px 3px;
        -moz-border-radius: 3px 3px 3px 3px;
        border-radius: 3px 3px 3px 3px
    }
    
    .page2__main .section5__main .item__list {
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
        -ms-flex-pack: space-between
    }
    
    .page2__main .section5__main .item__list .item {
        width: 450px
    }
    
    @media (max-width:769px) {
        .page2__main .section5__main .item__list .item {
            width: 350px
        }
    }
    
    .page2__main .section5__main .item__list .item__info {
        width: 100%
    }
    
    .page2__main .section5__main .item__list .item__info h2 {
        font-size: 20px;
        font-weight: 500;
        color: #383C47;
        margin-bottom: 8px
    }
    
    @media (max-width:769px) {
        .page2__main .section5__main .item__list .item__info h2 {
            font-size: 18px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section5__main .item__list .item__info h2 {
            font-size: 16px
        }
    }
    
    .page2__main .section5__main .item__list .item__info p {
        font-size: 16px;
        font-weight: 300;
        color: #929292
    }
    
    @media (max-width:769px) {
        .page2__main .section5__main .item__list .item__info p {
            font-size: 15px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section5__main .item__list .item__info p {
            font-size: 14px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section6 {
            padding: 0 24px
        }
    }
    
    .page2__main .section6__align {
        width: 100%;
        max-width: 1100px;
        border-bottom: 1px solid #f5f5f5;
        margin: auto;
        padding: 64px 24px
    }
    
    @media (max-width:650px) {
        .page2__main .section6__align {
            padding: 40px 0
        }
    }
    
    .page2__main .section6__header .item__list {
        width: 100%;
        margin: auto
    }
    
    .page2__main .section6__header .item__list .item {
        width: 100%;
        margin-bottom: 32px
    }
    
    .page2__main .section6__header .item__list .item__info {
        width: 100%
    }
    
    .page2__main .section6__header .item__list .item__info h2 {
        font-size: 24px;
        font-weight: 500;
        color: #383C47;
        color: #FF560A;
        margin-bottom: 8px;
        text-transform: uppercase
    }
    
    @media (max-width:769px) {
        .page2__main .section6__header .item__list .item__info h2 {
            font-size: 22px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section6__header .item__list .item__info h2 {
            font-size: 20px
        }
    }
    
    .page2__main .section6__header .item__list .item__info p {
        font-size: 16px;
        font-weight: 300;
        color: #929292
    }
    
    @media (max-width:769px) {
        .page2__main .section6__header .item__list .item__info p {
            font-size: 15px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section6__header .item__list .item__info p {
            font-size: 14px
        }
    }
    
    .page2__main .section6__main .item__list {
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
        -ms-flex-pack: space-between
    }
    
    @media (max-width:650px) {
        .page2__main .section6__main .item__list {
            width: 100%;
            margin: auto
        }
    }
    
    .page2__main .section6__main .item__list .item {
        width: 250px
    }
    
    @media (max-width:1025px) {
        .page2__main .section6__main .item__list .item {
            margin-right: 32px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section6__main .item__list .item {
            width: 235px;
            margin-right: 24px
        }
    }
    
    .page2__main .section6__main .item__list .item__image {
        width: 100%;
        -webkit-box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
        font-size: 0;
        margin-bottom: 16px
    }
    
    .page2__main .section6__main .item__list .item__image img {
        width: 100%
    }
    
    .page2__main .section6__main .item__list .item__info {
        width: 100%
    }
    
    .page2__main .section6__main .item__list .item__info h2 {
        font-size: 16px;
        font-weight: 500;
        color: #383C47;
        margin-bottom: 8px
    }
    
    @media (max-width:769px) {
        .page2__main .section6__main .item__list .item__info h2 {
            font-size: 15px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section6__main .item__list .item__info h2 {
            font-size: 14px
        }
    }
    
    .page2__main .section6__main .item__list .item__info ul li {
        font-size: 14px;
        font-weight: 300;
        width: 100%;
        display: inline-block;
        margin-bottom: 4px;
        color: #929292
    }
    
    @media (max-width:769px) {
        .page2__main .section6__main .item__list .item__info ul li {
            font-size: 14px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section6__main .item__list .item__info ul li {
            font-size: 13px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section7 {
            padding: 0 24px
        }
    }
    
    .page2__main .section7__align {
        width: 100%;
        max-width: 1100px;
        border-bottom: 1px solid #f5f5f5;
        margin: auto;
        padding: 64px 24px
    }
    
    @media (max-width:650px) {
        .page2__main .section7__align {
            padding: 40px 0
        }
    }
    
    .page2__main .section7__header .item__list {
        width: 100%;
        margin: auto
    }
    
    .page2__main .section7__header .item__list .item {
        width: 100%;
        margin-bottom: 32px
    }
    
    .page2__main .section7__header .item__list .item__info {
        width: 100%
    }
    
    .page2__main .section7__header .item__list .item__info h2 {
        font-size: 24px;
        font-weight: 500;
        color: #383C47;
        color: #FF560A;
        margin-bottom: 8px;
        text-transform: uppercase
    }
    
    @media (max-width:769px) {
        .page2__main .section7__header .item__list .item__info h2 {
            font-size: 22px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section7__header .item__list .item__info h2 {
            font-size: 20px
        }
    }
    
    .page2__main .section7__header .item__list .item__info p {
        font-size: 16px;
        font-weight: 300;
        color: #929292
    }
    
    @media (max-width:769px) {
        .page2__main .section7__header .item__list .item__info p {
            font-size: 15px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section7__header .item__list .item__info p {
            font-size: 14px
        }
    }
    
    .page2__main .section7__main .item__list {
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
        -ms-flex-pack: space-between
    }
    
    @media (max-width:650px) {
        .page2__main .section7__main .item__list {
            width: 100%
        }
    }
    
    .page2__main .section7__main .item__list .item {
        width: 250px
    }
    
    @media (max-width:1025px) {
        .page2__main .section7__main .item__list .item {
            margin-right: 32px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section7__main .item__list .item {
            width: 235px;
            margin-right: 24px
        }
    }
    
    .page2__main .section7__main .item__list .item__image {
        width: 100%;
        font-size: 0;
        -webkit-box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
        margin-bottom: 16px
    }
    
    .page2__main .section7__main .item__list .item__image img {
        width: 100%
    }
    
    .page2__main .section7__main .item__list .item__info {
        width: 100%
    }
    
    .page2__main .section7__main .item__list .item__info h2 {
        font-size: 16px;
        font-weight: 500;
        color: #383C47;
        text-align: center
    }
    
    @media (max-width:769px) {
        .page2__main .section7__main .item__list .item__info h2 {
            font-size: 15px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section7__main .item__list .item__info h2 {
            font-size: 14px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section8 {
            padding: 0 24px
        }
    }
    
    .page2__main .section8__align {
        width: 100%;
        max-width: 1100px;
        border-bottom: 1px solid #f5f5f5;
        margin: auto;
        padding: 64px 24px
    }
    
    @media (max-width:650px) {
        .page2__main .section8__align {
            padding: 40px 0
        }
    }
    
    .page2__main .section8__header .item__list {
        width: 100%;
        margin: auto
    }
    
    .page2__main .section8__header .item__list .item {
        width: 100%;
        margin-bottom: 32px
    }
    
    .page2__main .section8__header .item__list .item__info {
        width: 100%
    }
    
    .page2__main .section8__header .item__list .item__info h2 {
        font-size: 24px;
        font-weight: 500;
        color: #383C47;
        color: #FF560A;
        margin-bottom: 8px;
        text-transform: uppercase
    }
    
    @media (max-width:769px) {
        .page2__main .section8__header .item__list .item__info h2 {
            font-size: 22px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section8__header .item__list .item__info h2 {
            font-size: 20px
        }
    }
    
    .page2__main .section8__header .item__list .item__info p {
        font-size: 16px;
        font-weight: 300;
        color: #929292
    }
    
    @media (max-width:769px) {
        .page2__main .section8__header .item__list .item__info p {
            font-size: 15px
        }
    }
    
    .page2__main .section8__main .item__list {
        width: 100%;
        max-width: 650px;
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
        -ms-flex-pack: space-between
    }
    
    @media (max-width:769px) {
        .page2__main .section8__main .item__list {
            max-width: 550px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section8__main .item__list {
            width: 100%
        }
    }
    
    .page2__main .section8__main .item__list .item {
        width: 270px;
        opacity: 1
    }
    
    .page2__main .section8__main .item__list .item:last-child {
        opacity: 0.5;
        -webkit-box-shadow: none;
        box-shadow: none
    }
    
    @media (max-width:769px) {
        .page2__main .section8__main .item__list .item {
            width: 250px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section8__main .item__list .item {
            width: 235px;
            margin-right: 24px
        }
    }
    
    .page2__main .section8__main .item__list .item__image {
        -webkit-box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
        width: 100%;
        font-size: 0;
        margin-bottom: 16px
    }
    
    .page2__main .section8__main .item__list .item__image img {
        width: 100%
    }
    
    .page2__main .section8__main .item__list .item__info {
        width: 100%
    }
    
    .page2__main .section8__main .item__list .item__info h2 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 4px;
        color: #383C47;
        text-align: center
    }
    
    @media (max-width:769px) {
        .page2__main .section8__main .item__list .item__info h2 {
            font-size: 15px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section8__main .item__list .item__info h2 {
            font-size: 14px
        }
    }
    
    .page2__main .section8__main .item__list .item__info h3 {
        font-size: 22px;
        font-weight: 600;
        color: #FF560A;
        text-align: center
    }
    
    @media (max-width:769px) {
        .page2__main .section8__main .item__list .item__info h3 {
            font-size: 21px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section8__main .item__list .item__info h3 {
            font-size: 20px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section9 {
            padding: 0 24px
        }
    }
    
    .page2__main .section9__align {
        width: 100%;
        max-width: 1100px;
        margin: auto;
        padding: 64px 24px
    }
    
    @media (max-width:650px) {
        .page2__main .section9__align {
            padding: 40px 0
        }
    }
    
    .page2__main .section9__header .item__list {
        width: 100%;
        margin: auto
    }
    
    .page2__main .section9__header .item__list .item {
        width: 100%;
        margin-bottom: 32px
    }
    
    .page2__main .section9__header .item__list .item__info {
        width: 100%
    }
    
    .page2__main .section9__header .item__list .item__info h2 {
        font-size: 24px;
        color: #FF560A;
        font-weight: 500;
        margin-bottom: 8px;
        text-transform: uppercase
    }
    
    @media (max-width:769px) {
        .page2__main .section9__header .item__list .item__info h2 {
            font-size: 22px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section9__header .item__list .item__info h2 {
            font-size: 20px
        }
    }
    
    .page2__main .section9__header .item__list .item__info p {
        font-size: 16px;
        font-weight: 300;
        color: #929292
    }
    
    @media (max-width:769px) {
        .page2__main .section9__header .item__list .item__info p {
            font-size: 15px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section9__header .item__list .item__info p {
            font-size: 14px
        }
    }
    
    .page2__main .section9__main .item__list {
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
        -ms-flex-pack: space-between
    }
    
    @media (max-width:650px) {
        .page2__main .section9__main .item__list {
            width: 100%
        }
    }
    
    .page2__main .section9__main .item__list .item {
        width: 250px
    }
    
    @media (max-width:1025px) {
        .page2__main .section9__main .item__list .item {
            margin-right: 32px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section9__main .item__list .item {
            width: 235px;
            margin-right: 24px
        }
    }
    
    .page2__main .section9__main .item__list .item__image {
        -webkit-box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
        width: 100%;
        font-size: 0;
        margin-bottom: 16px
    }
    
    .page2__main .section9__main .item__list .item__image img {
        width: 100%
    }
    
    .page2__main .section9__main .item__list .item__info {
        width: 100%
    }
    
    .page2__main .section9__main .item__list .item__info h2 {
        font-size: 16px;
        font-weight: 500;
        color: #383C47;
        text-align: center
    }
    
    @media (max-width:769px) {
        .page2__main .section9__main .item__list .item__info h2 {
            font-size: 15px
        }
    }
    
    @media (max-width:650px) {
        .page2__main .section9__main .item__list .item__info h2 {
            font-size: 14px
        }
    }
    
    .page2__main .section9__main .item__btn {
        width: 100%;
        padding-top: 64px
    }
    
    @media (max-width:650px) {
        .page2__main .section9__main .item__btn {
            text-align: left;
            padding-top: 64px
        }
    }
    
    .page2__main .section9__main .item__btn span {
        width: 150px;
        height: 48px;
        background: transparent;
        border: 1px solid #FF560A;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
        position: relative;
        -webkit-border-radius: 4px 4px 4px 4px;
        -moz-border-radius: 4px 4px 4px 4px;
        border-radius: 4px 4px 4px 4px;
        display: inline-block
    }
    
    .page2__main .section9__main .item__btn span:before {
        content: '';
        width: 26px;
        height: 26px;
        top: 13px;
        pointer-events: none;
        left: 30px;
        position: absolute;
        background: url(./app/assets/images/svg/volver.svg) no-repeat;
        background-size: 100%
    }
    
    .page2__main .section9__main .item__btn span:hover {
        background: #FF560A;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
        border: 1px solid transparent
    }
    
    .page2__main .section9__main .item__btn span:hover:before {
        content: '';
        width: 26px;
        height: 26px;
        top: 10px;
        left: 30px;
        position: absolute;
        background: url(./app/assets/images/svg/volver-w.svg) no-repeat;
        background-size: 100%
    }
    
    .page2__main .section9__main .item__btn span:hover a {
        color: #ffffff;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out
    }
    
    .page2__main .section9__main .item__btn span a {
        font-size: 14px;
        margin-left: 10px;
        text-align: center;
        width: 100%;
        display: inline-block;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
        line-height: 48px;
        color: #FF560A
    }
    `

    setTimeout(() => {
        if ("#competencia") {
            $("#competencia").slick({
                dots: false,
                arrows: false,
                speed: 300,
                infinite: false,
                //slidesToShow: 3,
                //variableWidth: true,
                responsive: [{
                        breakpoint: 9999,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 1025,
                        settings: {
                            //centerMode: true,
                            variableWidth: true,
                            //slidesToShow: 1,
                            arrows: false,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 650,
                        settings: {
                            //centerMode: true,
                            variableWidth: true,
                            //slidesToShow: 1,
                            arrows: false,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }

        if ("#wireframes") {
            $("#wireframes").slick({
                dots: false,
                arrows: false,
                speed: 300,
                infinite: false,
                //slidesToShow: 3,
                //variableWidth: true,
                responsive: [{
                        breakpoint: 9999,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 1025,
                        settings: {
                            //centerMode: true,
                            variableWidth: true,
                            //slidesToShow: 1,
                            arrows: false,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 650,
                        settings: {
                            //centerMode: true,
                            variableWidth: true,
                            //slidesToShow: 1,
                            arrows: false,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }

        if ("#diseno") {
            $("#diseno").slick({
                dots: false,
                arrows: false,
                speed: 300,
                infinite: false,
                //slidesToShow: 3,
                //variableWidth: true,
                responsive: [{
                        breakpoint: 9999,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 1025,
                        settings: {
                            //centerMode: true,
                            variableWidth: true,
                            //slidesToShow: 1,
                            arrows: false,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 650,
                        settings: {
                            //centerMode: true,
                            variableWidth: true,
                            //slidesToShow: 1,
                            arrows: false,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }

        if ("#test") {
            if ("#test") {
                $("#test").slick({
                    dots: false,
                    arrows: false,
                    speed: 300,
                    infinite: false,
                    //slidesToShow: 3,
                    //variableWidth: true,
                    responsive: [{
                            breakpoint: 9999,
                            settings: "unslick"
                        },
                        {
                            breakpoint: 650,
                            settings: {
                                //centerMode: true,
                                variableWidth: true,
                                //slidesToShow: 1,
                                arrows: false,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            }
        }
    }, 500);


    return `
        <div class="page2__main">
            ${content}
        </div>
    `
}