const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255748810865";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_16_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY0LFxuICAgICAgICAzNyxcbiAgICAgICAgODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg2LFxuICAgICAgICA0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDM3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NixcbiAgICAgICAgMjAyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NixcbiAgICAgICAgODcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDUzLFxuICAgICAgICA5NixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjksXG4gICAgICAgIDkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgODcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU3LFxuICAgICAgICAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTksXG4gICAgICAgIDMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgODgsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkd0JwQ3R2ZE9DS09vQ2RhK3c4T0o5UTRLRDNFKzQrWkcvWkY5Zm9VaEwwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjWmRqMjJuc1MybWx1ekJudlcxRDRBXCIsXG4gIFwicGhvbmVJZFwiOiBcImVlZjdkY2MwLTIzOGYtNGFjMC04MGYyLTBiY2I4MzMxNWI2ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDIxOCxcbiAgICAgIDMsXG4gICAgICAxMjMsXG4gICAgICAyMjUsXG4gICAgICAxNTgsXG4gICAgICAyMDMsXG4gICAgICAzMCxcbiAgICAgIDE3LFxuICAgICAgMyxcbiAgICAgIDI4LFxuICAgICAgMzMsXG4gICAgICAyNixcbiAgICAgIDg2LFxuICAgICAgMTIwLFxuICAgICAgMTQwLFxuICAgICAgMjAsXG4gICAgICA2MixcbiAgICAgIDIzOSxcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMyxcbiAgICAgIDIxMCxcbiAgICAgIDIxMSxcbiAgICAgIDIzMSxcbiAgICAgIDc0LFxuICAgICAgMTg5LFxuICAgICAgMTU0LFxuICAgICAgMjUsXG4gICAgICA5NixcbiAgICAgIDEyMSxcbiAgICAgIDk0LFxuICAgICAgOCxcbiAgICAgIDg2LFxuICAgICAgOTcsXG4gICAgICA2MSxcbiAgICAgIDIwMyxcbiAgICAgIDE4MCxcbiAgICAgIDYwLFxuICAgICAgOTMsXG4gICAgICA2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUMVhZRUs5WVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzQ4ODEwODY1OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNDc3NDcyOTg1NDk4ODo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pMTXBkc0NFUFN5dzdJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMDYwMFFkYjNSbE9EV2xhL1NJM2NuZkJCTGYyZXlHTkJEaUNqaTBpWmZWQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmdlVWa2J2eUlyd0dxQVpNVWpzVGcrQ05sVEgzc3pURFc2M29Pb1BhRDAzanhNLzRkQ0pRMklnUk8wSzNIT0dYS0RJV1FoMlg5Wmx5bEc4UlBEOHFCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxci9FWFZvelVocmVNV0ZWT2pac0YveS84K3Z1ZVF0ZWxWT003NU9jQW5KRURKcXd3L3ZqK2ZTeWF2YUNjbkg3ZWlxaGQxdzhkSjl6VjVEeVE3YXBEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NDg4MTA4NjU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjU3NDU4NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpEZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkRkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaUJLZHNRdE1ONGd5UWlncmRjY3hpY0lLUnJiZlVuUEh3YlRRUkN1UlQxbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MjgzMjc2OTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjU3NDU4NzQ4N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
