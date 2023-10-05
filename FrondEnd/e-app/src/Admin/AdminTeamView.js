import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Form, Table } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Link, useNavigate, useParams } from 'react-router-dom'

function AdminTeamView() {
  const {id}=useParams()
  const nav=useNavigate()
    const [team, setteam] = useState([])
    useEffect(() => {
        async function fetchData(){
            const response=await axios.get('http://localhost:4000/teamview')
            setteam(response.data)
        }
        fetchData()
  
    },[])
    

    const handleDelete=async(id)=>{
      try{
        const data=await axios.delete(`http://localhost:4000/teamdelete/${id}`)
        nav('/adminteamview')
        setteam(data)
        // console.log(books)
    
      }
      catch(error){
        console.log(error)
    
      }


    }
  return (
    <div>

        
 <center>
    <h1>Team Members</h1>
 <Container>
     <Card  style={{ width: '65rem' }}>
         <Card.Body>
         <center>
     <Form>
         
<Table striped bordered hover>
<thead>
 <tr >
  
   <th className='heading'>Name</th>
   <th>Email</th>
   <th>Date of Birth</th>
  
   <th>Gender</th>
  
   <th>Description</th>
   <th>Role</th>
   <th>Phone</th>
   <th>Image</th>
   <th></th>
   <th></th>

 </tr>
</thead>
<tbody>
{team.map((data)=>{
         return(

     
 <tr>

  
   <td>{data.Name}</td>
   <td>{data.Email}</td>
   <td>{data.DOB}</td>
   <td>{data.Gender}</td>
   <td>{data.Description}</td>
   <td>{data.Role}</td>
   <td>{data.Phone}</td>
   <td>{data.Image}</td>
   <td><Link to={`/teamSview/${data._id}`}><Button variant='dark'>View</Button></Link></td>
   {/* <td><Button variant='dark'>View</Button></td> */}
  <td> <Link to={`/teamedit/${data._id}`} ><Button variant='dark'><AiFillEdit></AiFillEdit></Button></Link></td>
   <td><Button variant='dark' onClick={()=>handleDelete(data._id)}><AiFillDelete></AiFillDelete></Button></td>
  {console.log(data._id)}

 </tr>
)

 })}
 

</tbody>
</Table>
<center>
   <Link to='/adminTeamadd'> <Button variant='dark'>Add Team Member</Button></Link>
</center>

</Form>
</center>
</Card.Body>
     </Card>
 </Container>
</center>
    </div>
  )
}

export default AdminTeamView