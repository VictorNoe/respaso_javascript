//Declaración de variables
/*
const name = "Victor Noe";
const lasname = "Flores Toledo"
var age = 21;
let height = 1.79;

const isMan = true;

if (isMan) {
    const name = 'Raul'
    console.log(name, lasname, age, height);
}
*/

//Templeante string
/*
const name = 'Victor Noe';
const lasname = 'Flores Toledo';
const isMan = true;
console.log(`Nombre completo: ${name} ${lasname} ${isMan ? 'Hombre' : 'Mujer'}`);
*/

//Arreglos
/*
const colors = [
    "Red",
    "Amarrillo",
    "Verde",
    "Azul"
]

colors.forEach((color) => {
    console.log(color);
});
*/

//1 persoba puede tener diferentes carros
//1 persona puede tener diferentes ubicaciones
//1 persona solo puede tener un campo nombre
//1 persona solo puede tener apellidos
//1 persona tiene decha de nacimiento, sexo como datos personales
//1 persona tiene nacionalidad, pero puede tener más de una por ser naturalizadas (siempre y cuando así sera
//1 persona puede tener número de cantidad de métodos de pago


/*
carro
metodo de pago
ubicaciones
nacionalidades
user
*/

const person = {
    id: 1,
    name: 'Victor Noe',
    lastname: 'Flores Toledo',
    sex: 'Male',
    birthday: '24 de noviembre',
    cars: [
        {
            id: 1,
            name: 'Camaro',
            price: 512000
        },
        {
            id: 1,
            name: 'Camaro',
            price: 512000
        }
    ],
    locations: [
        {
            street: 'Emiliano Zapata',
            state: 'Morelos',
            latitude: 'wdasdasd123',
            longitude: 'akjsdnsad'
        }
    ],
    payments: [
        {
            type: 'credit card',
            data: {
                numberCart: 423412344231234,
                cvv: 727,
                dateExpiration: '24/11/2024',
                propetary: 'Victor Noe Flores Toledo'
            }
        }
    ],
    nationalities: [
        {
            name: 'Mexicano',
            description: 'Hola'
        },
        {
            name: 'Peruana',
            description: 'Hola'
        }
    ]
}
