//Accedemos al contenedor donde se mostrara los estudiantes
const containerEstudiantes = document.querySelector("#idContainerEstudiantes");

//Accedemos a cada boton por medio de la API DOM
const btnPromedio = document.querySelector("#idBtnPromedio");

//Agregamos el evento click a los botones, adicionalmente
//Se le asigna la funcion que realizará la operación
btnPromedio.addEventListener("click", generarEstudiantes);

function generarEstudiantes() {
    //Inicializamos un arreglo para guardar la informacion del estudiante
    let arrayEstudiante = new Array();

    let totalEstudiantes = document.querySelector("#inputNumeroEstudiantes").value;
    let cont = 1;

    //Utilizamos un while para recorrer el total de estudiantes
    let estudiante, calificacion, convertir = 0;
    while (cont <= totalEstudiantes) {
        estudiante = prompt(`Ingrese el nombre del estudiante ${cont}`);
        
        //Verificamos que sea un valor entero positivo
        do {
            calificacion = prompt(`Ingrese la calificación del estudiante ${cont}`);
            convertir = parseFloat(calificacion);
        } while (isNaN(convertir) || convertir < 0 || convertir > 10);

        //Asignando los valores al arreglo
        arrayEstudiante[cont - 1] = new Array(
            estudiante,
            parseFloat(calificacion).toFixed(2)
        );

        cont++;
    }

    //Recorriendo el arreglo con for..of
    //Verificamos cuál es el promedio de las calificaciones
    //Y cuál de los estudiantes posee la calificación más alta
    let calificacionAlta = 0,
        promedio = 0,
        posicion = 0;

    let listado = "<h3>Listado de estudiantes registrados:</h3>";
    listado += "<ul>";

    for (let indice in arrayEstudiante) {
        let nombre = arrayEstudiante[indice][0];
        let nota = arrayEstudiante[indice][1];

        //Imprimiendo lista de estudiantes
        listado += `<li><b>Nombre:</b> ${nombre} - <b>Calificación:</b> ${nota}</li>`;

        //Verificación de calificación más alta
        if (nota > calificacionAlta) {
            calificacionAlta = nota;
            posicion = indice;
        }

        //Calculando el promedio
        promedio += parseFloat(nota);
    }

    listado += "</ul>";

    listado += `<p><b>Promedio de calificaciones:</b> ${(promedio / arrayEstudiante.length).toFixed(2)}</p>`;
    listado += `<p><b>Estudiante con mejor calificación:</b> ${arrayEstudiante[posicion][0]}</p>`;

    //Imprimiendo resultado
    containerEstudiantes.innerHTML = listado;
}
