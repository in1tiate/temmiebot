const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const temLib = require('./temLib.js');
var config = {}
var ident = 'rigatoni'
function loadConfig() {
    let rawJSON = fs.readFileSync('settings.json');
    config = JSON.parse(rawJSON);
    console.log('[INFO] Configuration loaded.');
}
loadConfig();

function denyCommand(message) {
    console.log(`[WARN] User ${message.author.tag} (ID ${message.author.id}) tried to use\n       a maintenance command, but they have insufficient permissions!`);
    message.channel.send('uh-0h! u dun have permishun to use dat >_>');
}

client.on('ready',() => {
    console.log('[INFO] Login successful, client ready');
    client.user.setStatus("online");
})

client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) {return;}
    if (message.content === config.prefix + 'ping') {
        // returns latency round-trip
        message.channel.send(`pONG!! \`round-trip latency: ${client.ping} ms\``);
    }
    if (message.content === config.prefix + 'help') {
        // TODO: help menu
        message.channel.send(`
\`\`\`
// general cum4ndz!!
help - dis menyu
temmify - temslate w0rds tu tEMspeek!
uptime - how long tem ben awake :3
ping - p0ng! tells u if tem laggy >_<

// speshul cum4ndz!!! (u gota have speshul role for deez -w-)
restart - tem reb00t!!!
\`\`\`
        `);
    }

    if (message.content === config.prefix + 'uptime') { 
        // returns uptime in ms as well as the date last ready
        message.channel.send(`oooh... tem ben runing for \`${client.uptime} ms\` since \`${client.readyAt}.\``);
    }
    if (message.content.startsWith(config.prefix + 'temmify ') || message.content.startsWith(config.prefix + 'temslate ')) {
        // temmifies given input
		temtext = message.cleanContent.replace(config.prefix, '').replace('temmify ','').replace('temslate ','');
        rleet = Math.round(temtext.length * config.rlmod);
        //console.log(`[INFO] Leetspeak modifier is ${rleet}`);
        checkempty = temtext.replace(' ','');
		if (temLib.containsDiscordLink(temtext)) {
			message.channel.send('oh noes! ur mesage gota discord link in it, so tem cant temslate it. take da link out an try again!');
			return;
		}
        if (checkempty !== '') {
            temtext = temLib.temslate(temtext);
			temtext = temLib.pass2(temtext);
            message.channel.send(`${temtext}`);
            return; 
        }
        else {
            message.channel.send('oh n0es! u gota say sumthin for tem to temmify!!');
            return;
        }
    }
//===MAINTENANCE COMMANDS===\\
    if (message.content === config.prefix + 'restart') { 
        if(message.member.roles.has(config.speshulRole) || message.author.id === '180750731756830741') {
            console.log(`[INFO] User ID ${message.author.id} invoked reboot command`);
            message.channel.send('reb00t time!! dis mite take a few secuns...');
            client.user.setStatus("offline");
            client.destroy();
            client.login(config.token);
            var setOnline = function() {client.user.setStatus("online");}
            setTimeout(setOnline, 3000); // wait a few seconds before setting status
            var check = function(){
                if(client.user.presence.status === "online"){
                    message.channel.send('tem bak! did u miss tem??');
                    console.log('[INFO] Status is "online," ending loop');
                    return;
                }
                else {
                    console.log('[INFO] Status is not "online," checking again in 1000ms');
                    setTimeout(check, 1000); // check again in a second
                }
            }
        
            check();
        }
        else {
            denyCommand(message);
        }
    }
    if (message.content === config.prefix + 'reset') { 
        if(message.author.id === '180750731756830741') {
            message.channel.send('User authenticated, performing kill command.')
            client.user.setStatus("invisible");
            console.log('[INFO] Kill command was invoked, destroying client')
            process.kill(0);
       }
       else {
            denyCommand(message);
       }
    }
    if (message.content === config.prefix + 'identify') { 
            message.channel.send(`Current ident code is \`${ident}\`.`);
            return;
    }
    if (message.content === config.prefix + 'refresh config'||message.content === config.prefix + 'reload config') { 
       if(message.member.roles.has(config.speshulRole) || message.author.id === '180750731756830741') {
            message.channel.send('okie!! tem go look at da config again >w<');
            console.log('[INFO] Reloading config...');
            try {setTimeout(loadConfig, 4000);} //TODO: figure out why this timeout doesn't work
            catch (err) {
                message.channel.send(`uMMMM!! tem had a problem n culdnt load da config! >︿< but... tem did find da error message!!!\n\`\`\`${err.name}:${err.message}\`\`\``);
                return;
            }
            message.channel.send(`config reloded ^W^`);
            return;
       }
       else {
            denyCommand(message);
       }
    }
    // ===MEME COMMANDS=== \\
    if (message.content === config.prefix + 'ayy') { 
        // ayy lmao
        message.channel.send('lmao :alien:'); 
    }
});
client.on('guildMemberAdd', function(member){
// perform function on user join
});
client.login(config.token);