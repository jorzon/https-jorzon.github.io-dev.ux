import { App } from "./App.js"
document.addEventListener('DOMContentLoaded', App)
window.addEventListener('hashchange', function() {
    App()
})