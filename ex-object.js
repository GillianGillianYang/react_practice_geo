//geoCodeing api 反查 
//https://developers.google.com/maps/documentation/geocoding/intro?hl=zh-tw
//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
//https://maps.googleapis.com/maps/api/geocode/json?address=台灣大學

//google webAPI 
//https://developers.google.com/maps/web-services/overview?hl=zh-tw#ParsingJSON


//continute : array 操作 
//https://wcc723.github.io/javascript/2017/06/29/es6-native-array


// enter terminal ,  變數按下 tab 會列出可用的funciotn , leave controlC *2 

let address_data = {
    "results": [{
            "address_components": [{
                    "long_name": "1",
                    "short_name": "1",
                    "types": ["street_number"]
                },
                {
                    "long_name": "羅斯福路四段",
                    "short_name": "羅斯福路四段",
                    "types": ["route"]
                },
                {
                    "long_name": "大安區",
                    "short_name": "大安區",
                    "types": ["administrative_area_level_3", "political"]
                },
                {
                    "long_name": "台北市",
                    "short_name": "台北市",
                    "types": ["administrative_area_level_1", "political"]
                },
                {
                    "long_name": "台灣",
                    "short_name": "TW",
                    "types": ["country", "political"]
                },
                {
                    "long_name": "10617",
                    "short_name": "10617",
                    "types": ["postal_code"]
                }
            ],
            "formatted_address": "10617台灣台北市大安區羅斯福路四段1號",
            "geometry": {
                "location": {
                    "lat": 25.0173405,
                    "lng": 121.5397518
                },
                "location_type": "ROOFTOP",
                "viewport": {
                    "northeast": {
                        "lat": 25.01868948029151,
                        "lng": 121.5411007802915
                    },
                    "southwest": {
                        "lat": 25.0159915197085,
                        "lng": 121.5384028197085
                    }
                }
            },
            "place_id": "ChIJqS4y_ompQjQRZn8d7gQEdSE",
            "types": ["establishment", "point_of_interest", "university"]
        },
        {
            "address_components": [{
                    "long_name": "1",
                    "short_name": "1",
                    "types": ["street_number"]
                },
                {
                    "long_name": "羅斯福路四段",
                    "short_name": "羅斯福路四段",
                    "types": ["route"]
                },
                {
                    "long_name": "大安區",
                    "short_name": "大安區",
                    "types": ["administrative_area_level_3", "political"]
                },
                {
                    "long_name": "台北市",
                    "short_name": "台北市",
                    "types": ["administrative_area_level_1", "political"]
                },
                {
                    "long_name": "台灣",
                    "short_name": "TW",
                    "types": ["country", "political"]
                },
                {
                    "long_name": "106",
                    "short_name": "106",
                    "types": ["postal_code"]
                }
            ],
            "formatted_address": "106台灣台北市大安區羅斯福路四段1號",
            "geometry": {
                "location": {
                    "lat": 25.017328,
                    "lng": 121.540503
                },
                "location_type": "ROOFTOP",
                "viewport": {
                    "northeast": {
                        "lat": 25.0186769802915,
                        "lng": 121.5418519802915
                    },
                    "southwest": {
                        "lat": 25.0159790197085,
                        "lng": 121.5391540197085
                    }
                }
            },
            "place_id": "ChIJq7ZG3SaqQjQRX12lGfyiwdY",
            "types": ["establishment", "library", "point_of_interest"]
        }
    ],
    "status": "OK"
};



;
//get lan lng from json structure 
let getInfo = (data) => {
    //let dataObj = JSON.parse(data);
    let formatted_address = data.results[0]['formatted_address'];
    let lat = data.results[0]['geometry']['location']['lat'];
    let lng = data.results[0]['geometry']['location']['lng'];

    let test = (data.results[0]).geometry.location.lat;

    //sugar :
    //return { formatted_address: formatted_address, lat: lat, lng: lng };
    return { formatted_address, lat, lng };
};

//console.log(getInfo(address_data));
module.exports = { getInfo, address_data };