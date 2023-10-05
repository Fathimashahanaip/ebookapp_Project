import React, { createContext, useContext, useEffect, useState } from 'react'
import { Button, Card, CardGroup, Col, Container, Form, Row, Table } from 'react-bootstrap'
import axios from 'axios'

import './AdminBookView.css'
import { Link, useNavigate, useParams } from 'react-router-dom'

import {AiFillDelete, AiFillEye} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'
import {GrView} from 'react-icons/gr'




function AdminBookView() {
 
  
  const nav=useNavigate()
  const [books, setBooks] = useState([])
  const [delbook, setdelbook] = useState({})
  const {id}=useParams()
  useEffect(() => {
    async function fetchData (){
      const response = await axios.get('http://localhost:4000/adminbookview')
      setBooks(response.data)
    }
    fetchData()
  }, [])
//
const handleDelete=async(id)=>{
  
  if(window.confirm(`Are you sure you want to delete`)){

  }else{
    
  }
  try{
    const data=await axios.delete(`http://localhost:4000/adminbookdelete/${id}`)
    nav('/adminbook')
    setBooks(data)
    console.log(books)

  }
  catch(error){
    console.log(error)

  }
}



// const handleSubmit=(e)=>{
//   e.preventDefault()
// }


  return (
    <div>
 
      

        <center>
        <Container>
            <Card  style={{ width: '65rem' }}>
                <Card.Body>
                <center>
            <Form>
                
<Table striped bordered hover>
      <thead>
        <tr >
         
          <th className='heading'>Name</th>
          <th>Category</th>
          <th>Publication</th>
         
          <th>Author</th>
          <th>Year</th>
          <th>Price</th>
          <th>Availability</th>
          {/* <th></th> */}
          <th></th>
          <th></th>
   
        </tr>
      </thead>
      <tbody>
      {books.map((data)=>{
                return(

            
        <tr>
   
         
          <td>{data.Name}</td>
          <td>{data.Category}</td>
          <td>{data.Publication}</td>
          <td>{data.Author}</td>
          <td>{data.Year}</td>
          <td>{data.Price}</td>
          <td>{data.Availability}</td>
          {/* <td><Button variant='dark'>View</Button></td> */}
          {/* <td><Link to='/'></Link></td> */}
         <td> <Link to={`/adbookedit/${data._id}`}><Button variant='dark'><AiFillEye></AiFillEye></Button></Link></td>
          <td><Button variant='dark' onClick={()=>handleDelete(data._id)}><AiFillDelete></AiFillDelete></Button></td>
         {console.log(data._id)}

        </tr>
            )

        })}
        

      </tbody>
    </Table>
    
    </Form>
    </center>
    </Card.Body>
            </Card>
        </Container>
</center>
<center>
<Link to='/adminaddbook' className='addbook'><Button variant='dark'>Add Books</Button></Link>
</center>

    </div>
  )
}

export default AdminBookView


