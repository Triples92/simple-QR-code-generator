
import * as fs from 'fs';
import * as qr from 'qr-image';
import { input } from '@inquirer/prompts';


const user_input = await input({message:'add your website.'})

fs.appendFile('URL.txt',user_input+"\n",(err) => {
    if (err) throw err;
    console.log('the link has been saved');
  }); 


var qrname = user_input.substring(
user_input.indexOf(".") + 1, 
user_input.lastIndexOf(".")
);

var qr_svg = qr.image(user_input, { type: 'png' });
qr_svg.pipe(fs.createWriteStream(`qr_codes/${qrname}.png`));