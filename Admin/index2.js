const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');
const sections = document.querySelectorAll('main.section');

sideLinks.forEach(item => {
    const li = item.parentElement;
    const sectionId = item.dataset.section;
    item.addEventListener('click', (e) => {
        e.preventDefault();
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        });
        li.classList.add('active');

        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos todas las secciones del contenido principal
    const sections = document.querySelectorAll('main.section');
    
    // Iteramos sobre todas las secciones
    sections.forEach(section => {
        // Quitamos la clase 'active' de todas las secciones
        section.classList.remove('active');
    });

    // Obtenemos la sección "A la Linguini" y le añadimos la clase 'active'
    const alaLinguiniSection = document.getElementById('inicio');
    alaLinguiniSection.classList.add('active');
});


const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const addIngredientBtn = document.getElementById('add-ingredient-btn');
    const modal = document.getElementById('ingredient-modal');
    const closeModalBtn = document.querySelector('.modal .close');
    const ingredientForm = document.getElementById('ingredient-form');
    const ingredientsTable = document.getElementById('ingredients-table').querySelector('tbody');
    let editMode = false;
    let editRow = null;

    addIngredientBtn.addEventListener('click', () => {
        editMode = false;
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        ingredientForm.reset();
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            ingredientForm.reset();
        }
    });

    ingredientForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('ingredient-name').value;
        const quantity = document.getElementById('ingredient-quantity').value;

        if (editMode) {
            editRow.querySelector('.name').textContent = name;
            editRow.querySelector('.quantity').textContent = quantity;
        } else {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="name">${name}</td>
                <td class="quantity">${quantity}</td>
                <td class="actions">
                    <button class="btn-edit">Editar</button>
                    <button class="btn-delete">Eliminar</button>
                </td>
            `;
            ingredientsTable.appendChild(row);

            const editBtn = row.querySelector('.btn-edit');
            const deleteBtn = row.querySelector('.btn-delete');

            editBtn.addEventListener('click', () => {
                editMode = true;
                editRow = row;
                document.getElementById('ingredient-name').value = row.querySelector('.name').textContent;
                document.getElementById('ingredient-quantity').value = row.querySelector('.quantity').textContent;
                modal.style.display = 'block';
            });

            deleteBtn.addEventListener('click', () => {
                row.remove();
            });
        }

        modal.style.display = 'none';
        ingredientForm.reset();
    });
});

/**INICIA INGREDIENTES */
// JS for Ingredientes Section
document.addEventListener('DOMContentLoaded', () => {
    const addIngredientBtn = document.getElementById('add-ingredient-btn');
    const modifyButtons = document.querySelectorAll('.modify-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');

    addIngredientBtn.addEventListener('click', () => {
        // Logic to add a new ingredient
        alert('Agregar nuevo ingrediente');
    });

    modifyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const ingredientRow = e.target.closest('tr');
            const ingredientId = ingredientRow.children[0].innerText;
            // Logic to modify the ingredient
            alert(`Modificar ingrediente ID: ${ingredientId}`);
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const ingredientRow = e.target.closest('tr');
            const ingredientId = ingredientRow.children[0].innerText;
            // Logic to delete the ingredient
            alert(`Eliminar ingrediente ID: ${ingredientId}`);
        });
    });
});

/**TERMINA INGREDIENTES */

/**INICIA RECETAS */
document.addEventListener('DOMContentLoaded', function () {
    const tablaRecetas = document.querySelector('.recetas table');
    const previsualizacionUsuario = document.getElementById('usuario');
    const previsualizacionNombreReceta = document.getElementById('nombre-receta');
    const previsualizacionFechaAñadido = document.getElementById('fecha-anadido');

    tablaRecetas.addEventListener('click', function (event) {
        const fila = event.target.closest('tr');
        if (!fila) return;

        const usuario = fila.cells[0].textContent;
        const nombreReceta = fila.cells[1].textContent;
        const fechaAñadido = fila.cells[2].textContent;

        previsualizacionUsuario.textContent = usuario;
        previsualizacionNombreReceta.textContent = nombreReceta;
        previsualizacionFechaAñadido.textContent = fechaAñadido;
    });
});
/**TERMINA RECETAS */

/**INICIA REPORTES */
document.addEventListener('DOMContentLoaded', function () {
    const tablaReportes = document.querySelector('.reportes table');
    const motivo = document.getElementById('motivo');
    const comentario = document.getElementById('comentario');
    const autor = document.getElementById('autor');

    tablaReportes.addEventListener('click', function (event) {
        const fila = event.target.closest('tr');
        if (!fila) return;

        const motivoReporte = fila.cells[0].textContent;
        const comentarioReporte = fila.cells[1].textContent;
        const autorReporte = fila.cells[2].textContent;

        motivo.textContent = motivoReporte;
        comentario.textContent = comentarioReporte;
        autor.textContent = autorReporte;
    });
});
/**TERMINA REPORTES */

/**INICIA USUARIOS */
// Este es solo un ejemplo básico de cómo podrías agregar funcionalidad con JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const altaUsuarioBtn = document.querySelector('.alta-usuario');
    const modificarUsuarioBtn = document.querySelector('.modificar-usuario');
    const eliminarUsuarioBtn = document.querySelector('.eliminar-usuario');

    altaUsuarioBtn.addEventListener('click', function () {
        // Aquí iría tu lógica para dar de alta un usuario
        alert('Función de dar de alta usuario aún no implementada');
    });

    modificarUsuarioBtn.addEventListener('click', function () {
        // Aquí iría tu lógica para modificar un usuario
        alert('Función de modificar usuario aún no implementada');
    });

    eliminarUsuarioBtn.addEventListener('click', function () {
        // Aquí iría tu lógica para eliminar un usuario
        alert('Función de eliminar usuario aún no implementada');
    });
});
/**TERMINA USUARIOS */

/**INICIA CONFIGURACIÓN */
// Este es solo un ejemplo básico de cómo podrías agregar funcionalidad con JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const colorPicker = document.getElementById('color-picker');
    const nombreInput = document.getElementById('nombre');
    const contraseñaInput = document.getElementById('contraseña');
    const fotoInput = document.getElementById('foto');
    
    colorPicker.addEventListener('change', function () {
        // Aquí iría tu lógica para cambiar el color principal de la página
        document.body.style.backgroundColor = colorPicker.value;
    });

    // Simulación de edición de datos del administrador
    const editarBtns = document.querySelectorAll('.editar-btn');
    editarBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const input = btn.parentElement.querySelector('input');
            input.disabled = !input.disabled;
        });
    });
});
/**TERMINA CONFIGURACIÓN */