import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function AdminTeamAdd() {
  const nav=useNavigate()
  const [teamadd, setteamadd] = useState()
    const handleChange=(e)=>{
      e.preventDefault()
      const name=e.target.name
      const value=e.target.value
      setteamadd({...teamadd,[name]:value})
console.log(teamadd)

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
        const data=await axios.post("http://localhost:4000/teamadd",teamadd,config)
        console.log(data)
        nav("/adminteamview")
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

    <Card className='cardadmin'>
<h2>Team Members Add</h2>
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
            <h6 className="mb-0">Email</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='place' size='lg' id='form1' type='text'name='Email' onChange={handleChange}/>
          </Col>

        </Row>

        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Date of Birth</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='age' size='lg' id='form1' type='date'name='DOB' onChange={handleChange}/>
          </Col>

        </Row>
        {/* <hr className="mx-n3" /> */}

        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Gender</h6>
          </Col>
          <Col>
          <label>Male</label>

          
            <input label='example@example.com' id='form2' type='radio'value='Male' name='Gender' onChange={handleChange} />
          
          
          <label>Female</label>

            <input label='example@example.com' id='form2' type='radio' value='Female'name='Gender' onChange={handleChange}/>
          </Col>
          </Row>

        <Row className='align-items-center pt-4 pb-3'>

<Col md='3' className='ps-5'>
  <h6 className="mb-0">Description</h6>
</Col>

<Col md='9' className='pe-5'>
  <input label='place' size='lg' id='form1' type='text'name='Description' onChange={handleChange}/>
</Col>
</Row>
<br></br>
<Row>

<Col md='3' className='ps-5'>
  <h6 className="mb-0">Role</h6>
</Col>

<Col md='9' className='pe-5' >
  {/* <input label='place' size='lg' id='form1' type='text'name='Role' onChange={handleChange}/> */}
  <select  value={Option.value} name='Role' onChange={handleChange}>
  {/* <option >Select</option> */}

    <option value='Writer'> Writer</option>
    <option value='Data Analyst' >Data Analyst</option>
    <option value='HR'>HR</option>
    <option value='Junior'>Junior</option>
    <option value='Senior' >Senior</option>
  
  </select>
</Col>

</Row>
<br></br>
<Row>

<Col md='3' className='ps-5'>
  <h6 className="mb-0">Phone</h6>
</Col>

<Col md='9' className='pe-5'>
  <input label='place' size='lg' id='form1' type='number'name='Phone' onChange={handleChange}/>
</Col>

</Row>
<br></br>
<Row>

<Col md='3' className='ps-5'>
  <h6 className="mb-0">Image</h6>
</Col>

<Col md='9' className='pe-5'>
  <input label='place' size='lg' id='form1' type='text'name='Image' onChange={handleChange}/>
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
        <br></br>
<center>
        <Button className='buttadmin' variant='dark' onClick={handleButton}>Add Team Member</Button></center>

      {/* </CardBody> */}
    </Card>

  </Col>
</Row>

</Container>

    </div>
  )
}

export default AdminTeamAdd