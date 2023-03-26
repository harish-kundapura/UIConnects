import React from 'react'
import HomePage from '../Screens/Home/HomePage'
import { Route, Routes } from "react-router-dom";


const Component = () => {
  return (
    <>
    <Routes>
    <Route path="/" exact element={<HomePage />} />
    </Routes>
    </>
  )
}

export default Component