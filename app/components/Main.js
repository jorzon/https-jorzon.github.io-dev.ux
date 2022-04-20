export function Main() {
    const $main = document.createElement('div')
    $main.id = 'main'
    $main.classList.add('page1__main')
    $main.innerHTML = ` <img style="    width: 400px; margin: auto; display: inherit; padding-top: 50px;" src="app/assets/images/loader.gif"> `
    return $main
}