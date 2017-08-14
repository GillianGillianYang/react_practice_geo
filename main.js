//let { getInfo, address_data } = require('./ex-object');
//console.log(getInfo(address_data));


//npm init 
//----npm 把套件裝在預設node.js 的全域
//----要自己用敘述黨去描述 裝了什麼module
//---- main : entry point 
//---- 多產生 package.json
//---- script {  "start": "node main.js"}

//npm install request --save
//-----  --save會把這個dependencies 寫入 描述黨內 
//-----install request 
//-----ls (或 ls -a -a 顯示隱藏檔) 會出現 node_modules


// const request = require('request');
// request('http://www.google.com', function(error, response, body) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });


const request = require('request');
const { getInfo } = require('./ex-object')


//js encodeURI  -- while using chinese
//http://www.victsao.com/blog/81-javascript/88-javascript-encodeuri


let address = encodeURI('台灣大學'); //'National Taiwan University';

let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`
    /*
    console.log('1');
    request(url,
        function(error, response, body) {
            // console.log('error:', error);
            // console.log('statusCode:', response.statusCode);
            //console.log('body:', body);

            console.log('getInfo: ', getInfo(JSON.parse(body)));
            console.log('2');


        });
    console.log('3');

    //log : 1->3-> .....->2

    */

//let imageUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=Taipei'

let placeAPI = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&key=AIzaSyBImOy7k7q3nRG0YOcN2Z4GfQDu3q7WYNE'


request(url, function(error, response, body) {
    let obj = JSON.parse(body);
    let info = getInfo(obj);
    //  console.log('getInfo', info);
    let lat = info.lat;
    let lng = info.lng;
    let placeAPI = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=500&type=restaurant&key=AIzaSyBImOy7k7q3nRG0YOcN2Z4GfQDu3q7WYNE`
        //next_page_token

    request(placeAPI, function(error, response, body) {
        console.log(body)
    })

})

//request 也支援 promise
console.log('=========================');

/*
request(placeAPI, function(error, response, body) {
    console.log(body);
}); // 這方式不能回傳 promise

request(placeAPI).then((response) => {
    console.log(response);
})
*/