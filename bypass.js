
try {
const axios = require("axios")
const cheerio = require("cheerio")
const c = require('./config.json').url[0];
const nodeCmd = require('node-cmd');
const intervals = require('./config.json').intervalWaktu;
console.dir('Target '+c);

async function inter() {
	 
getJs = await axios.get(c+'/status',{
	headers: { 
    'Access-Control-Allow-Origin' : '*',
	'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
}
}).then((val) => {
    const $ = cheerio.load(val.data);
    // load data 
     trfic = $('#main > div > div.col-4 > div > div > form > table > tbody > tr:nth-child(3) > td:nth-child(2)').text()
     ip = $('#main > div > div.col-4 > div > div > form > table > tbody > tr:nth-child(1) > td:nth-child(2)').text()
	 exp = $('#main > div > div.col-4 > div > div > form > table > tbody > tr:nth-child(5) > td:nth-child(2)').text()
	 activ = $('#main > div > div.col-4 > div > div > form > table > tbody > tr:nth-child(4) > td:nth-child(2)').text()
	  if(!ip) return { status: "blanked" }
	  return `bypass kota madiun ${trfic} exp: ${exp} aktif: ${activ}`
	}).catch(function (error) {
	return error  
  })
  
axios.get(c+'/login').then(async (val) => {
	
    const $ = cheerio.load(val.data)
      // load data
      dst = $('#dst').attr('value');
      if(!dst) {
		  console.dir(getJs)
	  } else {
      console.log("unlogin bypass... "+ dst);
	  try {
		fetch(dst);
	  }catch(e){
	   console.error("Tidak dapat membypass "+e);
	  }
       
	  }
  }).catch(function (error) {
  console.error(error);
 })
}
setInterval(inter, intervals);
} catch(e){
const nodeCmd = require('node-cmd')
const process = require('node:process');

console.log("Menginstall module, gunakan kuota/wifi pribadi");
nodeCmd.run('npm install', (err, data, stderr) => {
	if(data.toString()) {
	  console.log(data);
	  nodeCmd.run('start.bat', (err, data, stderr) => console.log(data));
	}
});

}