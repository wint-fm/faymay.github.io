document.addEventListener('DOMContentLoaded', function() {
    const originalText = new Map();

    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage) {
        document.getElementById('languageSelector').value = storedLanguage;
        translateContent(storedLanguage);
    }

    async function translateContent(language) {
        const targetLanguage = language || document.getElementById('languageSelector').value;

        localStorage.setItem('preferredLanguage', targetLanguage);

        if (targetLanguage === 'en') {
            restoreOriginalText();
            return;
        }

        // Updated selector to target only elements with the 'translate' class
        const textNodes = document.querySelectorAll('.translate');

        textNodes.forEach((node) => {
            if (!originalText.has(node)) {
                originalText.set(node, node.innerText);
            }
        });

        const textsToTranslate = Array.from(textNodes).map(node => originalText.get(node));
        // Debugging: log the texts that will be sent for translation
        console.log('Texts to Translate:', textsToTranslate);

        const subscriptionKey = '163096b81aed46ff8c9e863c3537838f';  
        const region = 'southeastasia';  
        const endpoint = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=' + targetLanguage;

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Ocp-Apim-Subscription-Key': subscriptionKey,
                    'Ocp-Apim-Subscription-Region': region,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(textsToTranslate.map(text => ({ Text: text })))
            });

            // Debugging: log the response status and body
            console.log('Response Status:', response.status);
            console.log('Response Status Text:', response.statusText);

            if (response.ok) {
                const data = await response.json();
                data.forEach((translation, index) => {
                    textNodes[index].innerText = translation.translations[0].text;
                });
            } else {
                console.error('Translation request failed', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error translating content:', error);
        }
    }

    function restoreOriginalText() {
        originalText.forEach((text, element) => {
            element.innerText = text;
        });
    }

    window.translateContent = translateContent;
});
