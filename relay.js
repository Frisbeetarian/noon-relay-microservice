const rpcClient = require("./client");

async function relay(index, params) {
  switch (index) {
    case "SEND_EMAIL": {
      console.log("index in index profile:", index);
      console.log("params in index profile:", params.profile);
      const profile = params.profile;

      try {
      } catch (e) {
        console.log("error:", e);
      }

      return null;
    }

    default: {
      return null;
    }
  }
}

module.exports = relay;
