
try {
const axios = require("axios")
const cheerio = require("cheerio")
const c = require('./config.json').url[0];
const nodeCmd = require('node-cmd');
const net = require("network");
const fs = require('fs');

const intervals = require('./config.json').intervalWaktu;

async function inter() {
	
net.get_gateway_ip(async function(err, away){

   console.dir('Target '+away);
getJs = await axios.get('http://'+away+'/status',{
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
	return "Error, koneksi terputus"  
  })
  
axios.get('http://'+away+'/login').then(async (val) => {
	
    const $ = cheerio.load(val.data)
      // load data
      dst = $('#dst').attr('value');
      if(!dst) {
		  console.dir(getJs)
	  } else {
      console.log("unlogin bypass... "+ dst);
	  try {
		axios({
  method: 'get',
  url: dst,
  responseType: 'text'
     })
     .then(function (response) {
		 console.log(response)
		 try {
			 fs.writeFileSync(process.cwd()+"/log/dst.log", String(dst));
			 fs.writeFileSync(process.cwd()+"/log/tmp.log", String(response.data));
		 }catch {
			 nodeCmd.run('mkdir log', (err, data, stderr) => console.log(data));
		 }
		 
	 })
	  }catch(e){
	   console.error("Tidak dapat membypass ");
	  }
       
	  }
  }).catch(function (error) {
  console.error("Error, koneksi tidak dapat terhubung");
 })
 })
}
setInterval(inter, intervals);


} catch(e){
const nodeCmd = require('node-cmd')
const process = require('node:process');

console.log("Kesalahan akan mencoba menginstall package.json yang diperbarui oleh owner "+e);
nodeCmd.run('npm install', (err, data, stderr) => {
	if(data.toString()) {
	  console.log(data);
	  nodeCmd.run('start.bat', (err, data, stderr) => console.log(data));
	}
});

}