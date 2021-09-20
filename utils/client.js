const Discord = require("discord.js");
const intents = new Discord.Intents(171869461568);
const client = new Discord.Client({ intents });
const token = process.env.TOKEN;
const { readdirSync } = require("fs");

const events = readdirSync("events");
for (let event of events) {
  const flag = event.split(".")[0],
    handler = require(`../events/${event}`);
  client.on(flag, handler);
}

client.login(token);

module.export = client;
