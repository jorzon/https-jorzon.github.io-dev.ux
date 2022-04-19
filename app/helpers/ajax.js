export async function ajax(props) {
    let { url, cbSuccess } = props;

    await fetch(url)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => cbSuccess(json))
        .catch(err => {
            let message = err.statusText || "Ocurrio un error al acceder al API"
            document.getElementById('main').innerHTML = `
            <div>
                <p> Error: ${err.status} : ${message} </p>
            </div>
            `
        })
}