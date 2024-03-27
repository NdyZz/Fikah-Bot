/**
 * Base By NdyZz [ github.com/NdyZz ]
 * Created On 8/3/2024
 * Contact Me on wa.me/6285346923840
*/

const fs = require('fs')
const { color } = require('./lib/myfunc')

//bot
global.NumberBot = '6283133318509'
global.nameBot = 'Fikah-MD'

//owner
global.owner = '6285346923840'
global.nomerowner = ["6285346923840"]

//watermark 
global.packname = 'Di Buat Oleh'
global.author = 'NdyZz'
global.foter1 = 'Simpel Bot Case'
global.foter2 = 'Created By Fikah-MD'
global.foter3 = 'DEADHEART'
global.foter4 = 'Fikah-MD Terverifikasi Oleh WhatsApp'
global.idcennel = ''
global.thumb = 'https://telegra.ph/file/e907252f8e99d6d45dd1d.jpg'

//database 
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo

//mess
global.mess = {
   success: '*_🤗Done_*',
   admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
   botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
   owner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
   group: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
   private: '_❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
   wait: '_*⏳ Sedang Di Proses !*_',
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})