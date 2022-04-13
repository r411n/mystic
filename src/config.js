require("dotenv").config();
//fork again
module.exports = {
    token: process.env.TOKEN || "",  // your bot token
    prefix: process.env.PREFIX || "r!", // bot prefix
    ownerID: process.env.OWNERID || "755566952449310842", //your discord id
    mongourl: process.env.MONGO_URI || "mongodb+srv://rlx:rlx@rlx.iv0gv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // MongoDb URL
    embedColor: process.env.COlOR || "#FFFFFF", // embed colour
    logs: process.env.LOGS || "961281238738534490", // channel id for guild create and delete logs

    nodes: [
    {
      host: process.env.NODE_HOST || "lavalink.islantay.tk",
      identifer: process.env.NODE_ID || "local",
      port: parseInt(process.env.NODE_PORT || "8880"),
      password: process.env.NODE_PASSWORD || "waifufufufu",
      secure: parseBoolean(process.env.NODE_SECURE || "false"),

    }
  ],

}

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
