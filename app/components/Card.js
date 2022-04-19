export function Card(props) {

    let { slug, image, type, title } = props,
    $styles = document.getElementById('dynamic-style')

    $styles.innerHTML = `
    @media (max-width:1025px) {
        .page1__main  {
            height: calc(100vh - 127px);
            padding: 0 24px;
        }
    }
    
    @media (max-width:769px) {
        .page1__main  {
            height: calc(100vh - 146px)
        }
    }
    
    @media (max-width:650px) {
        .page1__main  {
            height: auto
        }
    }
    
    .page1__main   {
        width: 100%;
        max-width: 1100px;
        margin: 32px auto 24px;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        padding: 0px 0px 0px;
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
     
    
    }
    
    @media (max-width:650px) {
        .page1__main   {
           margin: 24px auto 16px;
        }
    }
    
    .page1__main .item {
        width: 49%;
        height: 300px;
        cursor: pointer;
        -webkit-border-radius: 8px 8px 8px 8px;
        -moz-border-radius: 8px 8px 8px 8px;
        border-radius: 8px 8px 8px 8px;
        margin-bottom: 16px;
        overflow: hidden;
        position: relative;
        -webkit-box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out;
        border: 1px solid #f5f5f5;
    }
    
    @media (max-width:1025px) {
        .page1__main   .item {
            height: 275px
        }
    }
    
    @media (max-width:769px) {
        .page1__main   .item {
            height: 200px
        }
    }
    
    @media (max-width:650px) {
        .page1__main   .item {
            height: 160px;
            width: 100%;
            margin-bottom: 24px;
        }
    }
    
    .page1__main   .item__image {
        width: 100%
    }
    
    .page1__main   .item__image img {
        width: 100%; -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out
    }
    
    .page1__main   .item:hover .item__info {
        opacity: 1;
        padding: 24px 24px 24px;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out
    }
    
    
    .page1__main:hover  .item__image img{
        filter: grayscale(100%) blur(2px);
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out
     
    }
    
    
    
    
    .page1__main   .item:hover .item__image img{
        filter: blur(0px) grayscale(0%);
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out
    
    }
    
    
    .page1__main   .item__info {
        position: absolute;
        padding: 48px 24px 24px;
        width: 100%;
        height: 100%;
        background: #0000009c;
        left: 0;
        top: 0;
        opacity: 0;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out
    }
    
    @media (max-width:1025px) {
        .page1__main   .item__info {
            display: none
        }
    }
    
    .page1__main   .item__info p {
        font-size: 14px;
        color: #ffffff;
        display: inline-block;
        width: 100%;
        margin-bottom: 4px;
        font-weight: 300
    }
    
    .page1__main   .item__info h3 {
        font-size: 20px;
        color: #ffffff;
        text-transform: uppercase;
        font-weight: 500;
        margin-bottom: 16px
    }
    
    .page1__main   .item__info span {
        font-size: 12px;
        padding: 8px 32px 8px 16px;
        -webkit-border-radius: 4px 4px 4px 4px;
        -moz-border-radius: 4px 4px 4px 4px;
        border-radius: 4px 4px 4px 4px;
        background: #ef173b;
        display: inline-block;
        color: #ffffff;
        position: relative;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out
    }
    
    .page1__main   .item__info span:before {
        content: '';
        position: absolute;
        top: 8px;
        right: 3px;
        width: 20px;
        height: 20px;
        background: red;
        background: url(../app/assets/images/svg/proximo.svg) no-repeat;
        background-size: 70%
    }
    
    .page1__main   .item__info span:hover {
        background: #bf0f2c;
        -webkit-transition: 0.3s ease-out;
        -o-transition: 0.3s ease-out;
        transition: 0.3s ease-out
    }
    
    `

    return `
        <div class="item ">
            <a href="${slug}">
                <div class="item__image"><img src="${image}"></div>
                <div class="item__info">
                    <p>${type}</p>
                    <h3>${title}</h3><span>Leer más</span>
                </div>
            </a>
        </div>
    `
}