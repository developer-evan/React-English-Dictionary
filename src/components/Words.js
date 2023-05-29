import React from 'react'

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
        <h3>Word</h3>
        <div>
            <p>{word}</p>
            <p>{meanings[0].partOfSpeech}</p>
            <p>{phonetics[0].text}</p>
            <div >
            <p onClick={playAudio}>
                {""}
                play audio{""}
            </p>
        </div>
      </div>
      <div>
        <h3>Meaning</h3>
        <p>{meanings[0].definitions[0].definition}</p>
      </div>
      <div>
        <h2>Synonyms</h2>
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
