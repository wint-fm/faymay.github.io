async function translateContent(language) {
    const contentElement = document.getElementById('content');
    if (!contentElement) {
        console.error('Content element not found');
        return;
    }

    const targetLanguage = language || document.getElementById('languageSelector').value;
    
    const textNodes = contentElement.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, td, th');
    const textsToTranslate = Array.from(textNodes).map(node => node.textContent.trim()).filter(text => text !== '');

    try {
        const translatedTexts = await window.translateText(textsToTranslate, targetLanguage);
        textNodes.forEach((node, index) => {
            if (node.textContent.trim() !== '') {
                node.textContent = translatedTexts[index].translations[0].text;
            }
        });
    } catch (error) {
        console.error('Translation error:', error);
    }
}

// Expose the function globally
window.translateContent = translateContent;