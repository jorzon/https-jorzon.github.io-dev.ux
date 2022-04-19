export function Footer() {
    const $footer = document.createElement('div')

    $footer.classList.add('page1__footer')

    $footer.innerHTML = `
    <section class="section1">
        <div class="section1__align">
            <div class="section1__main">
            <div class="item__list">
                <div class="item ">
                <ul>
                    <li><a href="https://www.linkedin.com/in/jorzon-delgado-3a399a131/" target="_blank"><img src="app/assets/images/svg/linkedin.svg"></a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=+51936022870&amp;text=Hola" target="_blank"><img src="app/assets/images/svg/whatsapp.svg"></a></li>
                </ul>
                </div>
                <div class="item "><span>Diseñado y desarrollado por mi 🔥👽</span></div>
            </div>
            </div>
        </div>
    </section>
    `

    return $footer
}