import React from 'react';


function Keyvalue() {

        const marvels =[{id: 1, name: 'Tony stark', power:'Iron suit' },
                        {id: 2, name: 'Thor', power:'Thunder'},
                    {id: 3, name: 'Rogers', power:'Body'}]
        
        const mall = {
            color: "red",
            backgroundColor: "#34ebcc",
            padding: "15px"}

  return (
    <div>
        <h2 style={mall}>Marvels</h2>
        <ol>
        {marvels.map((marvel) => <li key={marvel.id}>I am {marvel.name} my powers is {marvel.power}</li>)}
        </ol>

    </div>
  )
}

export default Keyvalue