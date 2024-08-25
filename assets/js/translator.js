// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Object to store the original text of each element
    const originalText = new Map();

    // Check if there is a stored language preference and apply it
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage) {
        document.getElementById('languageSelector').value = storedLanguage;
        translateContent(storedLanguage);
    }

    async function translateContent(language) {
        const contentElement = document.getElementById('content');
        if (!contentElement) {
            console.error('Content element with ID "content" not found.');
            return;
        }

        const targetLanguage = language || document.getElementById('languageSelector').value;

        // Store the selected language in local storage for future page loads
        localStorage.setItem('preferredLanguage', targetLanguage);

        // Check if reverting to original language
        if (targetLanguage === 'en') { // Replace 'en' with your default language code
            restoreOriginalText();
            return;
        }

        // Gather all text nodes to translate, including button text
        const textNodes = contentElement.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a.button, li, td, th'); 

        // Store original text before any translation
        textNodes.forEach((node) => {
            if (!originalText.has(node)) {
                originalText.set(node, node.innerText); // Store original text
            }
        });

        // Prepare original texts for translation
        const textsToTranslate = Array.from(textNodes).map(node => originalText.get(node)); // Always use original text

        const subscriptionKey = '3e82d5998a474d7588390426ac7a904a';  
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

    // Function to restore the original text content
    function restoreOriginalText() {
        originalText.forEach((text, element) => {
            element.innerText = text;
        });
    }

    // Attach the translateContent function to the global window object for access from the HTML
    window.translateContent = translateContent;
});
