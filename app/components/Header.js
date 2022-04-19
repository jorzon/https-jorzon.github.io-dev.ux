export function Header() {
    const d = document,
        $header = d.createElement("div")

    $header.classList.add('page1__header')
    $header.innerHTML = `
            <section class="section1">
                <div class="section1__align">
                    <div class="section1__main">
                        <div class="item__list">
                            <div class="item ">
                                <div class="mobile-menu" id="menu">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div><span> <a href="index.html">Jorzon  Delgado </a></span>
                            </div>
                            <div class="item ">
                                <ul>
                                    <li><a href="#/">Proyectos</a></li>
                                    <li><a href="#/about">Acerca de mí</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section2" id="contentMenu">
                <div class="section2__align">
                    <div class="section2__main">
                        <div class="item__list">
                            <div class="item">
                                <div class="close" id="close"></div>
                                <ul>
                                    <li><a href="#/">Proyectos</a></li>
                                    <li><a href="#/about">Acerca de mí</a></li>
                                    <li><a href="tel:+51936022870">Contactar</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section3" id="bg"></section>
        `
    setTimeout(() => {

        const $close = d.getElementById("close"),
            $menu = d.getElementById("menu"),
            $bg = d.getElementById("bg"),
            $contentMenu = d.getElementById("contentMenu"),
            $body = d.querySelector('body')

        $menu.addEventListener("click", () => {
            $contentMenu.classList.add("active")
            $bg.classList.add("active")
            $body.style.overflow = 'hidden'

        });

        $close.addEventListener("click", () => {
            $contentMenu.classList.remove("active")
            $bg.classList.remove("active")
            $body.style.overflow = 'visible'
        });
    }, 100);

    return $header
}