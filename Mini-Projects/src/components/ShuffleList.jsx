import React, { useState } from 'react'

function ShuffleList() {

    const [items, setItems] = useState([
        "Banana",
        "Orange",
        "Melon",
        "Kiwi",
        "Papaya"
    ])

  return (
    <>
    <div className="list-box">
        <ul>
            {
                items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>

        <button className='submitBtn'>Shuffle List</button>
    </div>
    </>
  )
}

export default ShuffleList