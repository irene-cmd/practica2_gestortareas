class Gestor {
    constructor(pId, pTitulo, pPrioridad) {
        this.id = pId;
        this.titulo = pTitulo;
        this.prioridad = pPrioridad;
    }
}

function completarTarea() {//setters
    this.completado = true;
}

function actualizar(pTitulo, pPrioridad) {
    if (pTitulo !== "") {
        this.titulo = pTitulo;
    }
    if (pPrioridad !== "") {
        this.prioridad = pPrioridad;
    }
}

function filtrarPorTarea(pDiaria, pUrgente) {//Filtrado
    const listaFiltradaPorPrioridad = tareas.filter(tarea => tarea.prioridad, pDiaria && tarea.prioridad <= pUrgente);
    console.log(listaFiltradaPorPrioridad);
    filtrarPorTarea(diaria, urgente);
}

function borrarTareas(event) {//Borrado
    const listaTareas = ['Estudiar', 'Dormir', 'Pasear', 'Hacer ejercicio', 'Comer', 'Correr'];
    console.log(listaTareas.pop());
    console.log(tareas);
    tareas.pop();
    console.log(tareas);
}


function pintarTarea(plistaTareas) {//Creación los elementos y activacion de botones de la app
    let ul = document.createElement('ul');
    let button = document.createElement('button');
    let buttonborrar = document.createElement('buttonborrar');
    let buttoncompletar = document.createElement('buttoncompletar');

    let contentul = document.createTextNode(plistaTareas);

    button.innerText = 'Guardar';
    buttonborrar.innerText = 'Borrar';
    buttoncompletar.innerText = 'Completar';
    Urgente.innerText = 'Urgente';
    Diaria.innerText = 'Diaria';
    Mensual.innerText = 'Mensual';
    ul.appendChild(contentul);
    li.appendChild(button);
    li.appendChild(buttonborrar);
    li.appendChild(buttoncompletar);

    //Color según grado de prioridad
    li.style.color = (this.prioridad === 'Urgente') ? 'pink' :
        li.style.color = (this.prioridad === 'Diaria') ? 'orange' :
            li.style.color = (this.prioridad === 'Mensual') ? 'yellow' :
                li.style.textDecoration = line - through;
    pSeccion.appendChild(li);

    (function () {
        // Variables
        var lista = document.getElementById("lista"),
            tareaInput = document.getElementById("tareaInput"),
            btnNuevaTarea = document.getElementById("btn-agregar");

        // Funciones
        var agregarTarea = function () {
            var tarea = tareaInput.value,
                nuevaTarea = document.createElement("li"),
                enlace = document.createElement("a"),
                contenido = document.createTextNode(tarea);
            if (tarea === "") {
                tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
                tareaInput.className = "error";
                return false;
            }

            // Agregamos el contenido al enlace
            enlace.appendChild(contenido);
            // Le establecemos un atributo href
            enlace.setAttribute("href", "#");
            // Agrergamos el enlace (a) a la nueva tarea (li)
            nuevaTarea.appendChild(enlace);
            // Agregamos la nueva tarea a la lista
            lista.appendChild(nuevaTarea);

            tareaInput.value = "";

            for (var i = 0; i <= lista.children.length - 1; i++) {
                lista.children[i].addEventListener("click", function () {
                    this.parentNode.removeChild(this);
                });
            }

        };
        var comprobarInput = function () {
            tareaInput.className = "";
            teareaInput.setAttribute("placeholder", "Agrega tu tarea");
        };

        var eleminarTarea = function () {
            this.parentNode.removeChild(this);
        };


        // Agregar Tarea
        btnNuevaTarea.addEventListener("click", agregarTarea);

        tareaInput.addEventListener("click", comprobarInput);

        // Borrando Elementos de la lista
        for (var i = 0; i <= lista.children.length - 1; i++) {
            lista.children[i].addEventListener("click", eleminarTarea);
        };


        buttoncompletar.addEventListener('click', () => {
            this.completarTarea();
            li.parentNode.removeChild(li);
        });

    })
}
