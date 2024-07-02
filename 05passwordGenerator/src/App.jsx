import { useState, useCallback, useEffect, useRef } from "react";
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charactersAllowed, setcharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (numberAllowed) str += "1234567890";
    if (charactersAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charactersAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {passwordGenerator()},[length, numberAllowed, charactersAllowed, passwordGenerator])

  const passwordRef = useRef(null);

  return (
    <>
      <h1 className="text-4xl text-center bg-lime-300 m-5 p-4 rounded-lg translate-x-1 duration-200 ">
        Password Generator
      </h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black bg-orange-400 ">
        <h1 className="text-black text-center my-3">Password Generator</h1>
        <div className="flex rounded-lg overflow-hidden mb-4 p-4">
          <input
            type="text"
            className="outline-none w-full py-1 placeholder-black"
            id=""
            value={password}
            placeholder="Password"
            ref={passwordRef}
          />
          <button className="bg-blue-600 p-4 rounded-r-lg shrink-0" onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 p-2">
          <div className="flex items-center gap-x-1 p-4">
            <input
              type="range"
              name="range"
              id=""
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> Length ({length})</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charactersAllowed}
              id="characterInput"
              onChange={() => {
                setcharactersAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
