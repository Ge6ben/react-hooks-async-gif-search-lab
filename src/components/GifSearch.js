import React,{useState} from 'react'

export default function GifSearch({setQuerySearch}) {
    const [inputTxt, setInputTxt] = useState('')
    function handleClick(e) {
        e.preventDefault();
        setQuerySearch(inputTxt)
    }

    return (
        <div  style={{margin:'10px'}}>
            
            <label >Enter a Search term:</label>
            <br/>
            <input  onChange={(e) => setInputTxt(e.target.value)}value={inputTxt} />
            <button  onClick={handleClick} type="submit">Find Gifs</button>
        </div>
    )
}
