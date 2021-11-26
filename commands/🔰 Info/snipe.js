const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const emoji = require(`../../botconfig/emojis.json`);
const {
  getRandomInt
} = require("../../handlers/functions")
const db = require("quick.db")
module.exports ={
  config:{
    name: "snipe",
    category: "info",
    description: "Shows the most recent deleted message.",
    usage: ";snipe"
  },
    run: async(client, message, args) => {
        const msg = client.snipes.get(message.channel.id);
        if(!msg) return message.reply("There are no recently deleted messages!");

        const embed = new MessageEmbed()
            .setAuthor(`Deleted by ${msg.author.tag}`, msg.author.displayAvatarURL())
            .setDescription(msg.content);
      message.channel.send(embed)
    }
} 