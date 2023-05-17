// acak angka dari komputer
import promptSync from 'prompt-sync'

const prompt = promptSync()

const min = 1
const max = 10

const hasil = () => {

let angkaRahasia = Math.floor(Math.random() * max) + min


const tebakan = prompt("Masukan Angka 1 - 10 ! : ")

if (tebakan > max || tebakan < min) {
    return console.log("Masukan Angka Valid!")
}

if(tebakan > angkaRahasia){
     return console.log(`Angka Kamu (${tebakan}) Lebih Besar daripada Angka Lawan (${angkaRahasia})`)
} else if (tebakan < angkaRahasia){
     return console.log(`Angka Kamu (${tebakan}) Lebih Kecil Daripada Angka Lawan (${angkaRahasia})`)
} else {
     return console.log(`Selamat Tebakan Kamu Benar! = Angka Kamu (${tebakan}) - Angka Lawan (${angkaRahasia})`)
}
}

hasil()