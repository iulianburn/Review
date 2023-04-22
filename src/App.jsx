import React, {useState} from 'react';
import people from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const App = () => {
  const[index,setIndex]=useState(0);
  const{id,name, job,image,text}= people[index]


  const randomPerson=()=>{
    let randomNumber=Math.floor(Math.random()*people.length);
    console.log(randomNumber);
    if(randomNumber===index){
      randomNumber=index+1;
    }
   const newIndex=randomNumber%people.length;
   setIndex(newIndex) 
  }

  const nextPerson=()=>{
    setIndex((currentIndex)=>{
      const newIndex=(currentIndex+1)%people.length;
    
      return newIndex;   
    });
  }
  const prevPerson=()=>{
    setIndex((currentIndex)=>{
      const newIndex=(currentIndex-1+people.length)%people.length;
      return newIndex;  
    });
  }

return (<main>
  <article className='review'>
    <div className='img-container'>
      <img className='person-img' src={image}alt={name}/>
      <span className='quote-icon'> <FaQuoteRight/>  </span>
          </div>

          <h4 className='author'>{name}</h4>
          <p className='job'>  {job}</p>
          <p className='info'>{text}</p>

          <div className='btn-container'>
            <button className='prev-btn' type='button' onClick={prevPerson}> <FaChevronLeft/> </button>
            <button className='next-btn' type='button' onClick={nextPerson}> <FaChevronRight/> </button>

          </div>
          <button type='button' className='btn btn-hipster' onClick={randomPerson}> surprise me</button>

   </article>

  </main>
  )
}

export default App