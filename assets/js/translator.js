// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const originalText = new Map();
    const languageSelector = document.getElementById('languageSelector');
    const contentElement = document.getElementById('content');
    
    if (!contentElement) {
        console.error('Content element with ID "content" not found.');
        return;
    }

    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage) {
        languageSelector.value = storedLanguage;
        translateContent(storedLanguage);
    }

    async function translateContent(language) {
        const targetLanguage = language || languageSelector.value;
        localStorage.setItem('preferredLanguage', targetLanguage);

        if (targetLanguage === 'en') {
            restoreOriginalText();
            return;
        }

        const textNodes = getTextNodes(contentElement);

        // Store original text before any translation
        textNodes.forEach((node) => {
            if (!originalText.has(node)) {
                originalText.set(node, node.textContent); // Use textContent instead of innerText
            }
        });

        const textsToTranslate = textNodes.map(node => originalText.get(node));

        try {
            const translations = await fetchTranslations(textsToTranslate, targetLanguage);
            applyTranslations(translations, textNodes);
        } catch (error) {
            console.error('Error translating content:', error);
        }
    }

    function getTextNodes(element) {
        // Include list items, table cells, anchor text, among others
        return Array.from(element.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a.button, li, td, th'));
    }

    async function fetchTranslations(texts, targetLanguage) {
        const subscriptionKey = '3e82d5998a474d7588390426ac7a904a';  // Replace with your actual subscription key
        const region = 'southeastasia';
        const endpoint = `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${targetLanguage}`;

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Ocp-Apim-Subscription-Key': subscriptionKey,
                'Ocp-Apim-Subscription-Region': region,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(texts.map(text => ({ Text: text })))
        });

        if (!response.ok) throw new Error(`Translation request failed: ${response.status} ${response.statusText}`);
        return response.json();
    }

    function applyTranslations(data, textNodes) {
        data.forEach((translation, index) => {
            if (textNodes[index].tagName.toLowerCase() === 'a') {
                // For anchor tags, update only the textContent to preserve the href
                textNodes[index].textContent = translation.translations[0].text;
            } else {
                // Apply translations to other elements
                textNodes[index].textContent = translation.translations[0].text;
            }
        });
    }

    function restoreOriginalText() {
        originalText.forEach((text, element) => {
            element.textContent = text;
        });
    }

    window.translateContent = translateContent;
});
