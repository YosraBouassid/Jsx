import './App.css';
import myImage from "./imageInSrc.jpg";

function App() {
  return (

   

    <div className="App">
       <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title">Yosra Bouassida</h1>
    <br />
    <img src={myImage} alt="my pic" width={320} height={240} />
    <br />
    <img src="/imageInPublic.jpg" alt="my pic" width={320} height={240}/>
    {/* <img src="/imageInPublic.jpg" /> */}
  </div>
  <video controls width={320} height={240}>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
    </div>
  );
}

export default App;
