//----------------------------------------------------------------------------------------------
// Dependencies

require("dotenv").config();

const DoggoClient = require("./core/Client");
const { Intents } = require("discord.js");
const { TOKEN, OWNER_ID, ADMINS_ID } = process.env;

//----------------------------------------------------------------------------------------------
// Classes

const client = new DoggoClient({
  ownerId: OWNER_ID,
  admins: ADMINS_ID,
  intents: Object.values(Intents.FLAGS),
});

//----------------------------------------------------------------------------------------------
// Client Login

client.login(TOKEN);

//----------------------------------------------------------------------------------------------
// Error Handling

client.on("error", console.error);
client.on("warn", console.warn);
