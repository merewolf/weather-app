const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/6ebcedb699e1ba0c16c0a098a065102e/' + latitude + ',' + longitude + '?units=si'
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 
                'temperature: ' + body.currently.temperature +
                ' RainChance: ' + body.currently.precipProbability +
                ' Summary: ' + body.daily.data[0].summary
            )
        }
    })
}

module.exports = forecast