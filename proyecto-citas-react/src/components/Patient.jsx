const Patient = ({patient, setPatients, deletePatient}) => {
    const{name, owner, email, date, symptoms, id} = patient;
    const handleDelete = () => {
        const response = confirm('¿Estás seguro de que deseas eliminar este paciente?');
        if(response) {
            deletePatient(id);
        }
    }
  return (
    <div className="mx-5 my-10 bg-white shadow-sm px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{name}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">{owner}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">E-mail: {''}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
            <span className="font-normal normal-case">{date}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
            <span className="font-normal normal-case">{symptoms}</span>
        </p>
        <div className="flex justify-between mt-10">
            <button
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={() => setPatients(patient)}
            >Editar</button>
            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={handleDelete}
            >Eliminar</button>
        </div>
    </div>
  )
}

export default Patient