/**
 * Base By NdyZz [ github.com/NdyZz ]
 * Created On 8/3/2024
 * Contact Me on wa.me/6285346923840
*/

const axios = require('axios');

const quote = async (text, name, avatar) => {
   const json = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#FFFFFF",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [
         {
            "entities": [],
            "avatar": true,
            "from": {
               "id": 1,
               "name": name,
               "photo": {
                  "url": avatar,
               }
            },
            "text": text,
            "replyMessage": {}
         }
      ]
   };

   const res = await axios.post('https://bot.lyo.su/quote/generate', json, {
      headers: {'Content-Type': 'application/json'}
   });

   const buffer = Buffer.from(res.data.result.image, 'base64');
   
   return { 
      result: buffer
   };
};

module.exports = { quote };
