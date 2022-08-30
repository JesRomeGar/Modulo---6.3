/*
Crear un array vacío de longitud n:

var myEmptyArray = new Array(3); // Array vacio de 3 posiciones.
console.log(myEmptyArray); // [empty × 3]


Rellenar todas las posiciones de un array con el mismo valor:

var myArray = new Array(3); // Array vacio de 3 posiciones.
myArray.fill("Hola");
console.log(myArray); // ["Hola", "Hola", "Hola]


En una sola línea equivaldría a:

var myArray = new Array(3).fill("Hola");
console.log(myArray); // ["Hola","Hola","Hola"]
*/


// Constantes
var workHours = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
var myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];



// Generación aleatoria de disponibilidad


var randomAvailability = () => (Math.random() < 0.5 ? true : false);

for (let member of myTeam) {
    console.log("Disponibilidad de ", member.name, ":");

    for (let i = 0; i < member.availability.length; i++) {
        member.availability[i] = randomAvailability();

        if (member.availability[i] === true) {
            console.log(workHours[i], "si");
        }
        else {
            console.log(workHours[i], "no");

        }
    }
}


// Buscar hueco libre


var buscadorHorasLibres = () => {

    var huecoLibre = []


    for (var i = 0; i < myTeam.length; i++) {
        for (let x = 0; x < myTeam[i].availability.length; x++) {
            if (myTeam[i].availability[x] === true) {
                huecoLibre.push(x)

            }

        }
    }

    var huecoLibreOrdenado = huecoLibre.sort()
    console.log(huecoLibreOrdenado)
    for (var i = 0; i <= 8; i++) {
        var result = huecoLibreOrdenado.filter((element) => element == i);

        if (result.length == myTeam.length) {
            return "Hueco libre disponible: " + workHours[i];
        }
    }
    return "No hay hueco libre";
};
console.log(buscadorHorasLibres());
