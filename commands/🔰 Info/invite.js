const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const emoji = require(`../../botconfig/emojis.json`);
const { MessageButton } = require('discord-buttons')
module.exports = {
  name: "invite",
  category: "🔰 Info",
  aliases: ["add"],
  usage: "invite",
  description: "Gives you an Invite link for this Bot",
  run: async (client, message, args, cmduser, text, prefix) => {
    let es = client.settings.get(message.guild.id, "embed")
    try {
      let button_support_dc = new MessageButton().setStyle('url').setLabel('Support Server').setURL("https://discord.gg/qVmCaKWgtb")
      let button_invite = new MessageButton().setStyle('url').setLabel('Invite this Bot').setURL(`https://discord.com/api/oauth2/authorize?client_id=902388483568599040&permissions=8&scope=bot%20applications.commands`)
      //array of all buttons
      const allbuttons = [button_support_dc, button_invite]
       message.channel.send({
         embed: new MessageEmbed()
          .setColor(ee.color)
          .setTitle("Thanks for inviting Yaki")
          .addField(`Yaki Powered by Ÿακι ジ#4635`, `**[Invite Public Bot](https://discord.com/api/oauth2/authorize?client_id=902388483568599040&permissions=8&scope=bot%20applications.commands)  •  [Support Server](https://discord.gg/qVmCaKWgtb)
          **\n\n[**Invite** **${client.user.username}**](https://discord.com/api/oauth2/authorize?client_id=902388483568599040&permissions=8&scope=bot%20applications.commands)`)
          .setImage("https://images-ext-1.discordapp.net/external/vWNHjT7Voa8zaxTk2bsbLVDBullE9IioMhOHdtrq4sg/https/media.discordapp.net/attachments/905624274222600232/913648368901832735/tumblr_ab54c4be9ff803e8f9c63b48dd8d1055_8cd6b71a_500.gif")
          .setFooter("Yaki | powered by Ÿακι ジ", "https://images-ext-1.discordapp.net/external/vWNHjT7Voa8zaxTk2bsbLVDBullE9IioMhOHdtrq4sg/https/media.discordapp.net/attachments/905624274222600232/913648368901832735/tumblr_ab54c4be9ff803e8f9c63b48dd8d1055_8cd6b71a_500.gif"),
        buttons: allbuttons
      });
    } catch (e) {
      console.log(String(e.stack).bgRed)
      return message.channel.send(new MessageEmbed()
        .setColor(es.wrongcolor).setFooter(es.footertext, es.footericon)
        .setTitle(`An error occurred`)
        .setDescription(`\`\`\`${String(JSON.stringify(e)).substr(0, 2000)}\`\`\``)
      );
    }
  }
}