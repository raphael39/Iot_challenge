import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import ApiClient from '../../services/ApiClient'
import MachineList from '../MachineList/MachineList'
import MachineMap from '../MachineMap/MachineMap'


function Dashboard () {
  const [allMachines, setAllMachines] = useState(['']);
  
  useEffect(() => {
    ApiClient.getAllMachines().then((machines) => (setAllMachines(machines.data) ));
  }, []);

  /* setInterval(ApiClient.getAllMachines().then((machines) => (setAllMachines(machines.data) )), 30000); */
    

  return (
    <div className='Dashboarddiv'>
       
        <MachineList allMachines={allMachines}></MachineList>
        <MachineMap allMachines={allMachines}></MachineMap>
      
    </div>
  )
};

export default Dashboard