import React ,{useState}from 'react'


export default function TextForm(props) {
   const handleUpClick = ()=>{
    // console.log("Uppercase was Clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText)
   }
   const handleLoClick = ()=>{
    // console.log("Uppercase was Clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText)
   }
   const handleClearClick = ()=>{
    // console.log("Uppercase was Clicked"+ text);
    let newText = '';
    setText(newText)
   }
   
   const downloadTextFile = ()=>{
    const textBlob = new Blob([text], { type: 'text/plain' });
    const textUrl = URL.createObjectURL(textBlob);
    const link = document.createElement('a');
    link.href = textUrl;
    link.download = 'textFile.txt';
    link.click();
   }



   const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
   }


    const [text, setText] = useState('');

  return (
    <>
<div className="container">
    <h1>{props.heading}</h1>
  
<div className="mb-3">
{/* <label for="myBox" class="form-label">Example textarea</label> */}
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={downloadTextFile}>Download Text</button>
</div>
<div className="container my-2">
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words,{text.length}characters</p>
  <p>{ 0.008 * text.split(" ").length}  Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>

</div>
</>
)
}
