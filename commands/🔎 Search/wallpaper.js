const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
module.exports = {
  name: "wallpaper",
  category: "🔎 Search",
  usage: "wallpaper",
  description: "Search Any Thing On wallpaper.",
  run: async (client, message, args, cmduser, text, prefix) => {
        let owo = (await neko.sfw.wallpaper());

    const wallpaper = new Discord.MessageEmbed()
      .setTitle("Random Wallpaper")
      .setImage(owo.url)
      .setColor("RANDOM")
      .setFooter(client.user.username, "https://images-ext-1.discordapp.net/external/vWNHjT7Voa8zaxTk2bsbLVDBullE9IioMhOHdtrq4sg/https/media.discordapp.net/attachments/905624274222600232/913648368901832735/tumblr_ab54c4be9ff803e8f9c63b48dd8d1055_8cd6b71a_500.gif")
      .setURL(owo.url);
    message.channel.send(wallpaper);
  }
};