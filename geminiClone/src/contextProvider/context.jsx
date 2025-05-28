import { createContext, useState } from "react";
import Gemini from "../config/gemini.js";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData(prev => prev + nextWord);
    }, 75 * index);
  };

  const onSent = async () => {
    setResultData('');
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    setPrevPrompts(prev => [...prev, input]);

    let response;
    try {
      response = await Gemini(input);

      if (typeof response !== 'string') {
        console.error("Unexpected response type:", response);
        setLoading(false);
        return;
      }
    } catch (error) {
      console.error("Gemini failed:", error);
      setLoading(false);
      return;
    }

    const responseArray = response.split('**');
    let formatted = '';
    for (let i = 0; i < responseArray.length; i++) {
      if (i % 2 === 0) {
        formatted += responseArray[i];
      } else {
        formatted += `<b>${responseArray[i]}</b>`;
      }
    }

    const withLineBreaks = formatted.split('*').join('</br>');
    const words = withLineBreaks.split(' ');

    for (let i = 0; i < words.length; i++) {
      delayPara(i, words[i] + ' ');
    }

    setLoading(false);
    setInput('');
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    loading,
    resultData,
    onSent
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
