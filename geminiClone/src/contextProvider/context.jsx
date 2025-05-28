import { createContext,useState } from "react";
import Gemini from "../config/gemini.js";


export const Context = createContext();

const ContextProvider = (props) => {

  const [input, setInput] = useState('');
  const [recentPrompt,setRecentPrompt] = useState('');
  const [prevPrompts , setPrevPrompts] = useState([]);
  const [showResult , setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');



  const onSent = async () =>{
    setResultData('');
    setLoading(true);
    setShowResult(true);
    let response;
    try {
      response = await Gemini(input);
      setResultData(response);
    } catch (error) {
      console.log("gemini failed");
    }
    setLoading(false);
    setInput('')
  }

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput
  }

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )


}

export default ContextProvider