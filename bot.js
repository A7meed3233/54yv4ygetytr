const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
client.setMaxListeners(100)
const prefix = '!!'

 

 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`!!help | !!invite`,"https://www.twitch.tv/dggamingbot")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});





client.on("message", message =>{//Baron#1500
//السطر ال تحت لمنع تكرار انشاء الرتب لو عاوز تغير اسم الرتب غيرها وحط اسمها فى السطر ال تحت كمان علشان ميحصلش سبام
let roles = message.guild.roles.find(all=> all.name === "⇁『KiNG 』‏‏༄  ❥", "⇁『LEADER』‏‏༄  ❥", "⇁『BiG BOSS 』‏‏༄  ❥", "⇁『CAPTAIN 』‏‏༄  ❥", "⇁『SERGEANT 』‏‏༄  ❥",
"⇁『youtuber 』‏‏༄  ❥", "⇁『ACTIVE 』‏‏༄  ❥");//Baron#1500
if(message.content.startsWith(prefix + "roles")) {//Baron#1500
  if(message.author.bot) return;//Baron#1500
  if(roles) return message.reply('**الرتب موجوده بالفعل**')//Baron#1500
  //دى بقا الرتب ال انت عاوزو يعملها
  let roleking = message.guild.roles.find(r => r.name === "⇁『KiNG 』‏‏༄  ❥");//Baron#1500
  if(!roleking) {
  message.guild.createRole({//Baron#1500
  name: '⇁『KiNG 』‏‏༄  ❥',
  color: 'RANDOM',
  position: (1),
  hoist: (true),
  permissions: 'ADMINISTRATOR'
})
  }
let roleleader = message.guild.roles.find(r => r.name === "⇁『LEADER』‏‏༄  ❥");//Baron#1500
if(!roleleader) {
 message.guild.createRole({//Baron#1500
    name: '⇁『LEADER』‏‏༄  ❥',//Baron#1500
    color: 'RANDOM',
    position: (2),//Baron#1500
    hoist: (true),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
}//Baron#1500
let rolebigboss = message.guild.roles.find(r => r.name === "⇁『BiG BOSS 』‏‏༄  ❥");//Baron#1500
if(!rolebigboss) {//Baron#1500
  message.guild.createRole({
    name: '⇁『BiG BOSS 』‏‏༄  ❥',
    color: 'RANDOM',
     position: (3),//Baron#1500
     hoist: (true),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
})
}//Baron#1500
let rolecaptain = message.guild.roles.find(r => r.name === "⇁『CAPTAIN 』‏‏༄  ❥");//Baron#1500
if(!rolecaptain) {//Baron#1500
message.guild.createRole({
    name: '⇁『CAPTAIN 』‏‏༄  ❥',
    color: 'RANDOM',
    postion: (4),
    hoist: (true),//Baron#1500
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
}
let rolesergant = message.guild.roles.find(r => r.name === "⇁『SERGEANT 』‏‏༄  ❥");//Baron#1500
if(!rolesergant) {
 message.guild.createRole({
    name: '⇁『SERGEANT 』‏‏༄  ❥',
    color: 'RANDOM',//Baron#1500
    postion: (5),
    hoist: (true),//Baron#1500
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
}//Baron#1500
let roleyoutuber = message.guild.roles.find(r => r.name === "⇁『youtuber 』‏‏༄  ❥");
if(!roleyoutuber) {//Baron#1500
  message.guild.createRole({
    name: '⇁『youtuber 』‏‏༄  ❥',
    color: 'RANDOM',
    postion: (6),
    hoist: (true),//Baron#1500
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
    'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
}
let roleactive = message.guild.roles.find(r => r.name === "⇁『ACTIVE 』‏‏༄  ❥");//Baron#1500
if(!roleactive) {//Baron#1500
 message.guild.createRole({
  name: '⇁『ACTIVE 』‏‏༄  ❥',
  color: 'RANDOM',
  postion: (7),
  hoist: (true),//Baron#1500
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',//Baron#1500
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']//Baron#1500
})
message.guild.createRole({//Baron#1500
  name: 'Fortnite',
  color: 'RANDOM',//Baron#1500
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',//Baron#1500
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']//Baron#1500
})
message.guild.createRole({//Baron#1500
  name: 'playerunknowns',
  color: 'RANDOM',
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']//Baron#1500
})//Baron#1500
message.guild.createRole({
  name: 'counter-strike',
  color: 'RANDOM',//Baron#1500
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})//Baron#1500
message.guild.createRole({
  name: 'creative-destruction',//Baron#1500
  color: 'RANDOM',
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({//Baron#1500
  name: 'overwatch',
  color: 'RANDOM',
  postion: (7),//Baron#1500
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})//Baron#1500
message.guild.createRole({
  name: 'minecraft',//Baron#1500
  color: 'RANDOM',
  postion: (7),//Baron#1500
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})//Baron#1500
message.guild.createRole({//Baron#1500
  name: 'league-of-legends',
  color: 'RANDOM',//Baron#1500
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})//Baron#1500
message.channel.send(message.member + '**جارى انشاء الرتب**').then((m)=> {
  setTimeout(() => {//Baron#1500
    m.edit('**تم انشاء الرتب بنجاح**')
  }, 3000);//Baron#1500
})
}//Baron#1500
}
})//Baron#1500
client.on("message", message =>{
  let roleyoutuber = message.guild.roles.find(r => r.name === "⇁『youtuber 』‏‏༄  ❥");
  let rolepubg = message.guild.roles.find(r => r.name === "playerunknowns");
  let rolecsgo = message.guild.roles.find(r => r.name === "counter-strike");
  let rolecd = message.guild.roles.find(r => r.name === "creative-destruction");
  let roleow = message.guild.roles.find(r => r.name === "overwatch");
  let rolemc = message.guild.roles.find(r => r.name === "minecraft");
  let rolelol = message.guild.roles.find(r => r.name === "league-of-legends");
  let rolefortnite = message.guild.roles.find(r => r.name === "Fortnite");
//Baron#1500
  let roles = message.guild.roles.find(all=> all.name === "⇁『KiNG 』‏‏༄  ❥", "⇁『LEADER』‏‏༄  ❥", "⇁『BiG BOSS 』‏‏༄  ❥", "⇁『CAPTAIN 』‏‏༄  ❥", "⇁『SERGEANT 』‏‏༄  ❥",
"⇁『youtuber 』‏‏༄  ❥", "⇁『ACTIVE 』‏‏༄  ❥");//Baron#1500
  if(message.content.startsWith(prefix + "channels")) {
if(!roles) return message.reply("**من فضلك قم بانشاء الرتب اولا اكتب !!roles**")//Baron#1500
if(roles) {//Baron#1500
message.reply("**جارى انشاء الرومات**").then((c)=> {//Baron#1500
setTimeout(() => {
  c.edit("**تم انشاء الرومات بنجاح**")//Baron#1500
}, 10000);
})
message.guild.createChannel(`${message.guild.name}-TEXT` , 'category').then(tb => {//Baron#1500
  message.guild.createChannel('welcome' , 'text').then(nws => {
    nws.setParent(tb);
    nws.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false,
      MENTION_EVERYONE: false//Baron#1500
})
  })
  message.guild.createChannel('info' , 'text').then(inf => {//Baron#1500
    inf.setParent(tb);//Baron#1500
    inf.overwritePermissions(message.guild.id, {//Baron#1500
      SEND_MESSAGES: false,
      MENTION_EVERYONE: false//Baron#1500
})
  })
    message.guild.createChannel('news' , 'text').then(nws => {//Baron#1500
      nws.setParent(tb);
      nws.overwritePermissions(message.guild.id, {//Baron#1500
        SEND_MESSAGES: false,
        MENTION_EVERYONE: false//Baron#1500
})
    })//Baron#1500
      message.guild.createChannel('chat' , 'text').then(cht => {//Baron#1500
        cht.setParent(tb);
        cht.overwritePermissions(message.guild.id, {
          MENTION_EVERYONE: false//Baron#1500
  })
      })
        message.guild.createChannel('bot-commands' , 'text').then(cmd => {//Baron#1500
          cmd.setParent(tb);
          cmd.overwritePermissions(message.guild.id, {//Baron#1500
            MENTION_EVERYONE: false//Baron#1500
    })
        })
          message.guild.createChannel('youtubers' , 'text').then(yt => {//Baron#1500
            yt.setParent(tb);//Baron#1500
            yt.overwritePermissions(roleyoutuber, {
              SEND_MESSAGES: true
          })
          yt.overwritePermissions(message.guild.id, {//Baron#1500
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          })
          })//Baron#1500
          message.guild.createChannel('pic' , 'text').then(pic => {//Baron#1500
            pic.setParent(tb);
            pic.overwritePermissions(message.guild.id, {
              MENTION_EVERYONE: false
      })
          })
            message.guild.createChannel('cut-tweet' , 'text').then(cut => {
              cut.setParent(tb);
              cut.overwritePermissions(message.guild.id, {
                MENTION_EVERYONE: false
        })//Baron#1500
            })
  })
  message.guild.createChannel(`Games-Chat` , 'category').then(tb => {//Baron#1500
  message.guild.createChannel('Fortnite' , 'text').then(wlc => {
    wlc.setParent(tb);
    wlc.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
  })//Baron#1500
  wlc.overwritePermissions(rolefortnite, {
    SEND_MESSAGES: true,
    MENTION_EVERYONE: false
})
  })//Baron#1500
  message.guild.createChannel('playerunknowns' , 'text').then(ch => {//Baron#1500
    ch.setParent(tb);
    ch.overwritePermissions(message.guild.id, {//Baron#1500
      SEND_MESSAGES: false,
      MENTION_EVERYONE: false
})
ch.overwritePermissions(rolepubg, {//Baron#1500
  SEND_MESSAGES: true,
  MENTION_EVERYONE: false//Baron#1500
})
  })
    message.guild.createChannel('counter-strike' , 'text').then(ch => {//Baron#1500
      ch.setParent(tb);
      ch.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false,//Baron#1500
        MENTION_EVERYONE: false
})
ch.overwritePermissions(rolecsgo, {
  SEND_MESSAGES: true,
  MENTION_EVERYONE: false
})//Baron#1500
    })
      message.guild.createChannel('creative-destruction' , 'text').then(ch => {//Baron#1500
        ch.setParent(tb);
        ch.overwritePermissions(rolecd, {
          SEND_MESSAGES: true,//Baron#1500
          MENTION_EVERYONE: false
      })
      ch.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false,
        MENTION_EVERYONE: false
      })//Baron#1500
      })
        message.guild.createChannel('overwatch' , 'text').then(ch => {//Baron#1500
          ch.setParent(tb);
          ch.overwritePermissions(roleow, {
            SEND_MESSAGES: true,//Baron#1500
            MENTION_EVERYONE: false
        })
        ch.overwritePermissions(message.guild.id, {
          SEND_MESSAGES: false,
          MENTION_EVERYONE: false
        })//Baron#1500
        })
          message.guild.createChannel('minecraft' , 'text').then(ch => {//Baron#1500
            ch.setParent(tb);
            ch.overwritePermissions(rolemc, {
              SEND_MESSAGES: true,
              MENTION_EVERYONE: false
          })
          ch.overwritePermissions(message.guild.id, {//Baron#1500
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          })
          })//Baron#1500
          message.guild.createChannel('league-of-legends' , 'text').then(ch => {
            ch.setParent(tb);//Baron#1500
            ch.overwritePermissions(rolelol, {
              SEND_MESSAGES: true,
              MENTION_EVERYONE: false
          })//Baron#1500
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false//Baron#1500
          })
          })
  })
  message.guild.createChannel(`.${message.guild.name} | 🔊 .` , 'category').then(tb => {//Baron#1500
  message.guild.createChannel('「الـقـرأن الـكـريــم | 📜」' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.overwritePermissions(message.guild.id, {
      SPEAK: false//Baron#1500
})
message.guild.createChannel('「Events | 🎲 .」' , 'voice').then(ch => {
  ch.setParent(tb);
  ch.setUserLimit(50)//Baron#1500
  ch.overwritePermissions(message.guild.id, {
    SPEAK: false,
//Baron#1500
})
})
  })
})
message.guild.createChannel(`.Talking | ✋🏽 .` , 'category').then(tb => {
  message.guild.createChannel(`「${message.guild.name} | 🔊 .」` , 'voice').then(ch => {//Baron#1500
    ch.setParent(tb);
    ch.setUserLimit(50)//Baron#1500
})
message.guild.createChannel('「Sounds | ♫ .」' , 'voice').then(ch => {//Baron#1500
  ch.setParent(tb);
  ch.setUserLimit(50)//Baron#1500
})
  })
  message.guild.createChannel(`» Games | الالعاب .` , 'category').then(tb => {//Baron#1500
    message.guild.createChannel(`Fortnite | فورتنآيت .` , 'voice').then(ch => {
      ch.setParent(tb);//Baron#1500
      ch.overwritePermissions(message.guild.id, {
        CONNECT: false,
   
    })
    ch.overwritePermissions(rolefortnite, {
      CONNECT: true,//Baron#1500
 
  })
  })//Baron#1500
  message.guild.createChannel('Minecraft | مآينكرآفت' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.overwritePermissions(message.guild.id, {//Baron#1500
      CONNECT: false,
 
  })
  ch.overwritePermissions(rolemc, {//Baron#1500
    CONNECT: true,
 
})
  })//Baron#1500
  message.guild.createChannel(`Creative | كريآتف .` , 'voice').then(ch => {
    ch.setParent(tb);//Baron#1500
    ch.overwritePermissions(message.guild.id, {
      CONNECT: false,
 
  })
  ch.overwritePermissions(rolecd, {
    CONNECT: true,//Baron#1500
 
})
})
message.guild.createChannel('Legends | لوول' , 'voice').then(ch => {//Baron#1500
  ch.setParent(tb);
  ch.overwritePermissions(message.guild.id, {
    CONNECT: false,
 
})//Baron#1500
ch.overwritePermissions(rolelol, {
  CONNECT: true,//Baron#1500
 
})
})
    })
  message.guild.createChannel(`» DJ | الموسيقي .` , 'category').then(tb => {//Baron#1500
    message.guild.createChannel(`» Art.` , 'voice').then(ch => {
      ch.setParent(tb);
      ch.setUserLimit(15)//Baron#1500
  })
  message.guild.createChannel(`» Fun.` , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(15)
})//Baron#1500
message.guild.createChannel(`» Life.` , 'voice').then(ch => {
  ch.setParent(tb);
  ch.setUserLimit(15)//Baron#1500
})
message.guild.createChannel(`» Sing.` , 'voice').then(ch => {
ch.setParent(tb);
ch.setUserLimit(15)
})//Baron#1500
})
  message.guild.createChannel(`» Privates | خآص .` , 'category').then(tb => {//Baron#1500
    message.guild.createChannel(`» Single.` , 'voice').then(ch => {
      ch.setParent(tb);
      ch.setUserLimit(1)
  })//Baron#1500
  message.guild.createChannel('» Doubles.' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(2)
  })//Baron#1500
  message.guild.createChannel('» Triples.' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(3)
  })//Baron#1500
  message.guild.createChannel('» Forth.' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(4)
  })//Baron#1500
  message.guild.createChannel('» Classic.' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(10)
  })//Baron#1500
  message.guild.createChannel('» Group.' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(15)
  })
    })//Baron#1500
 }
}
})//Baron#1500



client.on('message', message => { 
    if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'clr')) {
 if(!message.channel.guild) return message.channel.send('**هذا الامر فقط للسيرفرات**').then(m => m.delete(5000));
 if(!message.member.hasPermission('MANAGE_MESSAGE')) return      message.channel.send('**ليس لديك برمشن manage message`' );
 let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
 let request = `Requested By ${message.author.username}`;
 message.channel.send(`**هل انت متأكد من حذف الشات؟**`).then(msg => {
 msg.react('✅')
 .then(() => msg.react('❌'))
 .then(() =>msg.react('✅'))

 let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
 let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

 let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
 let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
 message.channel.send(`سينحذف الشات ...`).then(m => m.delete(5000));
 var msg;
         msg = parseInt();

       message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
       message.channel.sendMessage("", {embed: {
         title: "`` تــــم حذف الشات ``",
         color: 0x06DF00,
         footer: {

         }
       }}).then(msg => {msg.delete(3000)});

 })
 reaction2.on("collect", r => {
 message.channel.send(`**تم الغاء حذف الشات**`).then(m => m.delete(5000));
 msg.delete();
 })
 })
 }
 });
 



client.on('message', msg => {
	var prefix = "!!";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Supply A Number```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + " Messages```").then(m => m.delete(3000));
        }    
    }
}
});




client.on("message", message => {
	var prefix = "!!";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});





client.on("message", message => {
            if(message.content.startsWith("!!تقديم")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "التقديمات")
            if(!channel) return message.reply("**من فضلك قم بـ إنشاء روم بـ إسم التقديمات أو قم بـ كتابة `!!setsub`**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقى بالكامل **' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **عندك كام سنة **' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **هل ستتفاعل فى الرومات الصوتيه و الكتابية ؟ 🎙**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **لماذا يجب علينا ان نقبلك ؟ اعطنا سبباً وجيهاً **' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**تقديم ادارة** [__**${message.guild.name}**__]`)
                        .addField('**`الاسم`**', `${name}` , true)
                        .addField('**`العمر`**', `${age}` , true)
                        .addField('**`هل سيتفاعل ؟`**',`${ask}`)
                        .addField('**`هل سيحترم القوانين ؟`**',`${ask2}`)
                        .addField('**`لماذا يجب علينا قبوله ؟`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);
 
                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });
        client.on('message', message=>{
            if(message.content.startsWith("!!setsub")) {
            if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("التقديمات", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("** تم انشاء روم التقديمات بنجاح**")
            }
            })
    client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  if(message.content.startsWith("!!accept")) {
    let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
    if(!acRoom) return message.reply("!!setres من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
    if(acRoom) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');
 
    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
    });
  }
}
});
client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith("!!refuse")) {
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
  if(!acRoom) return message.reply("!!setres من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");
 
  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});
          client.on('message', message=>{
            if(message.content.startsWith("!!setres")) {
         if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("القبول-الرفض", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("** تم انشاء روم القبول والرفض بنجاح**")
            }
})





       const devs = ['512333311582928916'];
   client.on('message', message => {
        var prefix = "!!";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);


      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) {
            if (!devs.includes(message.author.id)) return;
            message.channel.send(''+x);
                message.delete(999)
        }


      });





client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
  let prefix = '!!'; //البرفكس
  let msgarray = message.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);
  if(cmd === `${prefix}warn`){//الامر
    
    
  
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Couldn't find users.");
      let reason = args.join(" ").slice(22);
  
      let reportembed = new Discord.RichEmbed()
      .setDescription("Warn")
      .setColor("RANDOM")
      .addField("Warn User", `${rUser} with ID: ${rUser.id}`)
      .addField("Warn By", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason",`${reason}`)
      
      
      let reportchannel = message.guild.channels.find(`name`,"warns"); //حط هنا اسم روح اللوج
      if(!reportchannel) return message.channel.send("Couldn't find `log` channel. "); //حط هنا اسم روم اللوج
      
      message.delete().catch(O_o=>{});
      reportchannel.send(reportembed);
      let role = message.guild.roles.find(`name`, 'Warn'); //حط هنا اسم الرتبة
      if(!role) return message.guild.channel.send("Could't find 'Warn' role."); //حط هنا اسم الرتبة
      rUser.addRole(role);
      
          return;
      }
      });




const moment = require('moment');

client.on("guildMemberAdd", m => {
        let room = m.guild.channels.find(a => a.name === 'chat'); //
    if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 8) {
        m.ban() .then((
            room.send(`**:no_entry: | ${m} Has been banned for: \`fake\`**`)
        ));
    };
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
    
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    };
});




client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('!!ubc')){
 if (message.author.id !== '512333311582928916') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '512333311582928916') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});



var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 10,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 3;
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);

} catch (error) {
console.log(error)
try {
guild.members.get(banner).removeRoles(roles);
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 10,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 3;
 if(channelc[channelcreate.id].created >= Onumber ) {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 10,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 3;
 if(channelr[channelremover.id].deleted >= Onumber ) {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });






var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;

client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    if (command == "autoc") {
      if(!message.channel.guild) return message.reply(`**this ~~command~~ __for servers only__**`);
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("sorry you can't do this");
      if(!args[0] || args[1]) return message.channel.send(`\`\`\`${prefix}autoc <role-name>\`\`\``);
      var role = message.guild.roles.find( role => { return role.name == args[0] });
      if(!role) return message.channel.send(`no role with name ${definedRoleName} found, make sure you entered correct name`);
      if(definedReactionRole != null  || !stopReacord) return message.channel.send("another reaction role request is running");
      message.channel.send(`now go and add reaction in the message you want for role ${role.name}`);
      definedReactionRole = role;
      stopReacord = false;
    }     
})
client.on('raw', raw => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === 'MESSAGE_REACTION_ADD') return client.emit('messageReactionAdd', reaction, client.users.get(raw.d.user_id));
    if (raw.t === 'MESSAGE_REACTION_REMOVE') return client.emit('messageReactionRemove', reaction, client.users.get(raw.d.user_id));
  });
});
client.on('messageReactionAdd', (reaction, user) => {
    if(user.id == client.user.id) return;
    if(!stopReacord) {
      var done = false;
      reactionRoles[reaction.message.id] = { role: definedReactionRole, message_id: reaction.message.id, emoji: reaction.emoji};
      stopReacord =  true;
      definedReactionRole = null;
      reaction.message.react(reaction.emoji.name)
      .catch(err => {done = true; reaction.message.channel.send(`sorry i can't use this emoji but the reaction role done! anyone react will get the role!`)})
      if(done) reaction.remove(user); 
    } else {
      var request = reactionRoles[reaction.message.id];
      if(!request) return;
      if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
      reaction.message.guild.members.get(user.id).addRole(request.role);
    }
}) 
client.on('messageReactionRemove', (reaction, user) => {
  if(user.id == client.user.id) return;
  if(!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if(!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
});





client.on('message', ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '592788639717785612') return;

  let types = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'mp4',
    'avi',
    'mkv',
    'mpeg'
  ]

  if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, This channel for pics and vids only!`)
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}

  if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, This channel for pics and vids only!`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000)
      })
    }
  }

})





client.on('message', message => {
    var prefix = "!!";
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.channel.send(`https://cdn.pg.sa/fjxlms81nk.png`);
  if(!reason) return message.channel.send(`https://cdn.pg.sa/fjxlms81nk.png`);
  if (!message.guild.member(user)
  .bannable) return message.reply(`This User Is Have High Role !`);
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});



client.on('message' , message => {
    var prefix = "!!";
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
	      if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix}unban <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●Unban** !')
        .addField('**●User Unban :** ', `${user}` , true)
        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});
 


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**سلاش بوت هو متعدد الجوانب بمزايا و أوامر رائعة وهو شبه متكامل يساعدك على إدارة سيرفرك من جميع النواحي ومميزات رائعة , اكتشفها معنا بتجربة سلاش بوت
:star2: | مميزات Slash Bot :
أن البوت يغنيك عن 15 بوت آخر 
فيه مميزات كثيرة يوجد به رينبو ( ألوان بالرتب ) سريع بدون بريميوم
يوجد به أوامر إدارية
يوجد به أوامر ميوزك
يوجد به أوامر عامة 
مثال لأرقي الأوامر :
تستطيع عمل برودكاست لرتبة معينة فقط وليس الجميع !!
يزخرف لك الكلام , يعطيك عدد الأشخاص المبندة 
يعرض لك البرمشنات حقتك بالسيرفر تقدر تاخذ رتبة تعرف معرفتها 
حصريات : 
قريباً جداً 
رتب برياكشن
ومستمرين بالعمل علي تطوير البوت ونجاحه
إذا أحببت دعمنا فهذا يشرفني ويشرفني حضورك واستعمالك للبوت
صاحب البوت :
<@512333311582928916>
البوت ما زال تحت التطوير نستقبل اقتراحاتكم في سيرفر المساعدة : https://discord.gg/8D2Vf96
:race_car: => يمكنك دعوة البوت إلي سيرفرك عن طريق هذا الرابط فقط : https://discordapp.com/oauth2/authorize?client_id=531978226742853643&scope=bot&permissions=8 ** `) 
}).catch(console.error)
})




client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("523819021359906846");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});
 
 
 
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("531528022734536706");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("523819021359906846");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
 channel.send(`Invited By  ${Invite.inviter} `) ;        
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});



 
 
 
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("531528022734536706");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("523819021359906846");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    setTimeout(function() {
 channel.send(`**invited by** ${Invite.inviter} `) ;
                    },1500);
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});



client.on('guildMemberAdd', member=> {
    var role = member.guild.roles.find("name","⇁『 Member 』‏‏༄  ❥");
    member.addRole(role);
});

client.on('ready', () => {setInterval(function(){ client.guilds.get("523819021359906846").roles.find("name", 'rainbow').edit({color : "RANDOM"})},1000)})	
	

client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
	    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();
    if(!mention) return  message.channel.send('').then(msg => { 
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
      msg.delete(3500);
      message.delete(3500); 
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: لا يمكن آعطاء ميوت لادارة السيرفر**`); 
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
 
   
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Dont Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Dont Have Permission **Muted_Members**').then(msg => {
      msg.delete(3500);
      message.delete(3500); 
    });
   
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ **لم يذكر لماذا** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك ميوت**')
    .addField('**__السيرفر__**',[ message.guild.name ]) 
    .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
    .addField('**__وقت الميوت__**',duration)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false, 
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); 
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); 
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); 
  }
});
client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);  
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); 
    });
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)
 
  await kinggamer.removeRole(role) 
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});




client.on('message', message => {
	var prefix = "!!";
if (message.content.startsWith(prefix + 'tag')) {
	  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('مرجو كتابة نص الدي تريد');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});




client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "z5rf") {
    let say = new Discord.RichEmbed()
    .setTitle('Text emboss :')

   message.reply(`\n ${zalgo(args.join(' '))}`);
  }

});



client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
     var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});


client.on('message', message => {
	var prefix = "!!";
    if(message.content.startsWith(prefix + 'moveall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**:white_check_mark: Success Moved All To Your Channel**`)


     }
       });


client.on('message' , message => {
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "rbc")) {
	        if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("قم بكتابة الرسالة | `!!rbc @منشن رتبة <message>`")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + "السيرفر :" + "\n" +
              `${message.guild.name}` + "\n" +
              "المرسل :" + "\n" +
              `${message.author.tag}` + "\n" +
              "الرسالة :" + "\n" +
              `${codes}` + "**"
              )
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });



client.on('message',async message => {
    if(message.content.startsWith(prefix + "restart")) {
 
        if(message.author.id !== "512333311582928916") return message.reply('You aren\'t the bot owner.');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restart Done..`);
        setTimeout(() => {
            client.destroy();
client.login(process.env.BOT_TOKEN);
        },3000);
        }
});


client.on('message', message => {
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
 
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} day, ${hours} hrs, ${minutes} min, ${seconds} sec` + "`");

}
});



client.on("message", msg => {
  if(msg.content === '!!' + "id") {
	    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
          .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});


 
client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='!!count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('| Members info')
      .addBlankField(true)
      .addField('Mmeber Count',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });




 client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = "!!";
    if(message.content.startsWith('!!bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast | برودكاست')
       .addField('Server | سيرفر', message.guild.name)
       .addField('Sender | المرسل', message.author.username)
       .addField('Message | الرسالة', args)
       .setFooter(message.guild.name, message.guild.iconURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });




client.on('message', message =>{
    if(message.content === '!!ping'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
    });
    }
});



client.on('message',async message => {
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);
 
 
  if(message.content.startsWith(prefix + "inforole")) {
	    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
    if(!args) return message.reply('اكتب اسم الرتبة');
    if(!role) return message.reply('هذه الرتبة غير موجودة');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('- اسم الرتبة',role.name,true)
    .addField('- اي دي الرتبة',role.id,true)
    .addField('- تم انشاء الرتبة',role.createdAt.toLocaleString(),true)
    .addField('- لون الرتبة',role.hexColor,true)
    .addField('- عدد الاعضاء الذي لديهم نفس الرتبة',role.members.size,true)
    .addField('- مركز الرتبة بين كل الرتب',role.position,true)
    .addField('- خصائص الرتبة',role.permissions,true)
    .setFooter(message.author.tag,message.author.avatarURL);
 
    message.channel.send(iQp);
  }
});


const shorten = require('isgd');
client.on('message', message => {
        var prefix = "!!";

 if (message.content.startsWith(prefix + 'short')) {
	   if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
    let args = message.content.split(" ").slice(1);
  if (!args[0]) return message.channel.send('**Usage**: '+ prefix +'short <رابط>')
  if (!args[1]) { 
    shorten.shorten(args[0], function(res) {
      if (res.startsWith('Error:')) return message.channel.send('**Usage**: '+ prefix +'short <link>');
      message.channel.send(`اختصار الرابط:**<${res}>**`); 
    })
  } else { 
    shorten.custom(args[0], args[1], function(res) { 
      if (res.startsWith('Error:')) return message.channel.send(`اختصار الرابط:**${res}**`); 
      message.channel.send(`اختصار الرابط:**<${res}>**`); 
 })}}});



client.on("message", message => {
const sm = require("string-similarity");
let members = [];
let indexes = [];
 
let args = message.content.split(" ");
let prefix = "!!";
if(args[0].toLowerCase() === (prefix + "avatar")){
   let members = [];
let indexes = [];
 let mentionn = message.mentions.users.first();
     if(!args[1]) {
  let x = new Discord.RichEmbed()
  x.setDescription(`${message.author}'s Profile picture :frame_photo:`)
  x.setImage(`${message.author.avatarURL}`)
  x.setColor(`#00fF00`)
  message.channel.send(x)
 }
 
 if(mentionn){
 
 
 
  let m = new Discord.RichEmbed();
m.setDescription(`${mentionn}'s Profile picture :frame_photo:`)
m.setImage(`${mentionn.avatarURL}`)
m.setColor(`#00FF00`)
message.channel.send(m)
 }
 
 
 
 if(!args[1].includes(mentionn)) {
 message.guild.members.forEach(function(member){
     members.push(member.user.username);
     indexes.push(member.id);
 })
 
 let match = sm.findBestMatch(args.join(' '), members)
 
 let username = match.bestMatch.target;
 
 let member = message.guild.members.get(indexes[members.indexOf(username)]);
 
 let embed = new Discord.RichEmbed()
 embed.setDescription(`${member}'s Profile picture :frame_photo: `)
 embed.setImage(`${member.user.avatarURL}`)
 embed.setColor(`#00FF00`)
 message.channel.send(embed)
}
}
});



client.on('message', message => {
  if (message.content.startsWith(prefix + "deafen")) {
	    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
    if (!message.member.hasPermission('DEAFEN_MEMBERS')) return;
  { message.member.setDeaf(true);
}
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + "vmute")) {
	    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
    if (!message.member.hasPermission('DEAFEN_MEMBERS')) return;
  { message.member.setMute(true);
}
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + "undeafen")) {
	    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
    if (!message.member.hasPermission('DEAFEN_MEMBERS')) return;
  { message.member.setDeaf(false);
}
  }
});
client.on('message', message => {
  if (message.content.startsWith(prefix + "vunmute")) {
	    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
    if (!message.member.hasPermission('MUTE_MEMBERS')) return;
  { message.member.setMute(false);
}
  }
});

client.on('message', message => {
  let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);

  if(!message.content.toLowerCase().startsWith(prefix)) return;
  if(command == "suggest") {
    if(!args.join(" ")) return message.channel.send(`**يرجي كتابة الاقتراح **`);
    let channel = message.guild.channels.find(c => c.name == "suggestions");
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setTitle(``)
    .setFooter(`Select a reaction below to vote on suggestion`)
    .setDescription(args.join(" "));
    channel.send(embed).then(msg => {
      msg.react("✅").then(() => msg.react("❌"));
      message.delete()
      message.channel.send(`**تم إرسال الإقتراح ، شكرا لك سنعمل علي إقتراحك**`);
    });
  }
});

const reportjson = JSON.parse(fs.readFileSync('./report.json' , 'utf8'));
 
client.on('message', message => {
           if (!message.channel.guild) return;
 
    let room = message.content.split(" ").slice(1);
    let findroom = message.guild.channels.find('name', `${room}`)
    if(message.content.startsWith(prefix + "setReport")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!room) return message.channel.send('Please Type The Channel Name')
if(!findroom) return message.channel.send('Cant Find This Channel')
let embed = new Discord.RichEmbed()
.setTitle('**Done The report Code Has Been Setup**')
.addField('Channel:', `${room}`)
.addField('Requested By:', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
reportjson[message.guild.id] = {
channel: room,
}
fs.writeFile("./report.json", JSON.stringify(reportjson), (err) => {
if (err) console.error(err)
})
client.on('message', message => {
 
    if(message.content.startsWith(`${prefix}report`)) {
        let  user  =  message.mentions.users.first();
      if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
    let reason = message.content.split(" ").slice(2).join(" ");
      if(!user)  return  message.channel.send("**You didn\'t mention the user to report**")
      if(!reason) return message.reply(`**Please provide a reason**`)
    let findchannel = (message.guild.channels.find('name', `${reportjson[message.guild.id].channel}`))
    if(!findchannel) return message.reply(`Error 404: The report Channel Cant Find Or Not Set To Set The report Channel Type: ${prefix}setReport`)
    message.channel.send(`Done Thank You For Your Report Will Be Seen By The Staffs`)
    let sugembed = new Discord.RichEmbed()
    .setTitle('New Report !')
    .addField('Report By:', `${message.author}`)
    .addField('Reported User:', `${user}`)
    .addField('Report Reason:', `${reason}`)
    .setFooter(client.user.username)
    findchannel.sendEmbed(sugembed)
        .then(function (message) {
          message.react('✅')
          message.react('❌')
        })
        .catch(err => {
            message.reply(`Error 404: The report Channel Cant Find Or Not Set To Set The report Channel Type: ${prefix}setReport`)
            console.error(err);
        });
        }
      }
)}
})



client.on("message", (message) => {
if (message.content.startsWith("!!cv")) {
	  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});



client.on("message", (message) => {
if (message.content.startsWith("!!ct")) {
	  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});



client.on("message", (message) => {
            if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        let yumz = new Discord.RichEmbed()
                    .setTimestamp()
                    .setTitle("Direct Message To The Bot")
                    .addField(`Sent By:`, `<@${message.author.id}>`)
                    .setColor("RANDOM")
                    .setThumbnail(message.author.displayAvatarURL)
                    .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                    .setFooter(`DM Bot Messages | DM Logs`)
                client.users.get("512333311582928916").send(yumz)
            }
});



client.on('guildCreate', guild => {
    
  client.channels.get("592804628010369044")
const embed = new Discord.RichEmbed()
   .setAuthor(`بوتك دخل سيرفر جديد مبروك ✅`)
   .setDescription(`**
Server name: __${guild.name}__
Server id: __${guild.id}__
Server owner: __${guild.owner}__
Member Count: __${guild.memberCount}__
Servers Counter : __${client.guilds.size}__**`)
         .setColor("#f3ae10")
         .addField("New Server!")
         .setFooter('Slash Bot' , client.user.avatarURL)
           client.channels.get("592804628010369044").send({embed});
}

);



client.on('guildDelete', guild => {
  client.channels.get("592804628010369044")
const embed = new Discord.RichEmbed()
   .setAuthor(`Slash Bot Bot left a server ❎`)
   .setDescription(`**
Server name: __${guild.name}__
Server id: __${guild.id}__
Server owner: __${guild.owner}__
Members Count: __${guild.memberCount}__
Servers Counter : __${client.guilds.size}__**`)
         .setColor("#f3ae10")
         .setFooter('Slash Bot' , client.user.avatarURL)
           client.channels.get("592804628010369044").send({embed});
}

);




client.on("message", (message) => {
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
if (command == "dc") {
	  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});  



client.on('message', message => {
  if(message.content === '!!support') {
  const embed = new Discord.RichEmbed()
  .setTitle('Click here')
  .setURL('https://discord.gg/8D2Vf96')
  .setColor('RANDOM')
  message.channel.send({embed: embed});
  }
});


client.on('message', message => {
  if (true) {
if (message.content === '!!invite') {
      message.author.send('https://discordapp.com/api/oauth2/authorize?client_id=531978226742853643&permissions=8&scope=bot |  تفضل رابط البوت     ').catch(e => console.log(e.stack));
 
    }
   }
  });
 
 
client.on('message', message => {
     if (message.content === "!!inv") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});



client.on('message', async msg => {
  let message = msg;
  if(msg.content.startsWith(prefix + "bans")){
    let bans = await msg.guild.fetchBans();
    let array = [];
    await bans.forEach(async user=>{
      array.push(user.id);
    });
    let page = 0;
    let pages = parseInt(`${array.length}`.slice(0,-1),10);
    const topembed = new Discord.RichEmbed()
      .setAuthor(`Banned Users`)
      .addField(`الشخص`, `<@!${array[0]}>\n<@!${array[1]}>\n<@!${array[2]}>\n<@!${array[3]}>\n<@!${array[4]}>\n<@!${array[5]}>\n<@!${array[6]}>\n<@!${array[7]}>\n<@!${array[8]}>\n<@!${array[9]}>\n<@!${array[10]}>`, true)
      .setColor('RANDOM')
      .setFooter(`Page ${page+1} of ${pages}`)
      .setTimestamp();
    message.channel.send(topembed).then(async topmessage=>{
      topmessage.react(`◀`).then(()=>{
        topmessage.react(`▶`).then(()=>{
          const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
          const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
          const backwards = topmessage.createReactionCollector(backwardsFilter, {time: 120000});
          const forwards = topmessage.createReactionCollector(forwardsFilter, {time: 120000});
          backwards.on("collect", r=>{
            r.remove(message.author);
            if(page <= 0) return;
            page--;
            let newembed = new Discord.RichEmbed()
              .setAuthor(`Banned Users`)
              .addField(`الشخص`, `<@!${array[0]}>\n<@!${array[1]}>\n<@!${array[2]}>\n<@!${array[3]}>\n<@!${array[4]}>\n<@!${array[5]}>\n<@!${array[6]}>\n<@!${array[7]}>\n<@!${array[8]}>\n<@!${array[9]}>\n<@!${array[10]}>`, true)
              .setColor("RANDOM")
              .setFooter(`Page ${page+1} of ${pages}`)
              .setTimestamp()
            topmessage.edit(newembed);
          })
          forwards.on("collect", r=>{
            r.remove(message.author);
            if(page === pages) return;
            page++;
            let newembed = new Discord.RichEmbed()
              .setAuthor(`Banned Users`)
              .addField(`الشخص`, `<@!${array[0]}>\n<@!${array[1]}>\n<@!${array[2]}>\n<@!${array[3]}>\n<@!${array[4]}>\n<@!${array[5]}>\n<@!${array[6]}>\n<@!${array[7]}>\n<@!${array[8]}>\n<@!${array[9]}>\n<@!${array[10]}>`, true)
              .setColor("RANDOM")
              .setFooter(`Page ${page+1} of ${pages}`)
              .setTimestamp()
            topmessage.edit(newembed);
          });
        });
      });
    });
  };
});




client.on('message', message => {
    if (message.content.startsWith("!!botinfo")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Slash Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ - ]` , true)
			      .addField('``My Language``' , `[ Java Script ]` , true)
			      .setFooter('By | A7med#5971')
    })
}
});



client.on('message', message => {
  var prefix = "!!";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "kick") {
   if(!message.channel.guild) return message.reply('** This command only for servers ❌**');
   const guild = message.guild;
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**__Mention__ A Member To Kick !**");
  if (!message.guild.member(user).kickable) return message.reply("**Can't Kick A Higher Role Than Me !**");
  message.channel.send(`**:white_check_mark: ${user.tag} Kicked Form The Server By : <@${message.author.id}> ! :airplane:** `)
  guild.owner.send(`سيرفر : ${guild.name}
**تم طرد** :${user.tag}  
**بواسطة** : <@${message.author.id}>`).then(()=>{
message.guild.member(user).kick();
  })
}
    });


client.on('message', message => {
var prefix = "!!";
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ ✅ **")
              });
                }

    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__✅**")
              });
    }
       
});



client.on('message', message => {
var prefix = "!!";
      if(message.content === prefix + "hchannel") {
	        if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! ✅  ')
 }
});



client.on("message", message => {
    const prefix = "!!"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
	        if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });



client.on('message', message => {
var prefix = "!!";
      if(message.content === prefix + "schannel") {
	        if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});



client.on('message', function(message) {
    if(message.content.startsWith (prefix  + 'server')) {
          let guild = message.guild;
  let icon = message.guild.iconURL;
  let createdAtRaw = guild.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");
  let bots = message.guild.members.filter(m => m.user.bot).size;
  let humans = message.guild.members.filter(m => !m.user.bot).size;
  let channels = message.guild.channels.size;
  let textChannels = message.guild.channels.filter(m => m.type == "text").size;
  let voiceChannels = message.guild.channels.filter(i => i.type == "voice").size;
  let emojis = [];
  guild.emojis.forEach(emoji => {
  emojis.push(`\`${emoji}\``);
  });
  emojis.length === 0 ? emojis = "None" : emojis = emojis.join(", ");

  let roles = [];
  guild.roles.forEach(role => {
    roles.push(`\`${role.name}\``);
  });
  roles = roles.join(", ");

  let embed = new Discord.RichEmbed()
  .setTitle(`Server Stats`)
  .setThumbnail(icon)
  .addField('Guild Name', guild.name, true)
  .addField('Guild ID', guild.id, true)
  .addField('Guild Owner', `${guild.owner.user.tag}`, true)
  .addField('Created At', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
  .addField('Region', guild.region.toUpperCase(), true)
  .addField('Total Members:', guild.memberCount, true)
  .addField('Bots:', bots, true)
  .addField('Users:', humans, true)
  .addField('Verification Level', guild.verificationLevel, true)
  .addField('Text Channels', textChannels, true)
  .addField('Voice Channels', voiceChannels, true)
  .addField(`Roles`, `${guild.roles.size}`, true)
  .addField(`Emojis`, `${guild.emojis.size}`, true)

      message.channel.send({embed:embed});
    }
  });



client.on('message' , message => {
var prefix = "!!"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("512333311582928916").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : A7med")
                                                

message.channel.send(embed);


}
    
});




client.on("message", message => {
    var prefix = "!!";
 if (message.content === "!!help") {
  const embed = new Discord.RichEmbed()  
      .setColor("RANDOM")
      .setDescription(`
     
             Please Select Your Language

${prefix}help-ar

${prefix}help-en
             
      `)
   message.channel.sendEmbed(embed)
   
   }
   });
 
   client.on("message", message => {
 if (message.content === "!!help-ar") {
  const embed = new Discord.RichEmbed()  
      .setColor("RANDOM")
      .setDescription(`
     
            اختر:
 
${prefix}help-gn-ar ⇏ اوامر عامة

${prefix}help-ad-ar ⇏ اوامر ادارة السيرفر
             
${prefix}help-mu-ar ⇏ اوامر الموسيقى
`)
message.channel.sendEmbed(embed)
 
}
});
 
client.on("message", message => {
    if (message.content === "!!help-en") {
     const embed = new Discord.RichEmbed()  
         .setColor("RANDOM")
         .setDescription(`
         
              Chose:
               
   ${prefix}help-gn-en ⇏ General commands
   
   ${prefix}help-ad-en ⇏ Server management commands
                 
   `)
   message.channel.sendEmbed(embed)
   
   }
   });
 
   client.on("message", message => {
    var prefix = "!!";
 if (message.content === "!!help-gn-ar") {
     message.channel.send('**تم ارسال رسالة في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
===================== **اوامر عامة** =====================
${prefix}id ➾ معلومات عن حسابك
${prefix}ping ➾ سرعة اتصال البوت
${prefix}avatar ➾ يظهر صورة بروفابلك
${prefix}server ➾ معلومات عن السيرفر
${prefix}botinfo ➾ معلومات عن البوت
${prefix}roleinfo ➾ معلومات عن الرتبة اللي تكتبها بعد الامر تنبيه لا تمنشن الرتبة
${prefix}count ➾ يعرضلك عدد الاشخاص الي بالسيرفر
${prefix}bans ➾ يعرضلك عدد الاشخاص المبندة من السيرفر
${prefix}short ➾ يختصر لك الروابط
${prefix}tag ➾ يعرض اي شي تكتبه بعد الامر بشكل كبير وحلو
${prefix}members ➾ يعرض معلومات الأعضاء
${prefix}z5rf ➾ يزخرف الكلام اللي تكتبه بعد الامر
${prefix}image ➾ صورة السيرفر
${prefix}contact ➾ لمراسله صاحب البوت
${prefix}invite ➾ رابط دعوة البوت لـ سيرفرك
${prefix}support ➾ سيرفر الدعم الفني
${prefix}uptime ➾ لمعرفة مدة عمل البوت
=========================================================
`)
   message.author.sendEmbed(embed)
   
   }
   });
 
 
 
 
 
   client.on("message", message => {
    var prefix = "!!";
 if (message.content === "!!help-gn-en") {
     message.channel.send('**Check your dm** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
==================== **General commands** =====================
${prefix}id ➾ Your informations
${prefix}ping ➾ Speed of bot connection
${prefix}avatar ➾ Your profile avatar
${prefix}server ➾ Server informations
${prefix}botinfo ➾ Bot informations
${prefix}roleinfo ➾ Information about the rank you write after the order
${prefix}count ➾ Server members without bots
${prefix}bans ➾ Displays the number of people who are banded from the server
${prefix}short ➾ Shorten links
${prefix}tag ➾ Displays anything you write after the command it's big and sweet order
${prefix}members ➾ Displays members information
${prefix}z5rf ➾ The words that you write after the command are embellished
${prefix}image ➾ Server image
${prefix}contact ➾ Send text to bot owner
${prefix}invite ➾ Bot invite link
${prefix}support ➾ Support server
${prefix}uptime ➾ To know the duration of the bot
=========================================================
`)
   message.author.sendEmbed(embed)
   
   }
   });
 
   client.on("message", message => {
    var prefix = "!!";
 if (message.content === "!!help-ad-ar") {
     message.channel.send('**تم ارسال رسالة بالخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
==================== **اوامر ادارية** =====================
${prefix}suggest ➾ لارسال اقتراح لازم تسوي روم باسم suggetions
${prefix}report➾ لارسال تبليغ عن شخص لازم تسوي روم باسم reports
${prefix}warn ➾ لاعطاء تحذير لشخص
${prefix}role ➾ لاعطاء رتبة لشخص
${prefix}ban [@mention or id] [reason] ➾  لحظر شخص من السيرفر
${prefix}unban [@mention or id] ➾  لفك الحظر عن الشخص المبند
${prefix}kick [@mention] [reason] ➾ لطرد شخص من السيرفر
${prefix}mute [@mention] [reason] ➾ لاعطاء ميوت لعضو
${prefix}unmute [@mention] ➾ لفك الميوت عن عضو
${prefix}vmute [@mention]  ➾ لاعطاء ميوت صوتي للعضو
${prefix}vunmute [@mention] ➾ لفك الميوت الصوتي عن العضو
${prefix}deafen [@mention]  ➾ لإعطاء ديفن للعضو
${prefix}undeafen [@mention]  ➾ لفك الديفن عن العضو
${prefix}move [@mention] ➾ لنقل عضو لرومك الصوتي
${prefix}mutechannel ➾ لاقفال الشات
${prefix}unmutechannel ➾ لفتح الشات
${prefix}clear ➾ لمسح الشات
${prefix}hchannel ➾ لاخفاء الشات
${prefix}schannel ➾ لاظهار الشات
${prefix}cv ➾ لصنع روم صوتي
${prefix}ct ➾ لصنع روم كتابي
${prefix}dc ➾ لمسح روم صوتي او كتابي
=========================================================
`)
   message.author.sendEmbed(embed)
   
}
});
 
client.on("message", message => {
 var prefix = "!!";
if (message.content === "!!help-ad-en") {
  message.channel.send('**Check your dm** :mailbox_with_mail: ');
const embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setDescription(`
         
==================== **Management commands** =====================
${prefix}suggest ➾ To Send An Suggestion You Must Make "suggestions" Channel
${prefix}report ➾ To Report Any Person You Must Make "reports" Channel
${prefix}warn ➾ to give warn to a member
${prefix}role ➾ to give role to person
${prefix}ban [@mention] [reason] ➾ to ban someone from the server
${prefix}unban ➾ To unblock the person banded
${prefix}kick [@mention] [reason] ➾ to kick someone from the server
${prefix}mute [@mention] [reason] ➾ to mute someone
${prefix}unmute [@mention] ➾ to umnute someone
${prefix}vmute [@mention]  ➾ To give mute voice to the member
${prefix}vunmute [@mention] ➾ To unlock the mute voice of the member
${prefix}deafen [@mention]  ➾ To give deafen to the member
${prefix}undeafen [@mention]  ➾ To unlock deaden from the member
${prefix}move [@mention] ➾ to move someone to your channel
${prefix}mutechannel ➾ to mute chat
${prefix}unmutechannel ➾ to ummute chat
${prefix}clear ➾ to clear chat
${prefix}hchannel ➾ to hide chat
${prefix}schannel ➾ to show chat
${prefix}cv ➾ To Make Voice Room
${prefix}ct ➾ To Make Text Room
${prefix}dc ➾ To Delete Voice Or Text Room
=========================================================
`)
message.author.sendEmbed(embed)
 
}
});



const Util = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const ytdl = require('ytdl-core');
const gif = require("gif-search");

client.on('message', async msg => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;
  const args = msg.content.split(' ');
  const searchString = args.slice(1).join(' ');
  const url = args[1] ? args[1] .replace(/<(.+)>/g, '$1') : '';
  const serverQueue = queue.get(msg.guild.id);
  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length)
  if (command === `play`) {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has('CONNECT')) {
      return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
    }
    if (!permissions.has('SPEAK')) {
      return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
    }

    if (!permissions.has('EMBED_LINKS')) {
      return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **rl")
      }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, msg, voiceChannel, true);
      }
      return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
    } else {
      try {

        var video = await youtube.getVideo(url);

      } catch (error) {
        try {
                          var fast = {};
          var videos = await youtube.searchVideos(searchString, 10);
          let index = 0;
          const embed1 = new Discord.RichEmbed()
              .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index}**] **${video2.title}**`).join('\n')}`)
          .setFooter(`${msg.guild.name}`)
            .setThumbnail('https://e.top4top.net/p_1001lsv3w1.png')

          msg.channel.sendEmbed(embed1).then(message =>{

            message.delete(15000)

          });
          try {
            var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
              maxMatches: 1,
              time: 20000,
              errors: ['time']
            })

            }catch(err) {
            console.error(err);
            return msg.channel.send('لم يتم إختيآر مقطع صوتي');
            }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send(':x: لا يتوفر نتآئج بحث ');
        }
    }

      return handleVideo(video, msg, voiceChannel);
    }
  } else if (command === `skip`) {
    if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
    if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
    serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
    return undefined;
  } else if (command === `stop`) {
    if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
    if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
    return undefined;
  } else if (command === `SVlAMKDKDAKKSKDSAKDAMKWKWKWKMPZZPZPZPZZFFAFKKAl`) {
    if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
    if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
    if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
    return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
  } else if (command === `np`) {
    if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
    const embedNP = new Discord.RichEmbed()
  .setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
    return msg.channel.sendEmbed(embedNP);
  } else if (command === `replay`) {
    if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
    const embedNP = new Discord.RichEmbed()
  .setDescription(`سيتم اعاده تشغيل الفديو :**${serverQueue.songs[0].title}**`)
  msg.channel.send({embed: embedNP})
     return handleVideo(video, msg, msg.member.voiceChannel);

  } else if (command === `queue`) {
    if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
    let index = 0;
    const embedqu = new Discord.RichEmbed()
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
    return msg.channel.sendEmbed(embedqu);
  } else if (command === `pause`) {
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
    }
    return msg.channel.send('لا يوجد شيء حالي ف العمل.');
  } else if (command === "resume") {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
    }
    return msg.channel.send('لا يوجد شيء حالي في العمل.');
  }

  return undefined;
async function handleVideo(video, msg, voiceChannel, playlist = false) {
  const serverQueue = queue.get(msg.guild.id);
  const song = {
    id: video.id,
    title: Util.escapeMarkdown(video.title),
    url: `https://www.youtube.com/watch?v=${video.id}`,
    time:`${video.duration.hours}:${video.duration.minutes}:${video.duration.seconds}`,
    eyad:`${video.thumbnails.high.url}`,
    best:`${video.channel.title}`,
    bees:`${video.raw.snippet.publishedAt}`,
    shahd:`${video.raw.kind}`,
    zg:`${video.raw.snippet.channelId}`,
        views:`${video.raw.views}`,
        like:`${video.raw.likeCount}`,
        dislike:`${video.raw.dislikeCount}`,
        hi:`${video.raw.id}`
  };
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: msg.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(msg.guild.id, queueConstruct);
    queueConstruct.songs.push(song);
    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(msg.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`I could not join the voice channel: ${error}`);
      queue.delete(msg.guild.id);
      return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
  }
  return undefined;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);
  const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
    .on('end', reason => {
      if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
      else console.log(reason);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on('error', error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    fetchVideoInfo(`${song.hi}`, function (err,  idk) {
  if (err) throw new Error(err);
  console.log( idk);
      const yyyy = {}
  if(!yyyy[msg.guild.id]) yyyy[msg.guild.id] = {
    like: `${ idk.likeCount}`,
    dislike: `${ idk.dislikeCount}`
  }
  serverQueue.textChannel.send({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
  .setImage(`${song.eyad}`)
  .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
  .setColor('#ff0000')
  .setTimestamp()
  }).then(love => {
    love.react('👍').then(r=>{
    love.react('👎').then(r =>{
    love.react('🙌').then(r=> {
    let likee = (reaction, user) => reaction.emoji.name === '👍' && user.id === msg.author.id;
    let dislikee = (reaction, user) => reaction.emoji.name === '👎' && user.id === msg.author.id;
    let cnn = (reaction, user) => reaction.emoji.name === '🙌' && user.id === msg.author.id;

    let ll = love.createReactionCollector(likee , {max:5});
    let dd = love.createReactionCollector(dislikee , {max:5});
    let cn = love.createReactionCollector(cnn , {max:5});

        ll.on("collect", r => {
          yyyy[msg.guild.id].like++;
  love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${yyyy[msg.guild.id].like}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
  .setImage(`${song.eyad}`)
  .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
  .setColor('#ff0000')
  .setTimestamp()
});
    })

    dd.on("collect", r => {
      yyyy[msg.guild.id].dislike++;
  love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${yyyy[msg.guild.id].dislike}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
  .setImage(`${song.eyad}`)
  .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
  .setColor('#ff0000')
  .setTimestamp()
});
})
    cn.on("collect", r => {
  love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
  .setImage(`${song.eyad}`)
  .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
  .setColor('#ff0000')
  .setTimestamp()
});
})
})
})
})
})
})
}
});
 
client.login(process.env.BOT_TOKEN);
