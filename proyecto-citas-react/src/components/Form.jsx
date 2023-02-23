import {useState, useEffect} from 'react';
import Error from './Error';

const Form = ({patient, setPatient, patients, setPatients}) => {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if(Object.keys(patients).length > 0) {
            setName(patients.name);
            setOwner(patients.owner);
            setEmail(patients.email);
            setDate(patients.date);
            setSymptoms(patients.symptoms);
        }
    }, [patients])

    const idGenerator = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Validación del Formulario
        if([name, owner, email, date, symptoms].includes('')) {
            setError(true);
            return;
        }
        setError(false);
        // Objeto de Paciente
        const patientObject = {
            name,
            owner,
            email,
            date,
            symptoms,
        }
        if(patients.id) {
            //Editando el registro
            patientObject.id = patients.id

            const updatedPatients = patient.map(patientsState => patientsState.id === patients.id ? patientObject : patientsState);

            setPatient(updatedPatients);
            setPatients({});

        } else {
            //Nuevo Registro
            patientObject.id = idGenerator();
            setPatient([...patient, patientObject]);
        }
        
        //Reiniciar el form
        setName('');
        setOwner('');
        setEmail('');
        setDate('');
        setSymptoms('');

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
                <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-5">
                    <label htmlFor="pet" className="block text-gray-700">Nombre Mascota</label>
                    <input
                        id="pet"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="owner" className="block text-gray-700">Nombre Propietario</label>
                    <input
                        id="owner"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="discharged" className="block text-gray-700">Alta</label>
                    <input
                        id="discharged"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="symptoms" className="block text-gray-700">Síntomas</label>
                    <textarea
                        placeholder="Describe los Síntomas"
                        id="symptoms"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value={patients.id ? 'Guardar Cambios' : 'Agregar Paciente'}
                />
            </form>
        </div>
    );
}

export default Form;