import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

function AdminClientSView() {
    const [clientview, setclientview] = useState({})
    const {id}=useParams()

    useEffect(() => {
        const data=axios.get(`http://localhost:4000/clientssview/${id}`).then((res)=>setclientview(res.data))
 
    })
    
  return (
    <div>

<Container fluid>

<Row className='d-flex justify-content-center align-items-center'>
  <Col lg='9' className='my-5'>


    {/* <h1 class="text-white mb-4">Apply for a job</h1> */}

    <Card className='cardadmin'>
<h2>Client {clientview.Name} Details</h2>
        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Name:</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='Email' size='lg' id='form1' type='text' name='Name'defaultValue={clientview.Name}/>
          </Col>

        </Row>
        
        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Username:</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='place' size='lg' id='form1' type='text'name='Username'defaultValue={clientview.Username}/>
          </Col>

        </Row>

        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Email</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='age' size='lg' id='form1' type='text'name='Email'defaultValue={clientview.Email} />
          </Col>

        </Row>
        {/* <hr className="mx-n3" /> */}

        <Row className='align-items-center pt-4 pb-3'>
        <Col md='3' className='ps-5'>

         
            <h6 className="mb-0">Signed Status</h6></Col>
            <Col>
                    
            <input label='example@example.com' size='lg' id='form2'name='Signedstatus'defaultValue={clientview.Signedstatus} />

      </Col>
        </Row>
        <Row className='align-items-center pt-4 pb-3'>

<Col md='3' className='ps-5'>
  <h6 className="mb-0">Role</h6>
</Col>
<Col>
<input label='example@example.com' size='lg' id='form2'name='Signedstatus' defaultValue={clientview.Role}/>


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
  <input label='place' size='lg' id='form1' type='number'name='Phone' defaultValue={clientview.Phone}/>
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

        <Link to={`/clientedit/${id}`}><Button className='buttadmin'>Edit</Button></Link></center>

      {/* </CardBody> */}
    </Card>

  </Col>
</Row>

</Container>



{/* 

    <h2>
          Name:{clientview.Name}<br></br>
        Username:{clientview.Username}<br></br>
        Email:{clientview.Email}<br></br>
        Signedstatus:{clientview.Signedstatus}<br></br>
        Role:{clientview.Role}<br></br>
         Phone:{clientview.Phone}<br></br>
    </h2>

    

      
        */}
            
    </div>
  )
}

export default AdminClientSView