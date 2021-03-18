import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useState, useEffect } from 'react'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({data, length}) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <div>React and Next.js!</div>
      {productList.map(product => (
        <div>{ product.name }</div>
      ))}
    </div>
  )
}

export default HomePage
