import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Form, Table } from 'react-bootstrap'
import { AiFillDelete, AiFillEdit, AiFillEye } from 'react-icons/ai'
import { Link, useNavigate, useParams } from 'react-router-dom'

function AdminCLientView() {
  const {id}=useParams()
  const nav=useNavigate()
    const [clientview, setclientview] = useState([])
    useEffect(() => {
        async function fetchData(){
        const response=await axios.get('http://localhost:4000/clientview')
        setclientview(response.data)
        }
        fetchData()

    },[])
    


    const handleDelete=async(id)=>{
      try{
        const data=await axios.delete(`http://localhost:4000/clientdelete/${id}`)
        nav('/adminclientview')
        setclientview(data)
        // console.log(books)
    
      }
      catch(error){
        console.log(error)
    
      }
    }
      

    
  return (
    <div>

      

 <center>
    <h1>Clients</h1>
 <Container>
     <Card  style={{ width: '65rem' }}>
         <Card.Body>
         <center>
     <Form>
         
<Table striped bordered hover>
<thead>
 <tr >
  
   <th className='heading'>Name</th>
   <th>Usename</th>
   <th>Email</th>
  
   <th>Signed Status</th>
  
   <th>Role</th>
   <th>Phone</th>
   {/* <th></th> */}
   <th></th>
   <th></th>

 </tr>
</thead>
<tbody>
{clientview.map((data)=>{
         return(

     
 <tr>

  
   <td>{data.Name}</td>
   <td>{data.Username}</td>
   <td>{data.Email}</td>
   <td>{data.Signedstatus}</td>
   <td>{data.Role}</td>
   <td>{data.Phone}</td>
   <td><Link to={`/clientsview/${data._id}`}><Button variant='dark'><AiFillEye></AiFillEye></Button></Link></td>
   {/* <td><Button variant='dark'>View</Button></td> */}

   <td><Link to={`/clientedit/${data._id}`}><Button className='buttadmin' variant='dark'><AiFillEdit></AiFillEdit></Button></Link></td>
  {/* <td> <Link ><Button variant='dark'><AiFillEdit></AiFillEdit></Button></Link></td> */}
   <td><Button variant='dark' onClick={()=>handleDelete(data._id)}><AiFillDelete></AiFillDelete></Button></td>
  {console.log(data._id)}

 </tr>
     )

 })}
 

</tbody>
</Table>
<center>
   <Link to='/admincientadd'> <Button variant='dark'>Add Client</Button></Link>
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

export default AdminCLientView