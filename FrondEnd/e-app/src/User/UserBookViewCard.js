import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './UserBookView.css'

function UserBookViewCard() {
  const {Category}=useParams()
  // const SearchByCategory = () => {
    const [category, setcategory] = useState('');
    const nav=useNavigate()
    const [userbooks, setuserBooks] = useState([])
    
    
  
    const handleSearch = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/userbooksearch/${category.toLowerCase()}`);
        setuserBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
// const handleSearchClick=async()=>{
//   // useEffect(async() => {
//   //   const data=axios.get(`http://localhost:4000/userbooksearch/${Category}`).then((res)=>{setsearch(res.data)})

//   // })
//   try{
//     const config={
//       headers:{
//         "Content-type":"application/json",
//         // "Access-Control-Allow-Origin": "*",
//         // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//       }
//     }
//     const data=await axios.post(`http://localhost:4000/userbooksearch/${Category}`,search,config)
//     console.log(data)
//     nav("/adminbook")
//     return data


//   }
//   catch(error){
//     console.log("couldn't signup",error)

//   }

// }
  // }


    

    // const {id}=useParams()
    useEffect(() => {
      async function fetchData (){
        const response = await axios.get('http://localhost:4000/userbookview')
        setuserBooks(response.data)
      }
      fetchData()
    }, [])

  
  return (
    <div>

<div className='divsearch'>
  <Container className="mt-10 search" >
      <Row className='rowsearch'>
       <center><Col sm={15}>
          <Form className="d-flex">
            <Form.Control
              
              placeholder="Search"
              className="me-5 rounded-pill"
              aria-label="Search"
              type="text"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            />
            <Button className="rounded-pill" variant="dark" onClick={handleSearch}>
              Search
            </Button>
          </Form>
        </Col>
        </center> 
      </Row>
    </Container>
  </div>

  <br></br>
<br></br>   



      { userbooks.map((dd)=>{
        return(

       
<center>
    <Container>
<Card className='userbook'>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <h1><Card.Title >Name:{dd.Name}</Card.Title></h1>
        <Card.Text>
            {/* {dd.Publication}<br></br> */}
            {/* Author:{dd.Author}<br></br> */}
            {/* {dd.Year}<br></br> */}
           Price: {dd.Price}<br></br>
           {/* Availability: {dd.Availability} */}


        </Card.Text>
       <Link to={`/cardview/${dd._id}`}> <Button variant="dark" >View</Button></Link>
      </Card.Body>
    </Card>
    </Container>
    </center>
        )
     })}
    </div>
    
  )
}

export default UserBookViewCard