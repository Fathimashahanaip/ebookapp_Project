import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [adminsignup, setadminsignup] = useState()
  // useEffect(() => {
  //   async function fetchData (){
  //     const response = await axios.get('http://localhost:4000/adminsignup',adminsignup)
  //     setadminsignup(response.data)
  //   }
  //   fetchData()
  // }, [])



  useEffect(() => {
    const data=axios.get(`http://localhost:4000/Adminhomelog`).then((res)=>setadminsignup(res.data))

    // console.log(data)
 
  })



    const nav=useNavigate()
const [login, setlogin] = useState({})
const handleChange=(event)=>{
    const name=event.target.name
    const value=event.target.value
    setlogin({...login,[name]:value})

}
// useEffect(() => {
//   async function fetchData (){
//     const response = await axios.get('http://localhost:4000/Adminhomelog')
//     setlogin(response.data)
//   }
//   fetchData()
// }, [])

// console.log(login)


const handleButton=async(req,res)=>{
    try{
        const config={
          headers:{
            "Content-type":"application/json",
      
          }
        }
        const data=await axios.post("http://localhost:4000/login",login,config)
        console.log(data)
      //  console.log(data.Role)
      //     if(res.data.Role.default==="admin"){
      //       nav('/Adminwelcome')
      //     }
      //     else if (res.data.Role.default==="user"){
      //       nav('/userwelcome')
      //     }
          if(login.Role==="user"){
            nav('/userwelcome')
            

          }
          else if(login.Role==="admin"){
            nav('/Adminwelcome')
            

          }

        
      


        return data
  
  
      }
      catch(error){
        console.log("couldn't signup",error)
  
      }
  


}
  return (
    <div>
        <center>
        <Card style={{ width: '35rem' }} className='cardlog'>
     
      <Card.Body>
        <h2>Login</h2>
         
      <Container className="my-5 gradient-form">

<Row>

  <Col col='6' className="mb-5">
    <div className="d-flex flex-column ms-5">

      {/* <p>Please login to your account</p> */}

<label>Email:</label>
      <input wrapperClass='mb-4' label='Email address' id='form1' type='email'name='Email' onChange={handleChange}/><br/>
      <label>Password:</label>
      <input wrapperClass='mb-4' label='Password' id='form2' type='password' name='Password' onChange={handleChange}/>


      <div className="text-center pt-1 mb-5 pb-1">
        <Button className="button" onClick={handleButton}>Login</Button>
       
      </div>

    </div>

  </Col>
</Row>

</Container>

      </Card.Body>
    </Card>
       </center>

    </div>
  )
}

export default Login