import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {

    const [data,changedata]=useState(
        {
            "name":""
        }
    )
    
    const [result,setresult]=useState(
        [
           
           
        ]
    )
    
    const inputHandler=(event)=>{
        changedata({...data,[event.target.name]:event.target.value})
    }
    
    
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/search",data).then(
            (response)=>{
                console.log(response.data)
                setresult(response.data)
            }
        )
    }
    
    const deleteCourse=(id)=>{
        let input={"_id":id}
        axios.post("http://localhost:8080/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="Success") {
                    alert("deleted successfully")
                } else {
                    alert("error")
                }
            }
        )
    }

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Bus Name</label>
<input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler}/>

        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-success" onClick={readValue}>Search</button>

        </div>
    </div>

    <table class="table">
  <thead>
    <tr>
      <th scope="col">Bus Name</th>
      <th scope="col">Route</th>
      <th scope="col">Bus Number</th>
      <th scope="col">Driver Name</th>
      
    </tr>
  </thead>
  <tbody>
   {result.map((value,index)=>{
    return  <tr>
    <th scope="row">{value.name}</th>
    <td>{value.route}</td>
    <td>{value.num}</td>
    <td>{value.dname}</td>
    <td>
            <button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>Delete</button>
        </td>
  </tr>
   })}
    
    
  </tbody>
</table>


</div>

    </div>
  )
}

export default Search