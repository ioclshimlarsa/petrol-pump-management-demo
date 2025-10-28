// frontend/src/pages/PumpConfigPage.tsx
import React, { useState } from 'react';
import axios from 'axios';
export function PumpConfigPage() {
  const [form, setForm] = useState({name:''});
  const handleChange = (e:any)=>setForm({...form, [e.target.name]:e.target.value});
  const handleSubmit = async ()=>{
    await axios.post('/api/config/pump', form);
    alert('Pump created');
  };
  return (
    <div>
      <h2>Pump Configuration</h2>
      <input type="text" name="name" placeholder="Pump Name" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
