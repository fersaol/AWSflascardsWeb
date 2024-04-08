function codeCharger(page, id) {
  console.log('Script para cargar contenido ejecutado');
  fetch(page)
      .then(response => response.text())
      .then(html => {
          document.getElementById(id).innerHTML = html;
      })
      .catch(e => console.error(e))
}

export default codeCharger;
