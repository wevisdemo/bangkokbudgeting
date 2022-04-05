const fs = require('fs'); 
let rawdata = fs.readFileSync('"~/assets/data/project.json');
let punishments = JSON.parse(rawdata);