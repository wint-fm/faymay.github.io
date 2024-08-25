(function() {
    var translatorKey = '1e5e3e1298d345dbbd3b5a0f54c4139c';
    var translatorRegion = 'southeastasia';
    var accessToken = '';
    var tokenExpiryTime = 0;

    async function getToken() {
        if (Date.now() < tokenExpiryTime) {
            return accessToken;
        }

        const response = await fetch(`https://${translatorRegion}.api.cognitive.microsoft.com/sts/v1.0/issueToken`, {
            method: 'POST',
            headers: {
                'Ocp-Apim-Subscription-Key': translatorKey
            }
        });

        if (!response.ok) {
            throw new Error('Failed to obtain access token');
        }

        accessToken = await response.text();
        tokenExpiryTime = Date.now() + 9 * 60 * 1000; // Token valid for 10 minutes, we refresh slightly earlier
        return accessToken;
    }

    async function translateText(texts, targetLanguage) {
        const token = await getToken();
        const response = await fetch(`https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${targetLanguage}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(texts.map(text => ({ 'Text': text })))
        });

        if (!response.ok) {
            throw new Error('Translation request failed');
        }

        return response.json();
    }

    // Expose the translation function to the global scope
    window.translateText = translateText;
})();