export function Main() {
    const $main = document.createElement('div'),
        $loader = document.createElement('img')
    $main.id = 'main'
    $main.classList.add('page1__main')
    $loader.setAttribute('src', './app/assets/images/loader.gif')
    $loader.setAttribute('id', 'loader')
    $loader.style.margin = 'auto'
    $loader.style.paddingTop = '50px'
    $loader.style.width = '60px'

    $main.appendChild($loader)

    return $main
}