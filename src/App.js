import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Blog from './Blog'
import Signin from './Signin'
import Signup from './Signup'
import Homepage from './Homepage'
import About from './About'
import Forget from './Forget'
import Contact from './Contact'
import InfantDiet from './InfantDiet'
import ToddlerDiet from './ToddlerDiet'
import KidsDiet from './KidsDiet'
import TeenageDiet from './TeenageDiet'
import AdultDiet from './AdultDiet'
import ElderlyDiet from './ElderlyDiet'
import Bmi from './Bmi'
const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Blog />}/>
    <Route path='/Signin' element={<Signin />}/>
    <Route path='/Signup' element={<Signup />}/>
    <Route path='/Homepage' element={<Homepage />}/>
    <Route path='/About' element={<About />}/>
    <Route path='/Contact' element={<Contact />}/>
    <Route path='/Forget' element={<Forget />}/>
    <Route path='/InfantDiet' element={<InfantDiet />}/>
    <Route path='/ToddlerDiet' element={<ToddlerDiet />}/>
    <Route path='/KidsDiet' element={<KidsDiet />}/>
    <Route path='/TeenageDiet' element={<TeenageDiet />}/>
    <Route path='/AdultDiet' element={<AdultDiet />}/>
    <Route path='/ElderlyDiet' element={<ElderlyDiet />}/>
    <Route path='/Bmi' element={<Bmi />}/>
    </Routes>
    </>
  )
}

export default App