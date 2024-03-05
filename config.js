/*Deja los creditos no seas rata!

 Credits to:
* 𝓜𝓲𝓵𝓪
* 𝓒𝓱𝓲𝓷𝔁
* 𝓜𝓲𝓵𝓪𝓬𝓱𝓲𝓷 🎀 */

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
global.author = 'CuriosityBot'
global.wm = '© CuriosityBot-MD'
global.wm2 = 'Curiosity : Bot'
global.azami = 'Azami'
global.cb = 'CuriosityBot'

//Las Versiones Y Entre Otros
global.vs = 'V2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '¿Azami ~ Zam?'
global.devnum = '+591 62714296'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
