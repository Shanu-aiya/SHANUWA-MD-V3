const {cmd , commands} = require('../command')

cmd({
    pattern: ".alive",
    desc: "about",
    react: "💛",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
╒✦•============·•••••••••============•✦
💛හායි පැටියො මම හොදින්😊  
💛මම හොදින් ඔයාට කොහොමද ?😊  

=== QUEEN ISHU MD===

💛WELCOME TO QUEEN ISHU MD💛

⭕BOT CREATE= LAKSIDU NIMSARA💙
⭕BOT DISIGN= ADITHYA PRESAD💙

💛විධානැ ලැයිස්තුව ලබා ගැනිමට .menu ලෙස යොදා send කරන්න💙

===QUEEN ISHU MD ====
✦•============·•••••••••============•✦
`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/zQg9dzm/IMG-20241025-WA0018.jpg`},caption: desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})