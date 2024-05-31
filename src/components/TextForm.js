import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("on Change");
        setText(event.target.value);
        // props.showAlert("Converted to uppercase!", "success");
    }

    const handelCopy = ()=>{
        // console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied successfully!", "success");
    }

    const handelExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed successfully!", "success");
    }

    
    const [text, setText] = useState('');

    return (
        <>
        <div ckassName="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
            </div>    

            <button className="btn btn-primary mx-1" onClick={handleUpClick} > Convert to Upper Case </button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} > Convert to Lower Case </button>
            <button className="btn btn-primary mx-1" onClick={handelCopy} > Copy Text </button>
            <button className="btn btn-primary mx-1" onClick={handelExtraSpaces} > Remove Extra Spaces </button>
            
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length - 1} words and {text.length} characters</p>
            <p>{0.008 * (text.split(" ").length - 1)} minutes to read the whole text.</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing to preview!!"}</p>
        </div>

        </>
    )
}
