//Importing Packages
const Discord = require("discord.js")
var superagent = require('superagent');
const rp = require('request-promise-native'); 
var CronJob = require('cron').CronJob;


module.exports = client => {
    
    client.Jobautonsfw = new CronJob('0 * * * * *', function() {
        
        var guilds = client.settings.filter(v => v.autonsfw && v.autonsfw != "no").keyArray();
        
        for(const guildid of guilds){
            autonsfw(guildid)
        }
    }, null, true, 'Spain/Madrid');
    
    client.Jobautonsfw.start();

    
    async function autonsfw(guildid){
        try{
            
            var guild = client.guilds.cache.get(guildid)
            
            if(!guild) return;
            
            var channel;
            
            let es = client.settings.get(guild.id, "embed");
             
            let set = client.settings.get(guild.id, "autonsfw");
            
            if(!set || set == "no") return
            
            try{
                channel = await client.channels.fetch(set)
                if(!channel || channel == null || channel == undefined || !channel.name || channel.name == null || channel.name == undefined) throw "Channel not found"
            }catch (e){
                return;
            }
            
            if (!channel.nsfw) return console.log("nonsfw");
            
            var methodarray = ["hass", "hthigh", "hboobs"]
            
            var method = methodarray[Math.floor(Math.random() * methodarray.length)]
            
            if(method == "hentai"){
                superagent.get('https://nekobot.xyz/api/image').query({ type: 'lewdneko'}).end((err, response) => {
                    var embed_nsfw = new Discord.MessageEmbed()
                        .setColor(es.color).setThumbnail(es.thumb ? es.footericon : null)
                        .setImage(response.body.message)
                    channel.send({embed: embed_nsfw});
                });
            }
            