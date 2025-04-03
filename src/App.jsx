import { useState, useEffect } from 'react';
import Nav from './Nav';
import Scp from './Scp';
import './App.css';


function App() {
  const [scps, setScps] = useState([]); 
  const [selectedScp, setSelectedScp] = useState(null); 

  useEffect(() => {
    fetch("/data.json")
      .then(response => response.json())
      .then(data => setScps(data))
      .catch(error => console.error("Error loading data", error));
  }, []);

  return (
    <div>
      <h2>SCP Subjects</h2>
      <Nav scps={scps} onScpSelect={setSelectedScp} />
      {selectedScp ? <Scp scp={selectedScp} /> : <p>Select an SCP file to view the details</p>}
      
    </div>
  );
}

export default App;
