import { useRef, useState } from 'react';
import video from "./Components/videos/mov_bbb.mp4";
import imgBlack from "./assets/images/color-black-white-photo10.avif";
import imgColor from "./assets/images/color-black-white-photo14.avif";
import NewComponent from "./Components/NewComponent";
function App() {
  const videoRun = useRef(null);
  const imgREF = useRef(null);

  function imgToColor() {
    console.log(imgREF.current);
    imgREF.current.src=imgColor;
  }

  function imgToBlack() {
    console.log(imgREF.current);
    imgREF.current.src=imgBlack;
  }

  function handlePlay() {
    console.log(videoRun);
    videoRun.current.play();
  }

  function handlePause() {
    videoRun.current.pause();
  }
  // console.log(video)/
  // const [va, setVa] = useState('')
  // const inputRefEmail = useRef(null)
  // const inputRefPass = useRef(null)
  // function newInputValue(data) {
  //   inputRefEmail.current.value = data;
  // }
  // const passData = ()=>{
  //   console.log(inputRef)
  // }
  // const submitForm = (e)=>{
  //   e.preventDefault()
  //   console.log({"emai": inputRefEmail.current.value,"password": inputRefPass.current.value})
  // }
  return (
    <div className="App">
      {/* <form onSubmit={submitForm}>
      <input type='text' ref={inputRefEmail}/>
      <input type='text' onChange={(e)=>setVa(e.target.value)}/>
      <input type="submit"/>
      <NewComponent newInputValue={newInputValue} inputRefEmail={inputRefEmail}/>
     </form>
     <div>{inputRefEmail?.current?.value}</div>
     <div>{va}</div> */}
      <div>
        <video ref={videoRun} src={video} controls autoPlay>
          {/* <source  type="video/mp4"/> */}
        </video>
        <button onClick={handlePlay}>play</button>
        <button onClick={handlePause}>pause</button>
      </div>
      <div>
        <img width={"200px"} onMouseOver={imgToColor} onMouseLeave={imgToBlack} ref={imgREF} src={imgBlack} alt="" />
      </div>
    </div>
  )
}

export default App
