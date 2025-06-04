import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Funzione di inizializzazione di Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'it',
          includedLanguages: 'en,de,fr,es,pt,ar,zh-CN,ja',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };

    // Caricamento dello script di Google Translate
    const script = document.createElement('script');
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Funzione di pulizia al dismount
    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  useEffect(() => {
    // Nascondere l'iframe del banner dopo il caricamento
    const interval = setInterval(() => {
      const iframe = document.querySelector('.goog-te-banner-frame');
      if (iframe) {
        iframe.style.display = 'none';
        document.body.style.top = '0px';
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        position: 'fixed',
        top: 10,
        right: 10,
        zIndex: 1000,
      }}
    ></div>
  );
};

export default GoogleTranslate;
