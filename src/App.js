import React, { useState } from 'react';
import './App.css';

function App() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
 

  const createPatient = () => {
    const newPatient = {
      id: patients.length + 1,
      name: '',
      age: 0,
      sex: '',
      phone: '',
      email: '',
    };
    setPatients([...patients, newPatient]);
    setSelectedPatient(newPatient);
  };

  const handlePatientChange = (field, value) => {
    if (selectedPatient) {
      const updatedPatient = { ...selectedPatient, [field]: value };
      setSelectedPatient(updatedPatient);
    }
  };

  const savePatient = () => {
    if (selectedPatient) {
      const updatedPatients = patients.map(patient =>
        patient.id === selectedPatient.id ? selectedPatient : patient
      );
      setPatients(updatedPatients);
      setSelectedPatient(null);
    }
  };

  return (
    <div className="App">
      <h1>Patients Management</h1>
      <button onClick={createPatient}>Create New Patient</button>
      <div className="patients-list">
        <h2>Patients List</h2>
        <ul>
          {patients.map(patient => (
            <li key={patient.id} onClick={() => setSelectedPatient(patient)}>
              {patient.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedPatient && (
        <div className="patient-details">
          <h2>Patient Details</h2>
          <input
            type="text"
            placeholder="Name"
            value={selectedPatient.name}
            onChange={e => handlePatientChange('name', e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            value={selectedPatient.age}
            onChange={e => handlePatientChange('age', parseInt(e.target.value))}
          />
          <input
            type="text"
            placeholder="Sex"
            value={selectedPatient.sex}
            onChange={e => handlePatientChange('sex', e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            value={selectedPatient.phone}
            onChange={e => handlePatientChange('phone', e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={selectedPatient.email}
            onChange={e => handlePatientChange('email', e.target.value)}
          />
          <button onClick={savePatient}>Save</button>
        </div>
      )}
    </div>
  );
}

export default App;
