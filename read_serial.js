const fs = require('fs')
const os = require('os')
const files = fs.readdirSync(os.homedir())
document.innerHTML = files.join('<br>')
// This is where console output goes
let elm = document.getElementById("serial_content");

