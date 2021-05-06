const listaTareas = new Array();

listaTareas = [{ 'idTarea': 0, 'titulo': 'Estudiar', 'prioridad': Urgente },
{ 'idTarea': 1, 'titulo': 'Dormir', 'prioridad': Diaria },
{ 'idTarea': 2, 'titulo': 'Pasear', 'prioridad': Mensual },
{
    'idTarea': 3, 'titulo': 'Hacer ejercicio', 'prioridad': Urgente
},
{ 'idTarea': 4, 'titulo': 'Comer', 'prioridad': Diaria },
{ 'idTarea': 5, 'titulo': 'Correr', 'prioridad': Mensual },
];

//Activación de elementos
let btnGuardar = document.querySelector('#guardar')
let inputTitulo = document.querySelector('#titulo')
let selectPrioridad = document.querySelector('#prioridad')
let ulTareas = document.querySelector('#ultareas')



if (textoTarea !== "" && seleccionTarea !== 0) {//Recoger tareas

    const tarea = new Tarea(inputId.value, inputTitulo.value, selectPrioridad.value);//Añadir tareas
    listaTareas.push(tarea)
    pintarTareas(listaTareas)
} else { alert('Todos los campos son obligatorios'); }

let contenidoul = "<ul>";
for (let i = 0; i < listaTareas.length; i++) {
    if (listaTareas[i].tareas < 6) {
        contenidoul += `<ul>
                                <li>${listaTareas[i].titulo}${listaTareas[i].prioridad}</li>
                                <li>Edad:${listaTareas[i].titulo}${listaTareas[i].prioridad}</li>
                                <li>Nota:${listaTareas[i].titulo}${listaTareas[i].prioridad}</li>
                                <li>Nota:${listaTareas[i].titulo}${listaTareas[i].prioridad}</li>
                                <li>Nota:${listaTareas[i].titulo}${listaTareas[i].prioridad}</li>
                                <li>Nota:${listaTareas[i].titulo}${listaTareas[i].prioridad}</li>
                            </ul>`;
    }
}
contenidoul += "</ul>";
console.log(contenidoul);