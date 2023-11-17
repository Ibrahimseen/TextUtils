import React, {useState} from 'react'

export default function Textarea(props) {

    const handlechange = (event) => {
        setText(event.target.value)
    }

    const handleUpclick = () => {
        let a = Text.toLocaleUpperCase();
        setText(a);
        props.showalert("converted to uppercase","succes")
    }
    const handledownclick = () => {
        let b = Text.toLocaleLowerCase();
        setText(b);
        props.showalert("converted to lowercase","succes")
    }
    const handleclear = () => {
        let c = ""
        setText(c);
        props.showalert("clear all the text","succes")

    }
    const handleextra = () => {
        let d = Text.split(/[ ]+/)
       setText(d.join(" "));
       props.showalert("remove Extra spaces","succes")
    }
    const handlecopy = () => {
        let e = document.getElementById("my-box")
        navigator.clipboard.writeText(e.value);
        props.showalert("copy","succes")
        // props.showalert("copy","danger")
       
        
    }

const [Text, setText] = useState('enter Youe text to anlyze')

  return (
    <>
    <div className="container" style={{color:props.Mode === 'dark'?'white':'black'}}>
        <h1 className=" my-3 " style={{color: 
    props.mode=== 'dark'?'white':'black' }}>Enter Text to analyze</h1>

        <div className="mb-3">
  <label htmlFor="my-box"   className="form-label"></label>
  <textarea className="form-control" onChange={handlechange} value={Text} id="my-box" rows="8" style={{backgroundColor: 
    props.mode=== 'dark'?'#13446e':'white',
    color:props.mode=== 'dark'?'white':'black'  }} ></textarea>
</div>
<button type="button" onClick={handleUpclick} className="btn my-1 mx-2 btn-primary">converted to uppercase</button>
<button type="button" onClick={handledownclick} className="btn   my-1 mx-2 btn-primary">converted to lowercase</button>
<button type="button" onClick={handleclear} className="btn btn-primary my-1 mx-2 ">clear  All Text</button>
<button type="button" onClick={handleextra} className="btn btn-primary my-1 mx-2 ">Remove extra spaces</button>
<button type="button" onClick={handlecopy} className="btn btn-primary my-1 mx-2 ">copy Text</button>
        
    </div>

    <div className="container" style={{color: 
    props.mode=== 'dark'?'white':'black' }}>
        <h2 className="my-2 mx-2">  Text preview </h2>
        <p> {Text.length >0? Text:"enter text to show"} </p>
        <h3> Time & words</h3>
        <p> {0.008 * Text.split(" ").filter((Elements)=>{return Elements.length!==0}).length}</p>
        <p> {Text.split(/\s/).filter((Element)=> {return Element.length!==0}).length} words and {Text.length} characters  </p>
</div>


    </>
  )
}


