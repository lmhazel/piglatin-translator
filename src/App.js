import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)
    

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter(vowel => {
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)
        //this is an array^ ["a", "p", "p", "l", "e"] eachWord= string of apple
      // ACTION ITEM: your Pig Latin logic goes here!
//Pseudo code (words starting in vowels): 
//Input: String of a word
//Output: That word in pig latin
//Process: the function is called firstLetterVowel and adds way to the end of the input. firstLetterVowel identifies words that have a vowel in the 0th index and concats "way" to the end of the word. .join(" ") 

//use vowelsArray to find the first instance of vowels array (0th index) if finding vowelsArray in index 0, then append "way" to end of the word. .indexOf(vowelsArray)


          if (eachWord[0] === "a" ||
          eachWord[0] === "e" ||
          eachWord[0] === "i" ||
          eachWord[0] === "o" ||
          eachWord[0] === "u" ){
            return eachWord.concat("way")
          } else if (eachWord[0] === "q" &&
                    eachWord[1] === "u"){
            return eachWord.substring(2).concat("quay")
          } else if (eachWord[0] === "s" &&
          eachWord[1] === "q" &&
          eachWord[2] === "u"){
            return eachWord.substring(3).concat("squay")
          } else {}

// Pseudocode: else if no vowels in the word but there's a y then take all the consonants before the y and append them to the end with ay


          // input: string with qu as first letters
          // output: string with first instance of vowel as the new beginning of the word and appends quay at the end of the new word
          // Process: add else if statement where qu are in 0 and 1 or 1 and 2 index then concats removes them from the beginning
    

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Lea Hazel</footer>
    </div>
  )
}

export default App