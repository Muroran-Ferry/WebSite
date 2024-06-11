const fs = require('fs');

const adsText = process.env.ADS_TEXT;
if (adsText && adsText.length > 0) {
  fs.writeFileSync('public/ads.txt', adsText);
}
