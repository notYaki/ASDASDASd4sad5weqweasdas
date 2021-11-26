const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
module.exports = {
  name: "cat",
  category: "🔎 Search",
  usage: "cat",
  description: "Search Any Thing On cat.",
  run: async (client, message, args, cmduser, text, prefix) => {
            let owo = (await neko.sfw.meow());

            const cat = new Discord.MessageEmbed()
                  .setTitle("Random Cat Image")
                  .setImage(owo.url)
                  .setColor("#00d7ff")
                  .setFooter(client.user.username, "https://images-ext-1.discordapp.net/external/vWNHjT7Voa8zaxTk2bsbLVDBullE9IioMhOHdtrq4sg/https/media.discordapp.net/attachments/905624274222600232/913648368901832735/tumblr_ab54c4be9ff803e8f9c63b48dd8d1055_8cd6b71a_500.gif")
                  .setURL(owo.url);
            message.channel.send(cat);

      }
};