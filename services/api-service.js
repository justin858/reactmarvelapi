import request from './request';
import crypto from 'crypto';
import * as apiconfig from '../config/apiconfig';


export let findAll = () => {
  return request({url:"https://gateway.marvel.com/v1/public/characters?ts=1&apikey=69b7c259e097f3089ff365f0714a8b1d&hash=382a4c7093c4c26710be485ea30dffaf"})
        .then(data => data = JSON.parse(data))
}

export let findOne = (path) => {
  var baseURL = 'https://gateway.marvel.com/v1/public';
  var publickey = '69b7c259e097f3089ff365f0714a8b1d';
  var privatekey = '1241b6fa59d25e8573c02e94ec17531e4a849cb5';
  var timestamp = Date.now();
  var md5hash = crypto.createHash('md5').update(timestamp + privatekey + publickey ).digest("hex");
  var Url = baseURL + path + '?ts=' + timestamp + '&apikey=' + publickey + '&hash=' + md5hash ;

  return request({url:Url})
        .then(data => data = JSON.parse(data))
}

export let findAllComics = () => {
  return request({url:"https://gateway.marvel.com/v1/public/comics?ts=1&apikey=69b7c259e097f3089ff365f0714a8b1d&hash=382a4c7093c4c26710be485ea30dffaf"})
        .then(data => data = JSON.parse(data))
}
