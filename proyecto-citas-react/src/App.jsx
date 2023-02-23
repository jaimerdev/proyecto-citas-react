import {useState, useEffect} from 'react'
import Header from "./components/Header";
import Form from "./components/Form";
import PatientList from "./components/PatientList";

function App() {
  const [patient, setPatient] = useState([]);
  const [patients, setPatients] = useState({});

  useEffect(() => {
    const obtainLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patient')) ?? [];
      setPatient(patientsLS);
    }
    obtainLS();
  }, [])

  useEffect(() => {
    localStorage.setItem('patient', JSON.stringify(patient));
  }, [patient])

  const deletePatient = id => {
    const updatedPatients = patient.filter(patient => patient.id !== id);
    setPatient(updatedPatients);
  }
  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Form
          patient = {patient}
          setPatient = {setPatient}
          patients = {patients}
          setPatients = {setPatients}
        />
        <PatientList
          patient = {patient}
          setPatients = {setPatients}
          deletePatient = {deletePatient}
        />
      </div>
    </div>
  )
}

export default App
