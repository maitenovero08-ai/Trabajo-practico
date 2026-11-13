/* ==========================================
   ÍNDICE
   ========================================== */
const listaIndice = document.querySelector('aside.b ul');
const subtitulos = document.querySelectorAll('main h2');

subtitulos.forEach((subtitulo) => {
    const li = document.createElement('li');
    const enlace = document.createElement('a');
    enlace.href = `#${subtitulo.id}`;
    enlace.textContent = subtitulo.textContent;
    li.append(enlace);
    listaIndice.append(li);
});


/* ==========================================
   MODO OSCURO
   ========================================== */
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


/* ==========================================
   TAMAÑOS
   ========================================== */
const btnPequeno = document.querySelector('#btn-pequeno')
const btnEstandar = document.querySelector('#btn-estandar')
const btnGrande = document.querySelector('#btn-grande')
const articulo = document.querySelector('main')
const botonesTamanios = [btnPequeno, btnEstandar, btnGrande];

function limpiarTamanios() {
    articulo.classList.remove('texto-pequeno', 'texto-estandar', 'texto-grande');
}

// Dejar "Estándar" marcado por defecto al cargar la página
if (btnEstandar) {
    btnEstandar.classList.add('boton-activo');
    articulo.classList.add('texto-estandar');
}

if (btnPequeno && btnEstandar && btnGrande) {
    botonesTamanios.forEach(btn => {
        btn.addEventListener('click', function () {
            // Quitamos la clase a todos y la ponemos solo al clickeado
            botonesTamanios.forEach(b => b.classList.remove('boton-activo'));
            btn.classList.add('boton-activo');

            limpiarTamanios();
            if (btn === btnPequeno) articulo.classList.add('texto-pequeno');
            if (btn === btnEstandar) articulo.classList.add('texto-estandar');
            if (btn === btnGrande) articulo.classList.add('texto-grande');
        });
    });
}


/* ==========================================
   PLEGABLES
   ========================================== */
const secciones = document.querySelectorAll('main section');
secciones.forEach((seccion) => {
    const h2 = seccion.querySelector('h2');
    if (h2) {
        h2.addEventListener('click', function () {
            seccion.classList.toggle('plegada');
        });
    }
});


/* ==========================================
   DISCUSIÓN
   ========================================== */
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
        let mensajeError = ''; // Acá acumularemos los textos de error

        if (nombreVal === '') {
            hayError = true;
            mensajeError += 'El nombre no puede estar vacío. ';
            inputNombre.classList.add('campo-error');
        } else {
            inputNombre.classList.remove('campo-error');
        }

        if (comentarioVal.length < 10 || comentarioVal.length > 200) {
            hayError = true;
            // Sumamos el segundo mensaje en lugar de reemplazarlo
            mensajeError += 'El comentario debe tener entre 10 y 200 caracteres.';
            textComentario.classList.add('campo-error');
        } else {
            textComentario.classList.remove('campo-error');
        }

        if (hayError) {
            avisoForm.textContent = mensajeError.trim();
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

            li.append(strong);
            li.append(span);
            li.append(btnBorrar);
            listaComentarios.append(li);
            
            formDiscusion.reset();
            if (contadorCaracteres) {
                contadorCaracteres.textContent = '0/200';
            }
        }
    });
}