const ready = (client) => {
  console.log(`Logged in as ${client.user.tag}!`);

  const guilds = client.guilds.cache
    .map(({ id, name }) => `--- ${id}: ${name}`)
    .join("\n");

  console.log("Servicing:");
  console.log(guilds);
};

module.exports = ready;
