const { clipboard } = require('electron');

function sak_oncopy(text) {
    console.log(text);
    clipboard.writeText(text);
}