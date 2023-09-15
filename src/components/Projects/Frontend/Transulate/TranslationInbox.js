import React, { useState, useEffect } from 'react';
import axios from 'axios';

const languageOptions = [
  { code: 'hi', name: 'Hindi' },
  { code: 'ta', name: 'Tamil' },
  { code: 'kn', name: 'Kannada' },
  { code: 'ur', name: 'Urdu' },
  { code: 'ar', name: 'Arabic' },
  { code: 'te', name: 'Telugu' },
];

function TranslationInbox() {
  const [text, setText] = useState(''); // User's input text
  const [selectedLanguage, setSelectedLanguage] = useState('kn'); // Default language: Kannada
  const [translation, setTranslation] = useState('');

  useEffect(() => {
    translateText();
  }, [text, selectedLanguage]);

  const translateText = async () => {
    try {
      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2`,
        null,
        {
          params: {
            q: text,
            target: selectedLanguage,
            key: 'YOUR_GOOGLE_TRANSLATE_API_KEY', // Replace with your actual API key
          },
        }
      );

      setTranslation(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  const selectedLanguageName = languageOptions.find(
    (option) => option.code === selectedLanguage
  ).name;

  return (
    <div>
      <h1>Translation Inbox</h1>
      <div>
        <textarea
          placeholder="Enter text to translate"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          {languageOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2>Translation ({selectedLanguageName}):</h2>
        <p>{translation}</p>
      </div>
    </div>
  );
}

export default TranslationInbox;
