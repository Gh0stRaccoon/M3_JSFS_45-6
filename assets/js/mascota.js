// OBJETOS
const mascota = {
    nombre: "Guliber Meridio III",
    tipo: "slime",
    energia: 50,
    saciedad: 50,
    estaVivo: true,
    aliases: ["Meri", "Guli"],
    outfit: {
        accesorio: "Sombrero de paja",
        cuerpo: "kimono rosado",
        pies: "zapatos nike"
    },
    comer: function () {

        if (!this.estaVivo) {
            console.log(`Oye oye... ${this.nombre} ya está muerto... no le puedes dar comida.`)
            return
        }

        this.energia += 60
        this.saciedad += 20

        if (this.energia > 100) {
            this.energia = 100
        }

        if (this.saciedad > 100) {
            // límite
            this.saciedad = 100
            console.log(`${this.nombre} ya no puede comer más... se puso a llorar :(`)
            return
        }

        this.estado()

    },
    jugar: function () {
        this.energia -= 20
        this.saciedad -= 20

        if (!this.estaVivo) {
            this.saciedad = 0
            this.energia = 0
            console.log(`${this.nombre} no puede jugar... está muerto. POR TU CULPA!`)
            return // early return
        }

        if (this.saciedad < 0) {
            this.saciedad = 0
            this.morir()
            return
        }

        if (this.energía < 0) {
            this.energía = 0
            console.log(`${this.nombre} no tiene energía suficiente :c`)
        }

        this.estado()
    },
    morir: function () {
        this.estaVivo = false
        console.log(`${this.nombre}, acaba de morir... a llorar :c`)
    },
    estado: function () {
        console.log(`${this.nombre} tiene ahora ${this.saciedad} puntos de saciedad y ${this.energia} puntos de energia`)
    }
}

const comidas = [
    {
        nombre: "Pollo",
        stock: 2,
        recupera: {
            saciedad: 20,
            energia: 10
        }
    },
    {
        nombre: "Queque mágico",
        stock: 1,
        recupera: {
            saciedad: 80,
            energia: 80
        }
    }
]

console.log(mascota.aliases[1])
console.log(mascota.outfit.accesorio)
console.log(mascota.estaVivo)
mascota.jugar()
mascota.comer(comidas[0])
mascota.comer()
mascota.comer()
mascota.comer()
mascota.comer()
mascota.comer()
mascota.jugar()
mascota.jugar()
mascota.jugar()
mascota.jugar()
mascota.jugar()
mascota.jugar()
mascota.jugar()
mascota.jugar()
mascota.jugar()
mascota.comer()
mascota.jugar()
