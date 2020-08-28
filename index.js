// Used template from node documentation

const https = require("https");

const data = JSON.stringify({
  name: "Michael Zhu",
  email: "zhumichaely@gmail.com",
  resume: "https://zhumichael.com/michael-zhu-resume-au20.pdf",
  phone: "440-384-2238", // optional
  github: "github.com/zhumichaely", // optional
  twitter: "", // optional
  website: "www.zhumichael.com", // optional
  location: "Columbus", // optional
  favorite_candy: "Haribo Gold Bears", // optional
  superpower: "", // optional
});

const options = {
  hostname: "contact.plaid.com",
  port: 443,
  path: "/jobs",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.write(data);
req.end();
