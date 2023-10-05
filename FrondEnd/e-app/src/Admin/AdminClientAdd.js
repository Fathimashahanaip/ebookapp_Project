import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function AdminClientAdd() {
  const nav=useNavigate()
  const [clientadd, setclientadd] = useState({})


    const handleChange=(e)=>{
      const name= e.target.name
      const value=e.target.value
      setclientadd({...clientadd,[name]:value})
      console.log(clientadd)

    }
    const handleButton= async()=>
    {
      try{
        const config={
          headers:{
            "Content-type":"application/json",
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        }
        const data=await axios.post('http://localhost:4000/clientadd',clientadd,config)
        console.log(data)
        nav('/adminhome')
        return data

      }
      catch(error){
        console.log('cliend Add is failed',error)
      }

    }
  return (
    <div>  


               <Container fluid>

<Row className='d-flex justify-content-center align-items-center'>
  <Col lg='9' className='my-5'>


    {/* <h1 class="text-white mb-4">Apply for a job</h1> */}

    <Card className='cardadmin'>
<h2>Client Add</h2>
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
            <h6 className="mb-0">Username:</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='place' size='lg' id='form1' type='text'name='Username' onChange={handleChange}/>
          </Col>

        </Row>

        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Email</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='age' size='lg' id='form1' type='text'name='Email' onChange={handleChange}/>
          </Col>

        </Row>
        {/* <hr className="mx-n3" /> */}

        <Row className='align-items-center pt-4 pb-3'>
        <Col md='3' className='ps-5'>

         
            <h6 className="mb-0">Signed Status</h6></Col>
            <Col>
          
      
Signed In

          
            <input label='example@example.com' size='lg' id='form2'value='signed in' type='radio'name='Signedstatus' onChange={handleChange}/>
      

        Not signed In
          
            <input label='example@example.com' size='lg' id='form2'  value='not signed in'type='radio'name='Signedstatus' onChange={handleChange}/>
      </Col>
        </Row>
        <Row className='align-items-center pt-4 pb-3'>

<Col md='3' className='ps-5'>
  <h6 className="mb-0">Role</h6>
</Col>
<Col>
<select value={Option.value} name='Role'onClick={handleChange} >
  <option value='super admin' >Super Admin</option>
  <option value='only by Admin' > Only By Admin</option>
</select>
</Col>
{/* <Col md='9' className='pe-5'>
  <input label='place' size='lg' id='form1' type='select'name='Role' onChange={handleChange}/>
</Col> */}
<br></br>
<Row className='align-items-center pt-4 pb-3'></Row>
<Col md='3' className='ps-5'>
  <h6 className="mb-0">Phone number:</h6>
</Col>

<Col md='9' className='pe-5'>
  <input label='place' size='lg' id='form1' type='number'name='Phone' onChange={handleChange}/>
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
        <Button className='buttadmin' onClick={handleButton}>Add Client</Button></center>

      {/* </CardBody> */}
    </Card>

  </Col>
</Row>

</Container>

    </div>
  )
}

export default AdminClientAdd