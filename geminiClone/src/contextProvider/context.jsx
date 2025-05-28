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

  const delayPara = (index, nextWord)=>{

  }

  const onSent = async () =>{
    setResultData('');
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input)
    let response;
    try {
      response = await Gemini(input);
      setResultData(response);
    } catch (error) {
      console.log("gemini failed");
    }
    let responseArray = response.split('**')
    let newArray;
    for(let i = 0;i<responseArray.length;i++)
    {
      if(i == 0 || i%2 === 0)
      {
        newArray += responseArray[i]
      }
      else
      {
        newArray += '<b>' + responseArray[i] + '</b>'
      }
    }
    setResultData(newArray);
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