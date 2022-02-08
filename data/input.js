// Here through Fetch we make the HTTP request to obtain the data 
//we need in the file prometeo_probe

import fetch from 'node-fetch';
export async function getData() {
   const data =  await (await fetch('https://mach-eight.uc.r.appspot.com/')).json()
   console.log(data)
   return data.values;
}  

