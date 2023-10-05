import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Form, Table } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

function Userbookview() {


    const nav=useNavigate()
    const [userbooks, setuserBooks] = useState([])
    
    const {id}=useParams()
    useEffect(() => {
      async function fetchData (){
        const response = await axios.get('http://localhost:4000/userbookview')
        setuserBooks(response.data)
      }
      fetchData()
    }, [])
  //
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
          <th>Publication</th>
          <th>Author</th>
          <th>Year</th>
          <th>Price</th>
          <th>Availability</th>
          {/* <th></th> */}
          {/* <th></th> */}
          <th></th>
   
        </tr>
      </thead>
      <tbody>
      {userbooks.map((data)=>{
                return(

            
        <tr>
   
         
          <td>{data.Name}</td>
          <td>{data.Publication}</td>
          <td>{data.Author}</td>
          <td>{data.Year}</td>
          <td>{data.Price}</td>
          <td>{data.Availability}</td>
          {/* <td><Button variant='dark'>View</Button></td> */}
         
          <td><Button variant='dark'>Add to cart</Button></td>
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

    </div>
  )
}

export default Userbookview