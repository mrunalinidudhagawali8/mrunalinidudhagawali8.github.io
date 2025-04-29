// script.js
async function shortenUrl() {
    const originalUrl = document.getElementById('originalUrl').value;

    const response = await fetch('https://url-shortener-api-production-ec50.up.railway.app/api/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalUrl })
    });

    const data = await response.json();

    if (data.shortUrl) {
        document.getElementById('result').innerHTML = `
            Short URL: <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>
        `;
    } else {
        document.getElementById('result').innerText = 'Something went wrong!';
    }
}
