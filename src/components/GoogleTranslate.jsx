// src/components/GoogleTranslate.jsx
import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Definisco la callback nel window
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'it',
          includedLanguages: 'en',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };

    // Carico lo script di Google Translate
    const script = document.createElement('script');
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Pulizia script al dismount
    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div id="google_translate_element" style={{ position: 'fixed', top: 10, right: 10, zIndex: 1000 }}></div>
  );
};

export default GoogleTranslate;
