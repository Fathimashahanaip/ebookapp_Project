import { pink } from '@mui/material/colors'
import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function AdminBooksAdd() {
    const nav=useNavigate()
    const [addbook, setaddbook] = useState({})
    const handleChange=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setaddbook({...addbook,[name]:value})
    }
    const handleButton=async()=>{
        try{
            const config={
              headers:{
                "Content-type":"application/json",
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
              }
            }
            const data=await axios.post("http://localhost:4000/adbookadd",addbook,config)
            console.log(data)
            nav("/adminbook")
            return data
      
      
          }
          catch(error){
            console.log("couldn't signup",error)
      
          }

    }
  return (

        <div>
               <Container fluid>

<Row className='d-flex justify-content-center align-items-center'>
  <Col lg='9' className='my-5'>


    {/* <h1 class="text-white mb-4">Apply for a job</h1> */}

    <Card className='cardadmin' style={{background_Color:pink}}>
<h2>Books Add</h2>
        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Name:</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='Email' size='lg' id='form1' type='text' name='Name' onChange={handleChange}/>
          </Col>

        </Row>
        <Row className='align-items-center pt-4 pb-3'>

<Col md='3' className='ps-5'>
  <h6 className="mb-0">Category:</h6>
</Col>

<Col md='9' className='pe-5'>
  <input label='place' size='lg' id='form1' type='text'name='Category' onChange={handleChange}/>
</Col>

</Row>
        
        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Publication:</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='place' size='lg' id='form1' type='text'name='Publication' onChange={handleChange}/>
          </Col>

        </Row>

        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Author:</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='age' size='lg' id='form1' type='text'name='Author' onChange={handleChange}/>
          </Col>

        </Row>
        {/* <hr className="mx-n3" /> */}

        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Year:</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='example@example.com' size='lg' id='form2' type='text'name='Year' onChange={handleChange}/>
          </Col>

        </Row>
        <Row className='align-items-center pt-4 pb-3'>

<Col md='3' className='ps-5'>
  <h6 className="mb-0">Price:</h6>
</Col>

<Col md='9' className='pe-5'>
  <input label='place' size='lg' id='form1' type='text'name='Price' onChange={handleChange}/>
</Col>
<br></br>
<Col md='3' className='ps-5'>
  <h6 className="mb-0">Availability:</h6>
</Col>

<Col md='9' className='pe-5'>
  <input label='place' size='lg' id='form1' type='text'name='Availability' onChange={handleChange}/>
</Col>

</Row>

        {/* <hr className="mx-n3" />

        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Message</h6>
          </Col>


        </Row> */}

        {/* <hr className="mx-n3" /> */}
{/* 
        <MDBRow className='align-items-center pt-4 pb-3'>

          <MDBCol md='3' className='ps-5'>
            <h6 className="mb-0">Upload CV</h6>
          </MDBCol>

          <MDBCol md='9' className='pe-5'>
            <MDBFile size='lg' id='customFile' />
            <div className="small text-muted mt-2">Upload your CV/Resume or any other relevant file. Max file size 50 MB</div>
          </MDBCol>

        </MDBRow> */}

        {/* <hr className="mx-n3" /> */}
<center>
        <Button className='buttadmin' onClick={handleButton}>Add</Button></center>

      {/* </CardBody> */}
    </Card>

  </Col>
</Row>

</Container>

    </div>
  )
}

export default AdminBooksAdd