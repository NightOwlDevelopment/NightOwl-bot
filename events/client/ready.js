
const config = require("../../botconfig/config.json")
module.exports = client => {
  try {
    const stringlength = 69;
    console.log("\n")
    console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + `NightHC Bot onligne`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `BOT ONLINE POG!`.length) + "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + ` /--/ ${client.user.tag} /--/ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - ` /--/ ${client.user.tag} /--/ `.length) + "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
    console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)
  } catch { /* */ }

  try {
    client.user.setActivity(`Jesteśmy na ${client.guilds.cache.size} serwerach`, { type: "PLAYING" });
  } catch (e) {
    console.log(String(e.stack).red);
  }

  setInterval(() => {
    try {
      client.user.setActivity(client.user.username, { type: "PLAYING" });
    } catch (e) {
      console.log(String(e.stack).red);
    }
  }, 10 * 60 * 1000)
}
