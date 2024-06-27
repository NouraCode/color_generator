
import  { useState } from 'react'

function App() {

  const [background, setBackground] = useState('white')
const getRandomBackground = () =>{
  const randomBackground = `#${Math.floor(Math.random()*16777215).toString(16)}`
  setBackground(randomBackground)
}
  //   if (background == 'white') {
  //     setBackground('black')
  //   } 
  //   else if(background =='black'){
  //     setBackground('red')
  //   } 
  //   else if(background =='pink'){
  //     setBackground('purple')
  //   }
  //  else{
  //    setBackground('white')
  //  }
  

  return (
    <>
    <div className="parent">
    <div className='border'>
      <div style={{backgroundColor: background}} className='color-gen'></div>
      </div>
      <button onClick={getRandomBackground}>change background</button>
      <h1>Fun!!!!!!!!!</h1>
    </div>
    </>
  )
}

export default App