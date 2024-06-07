

import React, { useState } from 'react';

function InputTask() {
    const [id, setId] = useState('');
    const [t_name, setT_name] = useState('');
    const [t_course, setT_course] = useState('');

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { id, t_name, t_course };
            const response = await fetch("http://localhost:5000/task", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log(response);
            
            // Clear input fields after successful submission
            setId('');
            setT_name('');
            setT_course('');
        } catch (err) {
            console.error(err.message);
        }
    };
         
    return (
        <div>
            <h1 className="text-center mt-5">List of Tasks</h1>
            <form className="text-center" onSubmit={onSubmitForm}>
                <input placeholder="id" type="text" value={id} onChange={e => setId(e.target.value)}/><br/><br/>
                <input placeholder="t_name" type="text" value={t_name} onChange={e => setT_name(e.target.value)}/><br/><br/>
                <input placeholder="t_course" type="text" value={t_course} onChange={e => setT_course(e.target.value)}/><br/><br/>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    );  
}

export default InputTask;
