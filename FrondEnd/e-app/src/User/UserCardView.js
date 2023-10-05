import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function UserCardView() {
    const {id}=useParams()
    const [view, setview] = useState([])
    const [viewcard, setviewcard] = useState({Name:view.Name,Category:view.Category,Publication:view.Publication,Author:view.Author,Year:view.Year,Price:view.Price,Availability:view.Availability})

    useEffect(() => {
        const data=axios.get(`http://localhost:4000/cardview/${id}`).then((res)=>setview(res.data))
     
      })
    

    const handleButton=()=>{


    }
  return (

<div>
  

<Container fluid>

<Row className='d-flex justify-content-center align-items-center'>
  <Col lg='9' className='my-5'>


    {/* <h1 class="text-white mb-4">Apply for a job</h1> */}

    <Card className='cardadmin'>
<h2>Books Add</h2>
        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Name:</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='Email' size='lg' id='form1' defaultValue={view.Name} type='text' name='Name' placeholder={view.name}/>
          </Col>

        </Row>
        <Row className='align-items-center pt-4 pb-3'>

<Col md='3' className='ps-5'>
  <h6 className="mb-0">Category:</h6>
</Col>

<Col md='9' className='pe-5'>
  <input label='place' size='lg' id='form1'defaultValue={view.Category} type='text'name='Category' />
</Col>

</Row>
        
        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Publication:</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='place' size='lg' id='form1'defaultValue={view.Publication} type='text'name='Publication' />
          </Col>

        </Row>

        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Author:</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='age' size='lg' id='form1' defaultValue={view.Author}type='text'name='Author' />
          </Col>

        </Row>
        {/* <hr className="mx-n3" /> */}

        <Row className='align-items-center pt-4 pb-3'>

          <Col md='3' className='ps-5'>
            <h6 className="mb-0">Year:</h6>
          </Col>

          <Col md='9' className='pe-5'>
            <input label='example@example.com' size='lg' id='form2'defaultValue={view.Year} type='text'name='Year' />
          </Col>

        </Row>
        <Row className='align-items-center pt-4 pb-3'>

<Col md='3' className='ps-5'>
  <h6 className="mb-0">Price:</h6>
</Col>

<Col md='9' className='pe-5'>
  <input label='place' size='lg' id='form1'defaultValue={view.Price} type='text'name='Price'/>
</Col>
<br></br>
<Col md='3' className='ps-5'>
  <h6 className="mb-0">Availability:</h6>
</Col>

<Col md='9' className='pe-5'>
  <input label='place' size='lg' id='form1' defaultValue={view.Availability} type='text'name='Availability'/>
</Col>

</Row>

<center>
        <Button className='buttadmin' onClick={handleButton}>Add to cart</Button></center>

      {/* </CardBody> */}
    </Card>

  </Col>
</Row>

</Container>
    </div>
  )
}

export default UserCardView