import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {

    const [data,changedata]=useState(
        {
            "name":"",
            "route":"",
            "num":"",
            "dname":""
            
        }
    )
    
    const inputHandler=(event)=>{
        changedata({...data,[event.target.name]:event.target.value})
    }
    
    const readValue=()=>{
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="Success") {
    
                    alert("add successfully")
                    
                } else {
                    alert("error")
                    
                }
            }
        )
        console.log(data)
    }
    

  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Bus Name</label>
<input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler}/>


    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Route</label>
    <input type="text" className="form-control" name="route" value={data.route} onChange={inputHandler}/>


    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Bus Number</label>
    <input type="text" className="form-control" name="num" value={data.num} onChange={inputHandler}/>


    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Driver Name</label>
    <input type="text" className="form-control" name="dname" value={data.dname} onChange={inputHandler}/>


    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


<button className="btn btn-success" onClick={readValue}>Submit</button>

    </div>
</div>

        </div>
    </div>
</div>


    </div>
  )
}

export default Add