import React from 'react'
import {FaPlay} from 'react-icons/fa'

function Words({result}) {
    const {word, phonetics, meanings} = result;
    function playAudio(){
        try{
            let audio = new Audio(phonetics[0].audio);
            audio.play();
        } catch (e) {
console.log({e});
        }
    }
  return (
    <div>
      <div>
        <h3 className='text-sky-500 py-2'>Word</h3>
        <div className='flex'>
            <p className='px-2'>{word}</p>
            <p className='px-2'>{meanings[0].partOfSpeech}</p>
            <p className='px-2'>{phonetics[0].text}</p>
            <div >
            <p onClick={playAudio} className='bg-sky-500 text-white p-1 flex cursor-pointer'>
              <FaPlay className='mt-1 pr-1'/>
                {""}
                play audio{""}
            </p>
        </div>
      </div>
      <div>
        <h3 className='text-sky-500 py-2' >Meaning</h3>
        <p>{meanings[0].definitions[0].definition}</p>
      </div>
      <div>
        <h2 className='text-sky-500 py-2'>Synonyms</h2>
        <p>
            {meanings[0].synonyms.map((item,index) => {
                return <p key={index}>{item}</p>
            })}
        </p>
      </div>
    </div>
    </div>
  )
}

export default Words
