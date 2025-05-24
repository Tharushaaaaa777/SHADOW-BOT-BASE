const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../lib/functions')

cmd({
    pattern: "menu2",
    react: "📂",
    desc: "Check bot Commands.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { reply, prefix }) => {
    try {

        let teksnya = `
 🅷🅴🅻🅻🅾 🆆🅴🅻🅲🅾🅼🅴 🆃🅾 🆃🅷🅰🆁🆄🆂🅷🅰-🅼🅳,
*╭────────────────────●●►*
*| 🛠️  ᴠᴇʀᴛɪᴏɴ:* ${require("../package.json").version}
*| 📡  ᴍᴇᴍᴏʀʏ:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*| ⏱️  ʀᴜɴᴛɪᴍᴇ:* ${runtime(process.uptime())}
*╰─────────────────────●●►*
*ᴛʜᴀʀᴜꜱʜᴀ-ᴍᴅ ᴍᴇɴᴜ  ʟɪꜱᴛ 🤤* `;

        let imageUrl = "https://i.ibb.co/ByN33Zx/b776be1f09d94bc6.jpg";

        let vpsOptions = [
            { title: "ᴏᴡɴᴇʀ ᴍᴇɴᴜ 👤", description: "Bot Owner Only Commands", id: `${prefix}ownermenu` },
            { title: "ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ 📥", description: "Get Bot Download Menu", id: `${prefix}downloadmenu` },
            { title: "ᴍᴏᴠɪᴇ ᴍᴇɴᴜ 🎥", description: "Get Bot Movie Menu", id: `${prefix}moviemenu` },
            { title: "ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ 🫧", description: "Get Bot Convert Menu", id: `${prefix}convertmenu` },
            { title: "ɢʀᴏᴜᴘ ᴍᴇɴᴜ 👥", description: "Get Group Only Commands", id: `${prefix}groupmenu` },
            { title: "ᴀɪ ᴍᴇɴᴜ 🤖", description: "Get Bot AI Commands List", id: `${prefix}aimenu` },
            { title: "ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ 🔍", description: "Get Bot Search Menu", id: `${prefix}searchmenu` },
            { title: "ꜰᴜɴ ᴍᴇɴᴜ 😂", description: "Fun Joke Menu Bot", id: `${prefix}funmenu` },
            { title: "ʙᴜɢ ᴍᴇɴᴜ ☠️", description: "Owner Only Bug Menu", id: `${prefix}bugmenu` },
            { title: "ʀᴀɴᴅᴏᴍ ᴍᴇɴᴜ 🫟", description: "Random Commands Menu", id: `${prefix}randommenu` }
        ];

        let buttonSections = [
            {
                title: "List of THARUSHA-MD Bot Commands",
                highlight_label: "THARUSHA-MD",
                rows: vpsOptions
            }
        ];

        let buttons = [
            {
                buttonId: "action",
                buttonText: { displayText: "Select Menu" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                        title: "Select a menu tab 🤤",
                        sections: buttonSections
                    })
                }
            }
        ];

        conn.sendMessage(m.chat, {
            buttons,
            headerType: 1,
            viewOnce: true,
            caption: teksnya,
            image: { url: imageUrl },
            contextInfo: {
                mentionedJid: [m.sender], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '@newsletter',
                    newsletterName: `𝐓𝐇𝐀𝐑𝐔𝐒𝐇𝐀-𝐌𝐃`,
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
