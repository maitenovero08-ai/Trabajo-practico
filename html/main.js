const listaIndice = document.querySelector('aside.b ul');
const subtitulos = document.querySelectorAll('main h2');

subtitulos.forEach((subtitulo) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${subtitulo.id}`;
    a.textContent = subtitulo.textContent;
    li.appendChild(a);
    listaIndice.appendChild(li);
});


const botonModo = document.querySelector('#modo-oscuro')
if (botonModo) {
    botonModo.addEventListener('click', function() {
        document.body.classList.toggle('oscuro')
        if (document.body.classList.contains('oscuro')) {
            botonModo.textContent = 'Modo Claro'
        } else {
            botonModo.textContent = 'Modo Oscuro'
        }
    })
}


const btnPequeno = document.querySelector('#btn-pequeno')
const btnEstandar = document.querySelector('#btn-estandar')
const btnGrande = document.querySelector('#btn-grande')
const articulo = document.querySelector('main')


function limpiarTamanios() {
    articulo.classList.remove('texto-pequeno', 'texto-estandar', 'texto-grande');
}


if (btnPequeno && btnEstandar && btnGrande) {
    btnPequeno.addEventListener('click', function () {
        limpiarTamanios();
        articulo.classList.add('texto-pequeno');
    });


    btnEstandar.addEventListener('click', function () {
        limpiarTamanios();
        articulo.classList.add('texto-estandar');
    });


    btnGrande.addEventListener('click', function () {
        limpiarTamanios();
        articulo.classList.add('texto-grande');
    });
}
