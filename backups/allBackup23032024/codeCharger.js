

  function codeCharger(page, id) {
    console.log('Script para cargar contenido ejecutado');
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        });
}

export default codeCharger;
