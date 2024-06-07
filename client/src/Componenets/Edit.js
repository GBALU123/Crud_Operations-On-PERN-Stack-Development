import React,{Fragment,useState} from "react";

const  Edit= ({task})  => {

    const [t_name,  setT_name,] = useState(task.t_name);
    const [t_course,  setT_course,] = useState(task.t_course);
    
    //edit t_name and  function

    const updateT_name  = async(e) => {
 
        e.preventDefault();
     try {
        
        const body  = {t_name,t_course};
        const response = await fetch(`http://localhost:5000/tasks/${task.id}`,
    {
        method:"PUT",
        headers:{"content-type": "application/json"},
        body:JSON.stringify(body)
    })
    console.log(response)
   
window.location="/"
     } catch (err) {

        console.error(err.message);
        
     }

    };
    const updateT_course = async(e) => {
 
      e.preventDefault();
   try {
      
      const body  = {t_course};
      const response = await fetch(`http://localhost:5000/tasks/${task.id}`,
  {
      method:"PUT",
      headers:{"content-type": "application/json"},
      body:JSON.stringify(body)
  })
  console.log(response)
 
window.location="/"
   } catch (err) {

      console.error(err.message);
      
   }

  }
   
    return <Fragment>
  
 
    <button 
    type="button" 
    className="btn btn-warning" 
    data-toggle="modal" 
    data-target={`#id${task.id}`}>
    
    Edit
    </button>
{/* ///t_id = t_id1,2,3 ect */}

<div className="modal" 
id={`id${task.id}`}
onClick={() => setT_name(task.t_name)}>
  
  <div className="modal1" 
id={`id${task.id}`}
onClick={() => setT_course(task.t_course)}>
  <div className="modal-dialog">
    <div className="modal-content">

      
      <div className="modal-header">
        <h4 className= "modal-title">Edit tasks</h4>
        <button type="button" className="close" data-dismiss="modal"
        
        onClick={() => setT_name(task.t_name)}
        >
         
            <button type="button" className="close1" data-dismiss="modal"
        
        onClick={() => setT_course(task.t_course)}
        >
            
            &times;</button>   
           </button>
      </div>

      
      <div className="modal-body">
      
      <input type="text" 
      className="form-control" 
      placeholder="t_name" 
      value={t_name} 
      onChange={e=>setT_name(e.target.value)}/><br/>
      <input type="text" 
      className="form-control" 
      placeholder="t_course" 
      value={t_course} 
      onChange={e=>setT_course(e.target.value)}/>
      </div>

      
      <div className="modal-footer">
      <button type="button" 
      className="btn btn-warning" 
      data-dismiss="modal"
      onClick={e=>updateT_name(e)}
      >
        <button type="button" 
      className="btn btn-warning" 
      data-dismiss="modal"
      onClick={e=>updateT_course(e)}
      >
        Update</button></button>

        <button type="button" 
        className="btn btn-danger" 
        data-dismiss="modal"
        onClick={() => setT_name(task.t_name)}
        >
          <button type="button" 
        className="btn btn-danger" 
        data-dismiss="modal"
        onClick={() => setT_course(task.t_course)}
        >
            Close</button></button>
      </div>

    </div>
  </div>
</div>
</div>
        
    </Fragment>
};
export default Edit;




