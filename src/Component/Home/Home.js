import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar';
import About from '../page/About';
import Service from '../services/Service';
import Reachus from '../Reach/Reachus';
import Footer from '../Footer/Footer';
export default function Home(){
return(
   <>
<Navbar/>
<br/>
<About/>
<Service/>
<br/>
<Reachus/>
<br/>
<br/>

<br/>
<Footer/>
   </> 
)}