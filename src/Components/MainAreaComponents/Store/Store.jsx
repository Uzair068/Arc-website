import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Store.css'

const API = 'https://fakestoreapi.com/products'
function Store() {
  const [data, setdata] = useState([])

  const getdata = async () => {
    const result = await axios.get(API)
    setdata(result.data)
    console.log(result.data)
  }

  useEffect(() => {
    getdata()
  }, [])
  return (
    <>
      <h1>Store</h1>
      <div className="cardflex">

        {data.map((item) => {
          return (
            <>
              <div className="cards">
                <div className="image">
                  <img src={item.image} alt="image" />
                </div>
                <div className="details">
                  <h5>title: {item.title}</h5>
                  <p>discreption:</p>
                  <h3>price : {item.price}</h3>
                </div>
              </div>
            </>
          )
        })}



      </div>

    </>
  )
}

export default Store
