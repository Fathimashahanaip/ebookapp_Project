import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

function AdminClientEDit() {
    const nav=useNavigate()
    const [edit, setedit] = useState([])
    const {id}=useParams()
    const [clientedit, setclientedit] = useState({Name:edit.Name,Username:edit.Username,Email:edit.Email,Signedstatus:edit.Signedstatus,Role:edit.Role,Phone:edit.Phone})

    useEffect(() => {
        const data=axios.get(`http://localhost:4000/clientssview/${id}`).then((res)=>setedit(res.data))
 
    })
    
    const handleChange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setclientedit({...clientedit,[name]:value})
        console.log(clientedit)


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
            const data=await axios.put(`http://localhost:4000/clientedit/${id}`,clientedit,config)
            console.log(data)
            nav("/adminclientview")
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
<h2>Client Edit</h2>
        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Name:</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='Email' size='lg' id='form1' type='text' name='Name'defaultValue={edit.Name} onChange={handleChange}/>
          </Col>

        </Row>
        
        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Username:</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='place' size='lg' id='form1' type='text'name='Username'defaultValue={edit.Username} onChange={handleChange}/>
          </Col>

        </Row>

        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Email</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='age' size='lg' id='form1' type='text'name='Email'defaultValue={edit.Email} onChange={handleChange}/>
          </Col>

        </Row>
        {/* <hr className="mx-n3" /> */}

        <Row className='align-items-center pt-4 pb-3'>
        <Col md='3' className='ps-5'>

         
            <h6 className="mb-0">Signed Status</h6></Col>
            <Col>
          
      
Signed In

          
            <input label='example@example.com' size='lg' id='form2'value='signed in' type='radio'name='Signedstatus'  onChange={handleChange}/>
      

        Not signed In
          
            <input label='example@example.com' size='lg' id='form2'  value='not signed in'type='radio'name='Signedstatus'  onChange={handleChange}/>
      </Col>
        </Row>
        <Row className='align-items-center pt-4 pb-3'>

<Col md='3' className='ps-5'>
  <h6 className="mb-0">Role</h6>
</Col>
<Col>
<select value={Option.value} name='Role'onClick={handleChange} defaultValue={edit.Role} >
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
  <input label='place' size='lg' id='form1' type='number'name='Phone'defaultValue={edit.Phone} onChange={handleChange}/>
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
        <Button className='buttadmin' onClick={handleButton} variant='dark'>Edit</Button></center>

      {/* </CardBody> */}
    </Card>

  </Col>
</Row>

</Container>

    </div>
  )
}

export default AdminClientEDit