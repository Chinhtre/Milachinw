/*Deja los creditos no seas rata!

 Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [
['5493855062309', '𝓜𝓲𝓵𝓪𝓬𝓱𝓲𝓷 🎀', true], 
['5493855062309', 'Owner 🍧', true], 
['5492995868667'], '𝓜𝓲𝓵𝓪', true],
['00'], 
['00'], 
['00'], 
['00'], 
['00'], 
['00'], 
['00'], 
['00']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['5214531287294']
global.mods = []
global.prems = []

//Aqui encuentras los nombres del bot
global.packname = ''
global.author = '𝓜𝓲𝓵𝓪𝓬𝓱𝓲𝓷 🎀'
global.wm = '𝓜𝓲𝓵𝓪𝓬𝓱𝓲𝓷 🎀'
global.wm2 = '𝓜𝓲𝓵𝓪𝓬𝓱𝓲𝓷  : Bot'
global.azami = '𝓜𝓲𝓵𝓪 𝔂 𝓒𝓱𝓲𝓷𝔁'
global.cb = '𝓜𝓲𝓵𝓪𝓬𝓱𝓲𝓷 '

//Las Versiones Y Entre Otros
global.vs = 'V2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '𝓜𝓲𝓵𝓪 𝔂 𝓒𝓱𝓲𝓷𝔁'
global.devnum = '+44'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
