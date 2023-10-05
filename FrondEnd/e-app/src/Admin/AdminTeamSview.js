import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'

function AdminTeamSview() {
    const [teamview, setteamview] = useState({})
    const {id}=useParams()
    
    useEffect(() => {
        const data=axios.get(`http://localhost:4000/teamsview/${id}`).then((res)=>setteamview(res.data))
   
    })

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
            <input label='Email' size='lg' id='form1' type='text' name='Name'defaultValue={teamview.Name} />
          </Col>

        </Row>
        
        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Email</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='place' size='lg' id='form1' type='text'name='Email'defaultValue={teamview.Email} />
          </Col>

        </Row>

        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Date of Birth</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='age' size='lg' id='form1' type='text'name='DOB' defaultValue={teamview.DOB}/>
          </Col>

        </Row>
        {/* <hr className="mx-n3" /> */}

        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Gender</h6>
          </Col>
          <Col>
          {/* <label>Male</label> */}

          
            <input label='example@example.com' id='form2'value='Male' name='Gender' defaultValue={teamview.Gender} />
          
          
          {/* <label>Female</label> */}

            {/* <input label='example@example.com' id='form2' type='radio' value='Female'name='Gender'defaultValue={teamview.Gender} /> */}
          </Col>
          </Row>

        <Row className='align-items-center pt-4 pb-3'>

<Col md='3' className='ps-5'>
  <h6 className="mb-0">Description</h6>
</Col>

<Col md='9' className='pe-5'>
  <input label='place' size='lg' id='form1' type='text'name='Description'defaultValue={teamview.Description} />
</Col>
</Row>
<br></br>
<Row>

<Col md='3' className='ps-5'>
  <h6 className="mb-0">Role</h6>
</Col>

<Col md='9' className='pe-5' >
  <input label='place' size='lg' id='form1' type='text'name='Role'defaultValue={teamview.Role}/>
  {/* <select  value={Option.value} name='Role' defaultValue={teamview.Role}> */}
  {/* <option >Select</option> */}
{/* 
    <option value='Writer'> Writer</option>
    <option value='Data Analyst' >Data Analyst</option>
    <option value='HR'>HR</option>
    <option value='Junior'>Junior</option>
    <option value='Senior' >Senior</option>
   */}
  {/* </select> */}
</Col>

</Row>
<br></br>
<Row>

<Col md='3' className='ps-5'>
  <h6 className="mb-0">Phone</h6>
</Col>

<Col md='9' className='pe-5'>
  <input label='place' size='lg' id='form1' type='number'name='Phone'defaultValue={teamview.Phone}/>
</Col>

</Row>
<br></br>
<Row>

<Col md='3' className='ps-5'>
  <h6 className="mb-0">Image</h6>
</Col>

<Col md='9' className='pe-5'>
  <input label='place' size='lg' id='form1' type='text'name='Image'defaultValue={teamview.Image}/>
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
     <Link to={`/teamedit/${id}`}>  <Button className='buttadmin' variant='dark'>Edit</Button></Link> </center>

      {/* </CardBody> */}
    </Card>

  </Col>
</Row>

</Container>
    </div>
  )
}

export default AdminTeamSview