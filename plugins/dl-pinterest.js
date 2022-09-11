let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {

  if (!text) return conn.reply(m.chat, `Gunakan format: ${usedPrefix}${command} Colin Changed`, m)

  await conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/3a25d9ad52b57b1bae92c.jpg', 'Searching...', wm2, 'Owner', '.owner', m)
    let res = await fetch(`https://botcahx-rest-api.herokuapp.com/api/search/pinterest?text=${text}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let data = json.result
    let index = Math.floor(Math.random() * data.length)
    let object = data[index]
const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Search Pinterest 🔍`, 
    orderTitle: ``,
    thumbnail: await (await fetch('https://telegra.ph/file/264041d94248b191f4c13.jpg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    conn.sendButtonImg(m.chat, object, `Nih Kak @${m.sender.split`@`[0]}`, wm, 'Get Again', `!pinterest ${text}`, m, {
    quoted: ftrol, contextInfo: { forwardingScore: 99999, isForwarded: true,
         externalAdReply: { 
             title: global.wm,
             body: 'Apa Benar Ini Yang Kᴍᴜ Cari?',
             description: 'Apa Benar Ini Yang ᴋᴀᴍᴜ Cari?', 
             mediaType: 2, 
           thumbnail: await (await fetch('https://telegra.ph/file/264041d94248b191f4c13.jpg')).buffer(), 
          mediaUrl: `https://youtu.be/35w7` 
         } 
      } 
   })
}
handler.help = ['pinterest <keyword>'] 
 handler.premium = false 
 handler.tags = ['downloader'] 
 handler.command = /^(pinterest)$/i 
  
 module.exports = handler
