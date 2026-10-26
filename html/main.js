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
const secciones = document.querySelectorAll('main section');
secciones.forEach((seccion) => {
    const h2 = seccion.querySelector('h2');
    if (h2) {
        h2.addEventListener('click', function () {
            seccion.classList.toggle('plegada');
        });
    }
});

const formDiscusion = document.querySelector('#form-discusion');
const inputNombre = document.querySelector('#nombre');
const textComentario = document.querySelector('#comentario');
const contadorCaracteres = document.querySelector('#contador-caracteres');
const avisoForm = document.querySelector('#aviso-form');
const listaComentarios = document.querySelector('#lista-comentarios');

if (textComentario && contadorCaracteres) {
    textComentario.addEventListener('input', function () {
        const caracteresActuales = textComentario.value.length;
        contadorCaracteres.textContent = `${caracteresActuales}/200`;
    });
}

if (formDiscusion) {
    formDiscusion.addEventListener('submit', function (e) {
        e.preventDefault();
        const nombreVal = inputNombre.value.trim();
        const comentarioVal = textComentario.value.trim();
        let hayError = false;
        let mensajeError = '';

        if (nombreVal === '') {
            hayError = true;
            mensajeError = 'El nombre no puede estar vacío.';
            inputNombre.classList.add('campo-error');
        } else {
            inputNombre.classList.remove('campo-error');
        }

        if (comentarioVal.length < 10 || comentarioVal.length > 200) {
            hayError = true;
            mensajeError = 'El comentario debe tener entre 10 y 200 caracteres.';
            textComentario.classList.add('campo-error');
        } else {
            textComentario.classList.remove('campo-error');
        }

        if (hayError) {
            avisoForm.textContent = mensajeError;
        } else {
            avisoForm.textContent = '';
            inputNombre.classList.remove('campo-error');
            textComentario.classList.remove('campo-error');
            
            const li = document.createElement('li');
            const strong = document.createElement('strong');
            strong.textContent = nombreVal + ': ';

            const span = document.createElement('span');
            span.textContent = comentarioVal;
            
            const btnBorrar = document.createElement('button');
            btnBorrar.textContent = 'Borrar';
            btnBorrar.addEventListener('click', function () {
                li.remove();
            });

            li.appendChild(strong);
            li.appendChild(span);
            li.appendChild(btnBorrar);
            listaComentarios.appendChild(li);
            
            formDiscusion.reset();
            if (contadorCaracteres) {
                contadorCaracteres.textContent = '0/200';
            }
        }
    });
}