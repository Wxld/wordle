import { useState } from "react";

const useWordle = (targetWord) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [history, setHistory] = useState([]);
    const [historyPro, setHistoryPro] = useState([]);
    const [correct, setCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({});

    const handleEnter = () => {
        if(history.includes(currentGuess)) {
            setCurrentGuess("");
            // send some message that the current guess can't be added
            
            return null;
        } else {
            let currentObject = [], newKeys={};

            for(let i=0; i<5; ++i) {
                if(targetWord[i] === currentGuess[i]) {
                    //make the curent word green
                    currentObject.push({key: currentGuess[i], color: "green"});
                    newKeys[currentGuess[i]] = "green";
                } else if(targetWord.includes(currentGuess[i])) {
                    //make the current word yello
                    currentObject.push({key: currentGuess[i], color: "yellow"});
                    newKeys[currentGuess[i]] = "yellow";
                } else {
                    currentObject.push({key: currentGuess[i], color: "grey"});
                    newKeys[currentGuess[i]] = "grey";
                }
            }
            
            setHistoryPro(prev => [...prev, currentObject]);
            setHistory(prev => [...prev, currentGuess]);
            
            if(targetWord === currentGuess) {
                setCorrect(true);
            } 
                
            setTurn(prev => prev+1);
                
            if(turn === 6 && !correct) {
                //end game
                setTurn(-1);
            }

            setUsedKeys((prev) => {
                let prevKeys = {...prev};

                currentObject.forEach(l => {
                    const currentColor = prevKeys[l.key];

                    if(l.color === "green") {
                        prevKeys[l.key] = "green";
                    } else if(l.color === "yellow" && currentColor !== "green") {
                        prevKeys[l.key] = "yellow";
                    } else if(l.color === "grey" && currentColor !== "yellow" && currentColor !== "green") {
                        prevKeys[l.key] = "grey";
                    }
                })

                return prevKeys;
            })
            console.log(newKeys);

            setCurrentGuess("");
            return correct;
        }
    } 

    const handleKeyUp = ({ key }) => {
        if(/^[A-Za-z]/.test(key) && currentGuess.length < 5 && key.length === 1) {
            setCurrentGuess(prev => prev+key);
        } else if(key === "Backspace" && currentGuess.length) {
            setCurrentGuess(prev => prev.slice(0, -1));
        } else if(key === "Enter" && currentGuess.length === 5) {
            handleEnter();
        } else {
            //some shaky animation
        }
        
    }

    return { handleKeyUp, historyPro, currentGuess, correct, turn, usedKeys };
}


export default useWordle;