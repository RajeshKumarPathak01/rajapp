import React, { useState } from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


const Registeration = () => {
    const [fname, setFName] = useState("");
    const [phone, setPhone] = useState("");
    const [hobby, setHobby] = useState("");

    const [storedData, setStoredData] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {
            fname,
            phone,
            hobby
        };
        setStoredData([...storedData, newEntry])
        setFName("");
        setPhone("");
        setHobby("");
    }
    return (
        <>    <div className="PersonalDetails">
            <h1 className="text-center">Personal Details</h1>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            value={fname}
                            onChange={(e) => setFName(e.target.value)}
                            className="form-control w-50"
                            id="fname"
                            placeholder="Enter your Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">phone</label>
                        <input
                            type="number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control w-50"
                            id="phone"
                            placeholder="Enter your phone"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Hobby</label>
                        <input
                            type="text"
                            value={hobby}
                            onChange={(e) => setHobby(e.target.value)}
                            className="form-control w-50"
                            id="hobby"
                            placeholder="Enter your hobby"
                        />
                    </div><br />
                                        {console.log(storedData)}
                    <button className='btn btn-warning' >Submit</button>

                </form>
            </div>
            <div className='d-flex justify-content-center'>
                <h1>Registered Entries</h1>
                <ul>
                    {storedData.map(e => (
                        <li key={e.fname}>
                            Name: {e.fname} | Phone: {e.phone} | Hobby: {e.hobby}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
       



        </>


    )
}

export default Registeration
