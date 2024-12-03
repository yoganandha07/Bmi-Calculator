import React, { useState } from 'react';
import './index.css'
import underweightImg from '../src/assets/underweight.png';
import healthyImg from '../src/assets/healthy.png';
import overweightImg from '../src/assets/overweight.png';




function App() {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState('');
  const [message, setmessage] = useState('');
  const [imgSrc, setimgSrc] = useState(null)





  let calcBmi = (event) =>{
    event.preventDefault();
    if (weight === 0 || height === 0){
      alert('Please enter values');
    }else{
      let bmi = ( weight/ (height/100) ** 2);
      setbmi(bmi.toFixed(1))

      if (bmi < 18.5){
        setmessage('You are underweight!')
        setimgSrc(underweightImg)
      }else if (bmi >= 18.5 && bmi < 25){
        setmessage('You are in a normal weight range!')
        setimgSrc(healthyImg)
      }else{
        setmessage('You are Over Weight!')
        setimgSrc(overweightImg)
      }
    }
  }



  



  let reload = () =>{
    window.location.reload();
  }


  return (
    <div className='App'>
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={ (event) => setweight(event.target.value)}/>
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={ (event) => setheight(event.target.value)}/>
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
          </div>
        </form>
        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className='img-container'>
          <img src={imgSrc} alt='' /> 
        </div>
      </div>
    </div>
  );
}

export default App;
