import React, { useState, useEffect } from 'react';
import './MachineList.css'


function MachineList ({allMachines}) {
    
  return (
    <div className='MachineListdiv'>
        
       
        
  {allMachines.map((machine, index) => <div className='SingleMachineBox'><div><h3>Machine: {index +1}</h3></div><div><p>status: {machine.status}</p></div></div>)}
      
    </div>
  )
};

export default MachineList