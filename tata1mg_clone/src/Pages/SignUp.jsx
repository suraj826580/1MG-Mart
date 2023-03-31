import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,useDisclosure,Box,Text,Heading,Input
} from '@chakra-ui/react'
import Banner from '../Components/Slider'
import { SignUp } from '../redux/Authication/action';
//import { Login } from '../Redux/Authication/action';

import { useDispatch, useSelector } from 'react-redux';
const Signup = () => {
  const [login,setlogin]=useState(false)
  const[signup,setsignup]=useState(false)
  const[Auth,setAuth]=useState(false)
  const[email,setemail]=useState('')
  const[email1,setemail1]=useState('')
  const[password,setpassword]=useState('')
  const[otp,setotp]=useState('')

  const dispatch=useDispatch()
  const SIGNUP=useSelector(state=>state.authReducer.signup)
  const LOGIN=useSelector(state=>state.authReducer.login)
  const handleAuth=(e)=>{
    e.preventDefault()
 let EML=JSON.parse(localStorage.getItem("email"))
    
    if(SIGNUP && email1===EML){
      toast.success('Login Successfully ...', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    }else{
      toast.error("User Not Found")
    }
   
  }
  const handleLoginSignup4=(e)=>{
    e.preventDefault()
    setlogin(true)
    setsignup(true)
  }
  const handleLoginSignup=(e)=>{
    e.preventDefault()
    let obj={
      email,password
    }
  
   // console.log("obj",obj);
   if(otp=="1212"){
    dispatch(SignUp(obj))
    setlogin(true)
    setsignup(true)
    localStorage.setItem("email",JSON.stringify(email));
 
   }else{
    toast.error("Wrong OTP")
   }

   
  }
  const handleLoginSignup2=(e)=>{
    e.preventDefault()
  setlogin(false)
  setsignup(false)
  }
  const handleLoginSignup3=(e)=>{
    e.preventDefault()
 if(email=='' && password==''){
  toast.error("Please fill the details")
 }else{
  setsignup(true)
  toast('Otp is 1212',
  {
   
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  })
 }
 

  }

 
//console.log("signup",SIGNUP);
console.log("login",LOGIN);
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <Toaster/>
    <Button onClick={onOpen} style={{ background: "none", fontWeight: "400",padding:"2px 3px"  }} fontSize={16}>{login?"Sign In":"Sign Up"}</Button>

    <Modal isOpen={isOpen} onClose={onClose} size={"xl"*1.5} >
      <ModalOverlay />
      <ModalContent style={{ height:"470px", width:"70%",verticalalign:"middle" }}>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box style={{display:"flex",width:"100%"}}> 
            <Box style={{width:"50%" ,height:"380px" }}>
              <Banner/>
            </Box>
          {login && signup ?<Box style={{width:"50%" ,height:"380px",padding:"20px",textAlign:"center",borderLeft:"1px solid DarkGrey"}}>
            <Heading as='h3' size='lg' style={{textAlign:"left",marginLeft:"25px",marginBottom:"15px"}} fontWeight={500} fontSize={30}>Login</Heading>
            <Text style={{marginTop:"5px"}} fontSize={14}>Get access to your orders, lab tests & doctor consultation</Text>
            
            <input value={email1} onChange={(e)=>setemail1(e.target.value)} style={{borderBottom:'2px solid #EA4A28',width:"80%",marginTop:"40px",outline:'none'}}  type="text" placeholder='Enter Your Email ID or Mobile No'/>
         <div>

         <Button style={{background:"#F1694B ",color:"white",width:"80%",marginTop:"60px"}} onClick={handleAuth}>LOGIN</Button>
         </div>
        <Box style={{textAlign:"center",width:"65%",margin:"auto",padding:"5px"}}>
          <Box style={{display:"flex",gap:"5px" ,marginLeft:"20%"}}>  <Text marginTop={"10px"} fontSize={15}>New on 1mg?
</Text><Text marginTop={"10px"} fontSize={15} color="#F1694B " onClick={handleLoginSignup2} cursor="pointer">Sign Up</Text></Box>
        
          <Text marginTop={"10px"} fontWeight={400} fontSize={14} color="gray">By logging in, you agree to our
Terms and Conditions & Privacy Policy</Text>
          <Text marginTop={"10px"} fontWeight={500} fontSize={15} color="#F1694B ">Need Help? Get In Touch</Text>
        </Box>
     
           </Box>:signup?
           
<Box style={{width:"50%" ,height:"380px",padding:"20px",textAlign:"center",borderLeft:"1px solid DarkGrey"}}>
<Heading as='h3' size='lg' style={{textAlign:"left",marginLeft:"25px",marginBottom:"15px"}} fontWeight={500} fontSize={30}>Verify OTP</Heading>
<Text style={{marginTop:"5px",textAlign:"left",marginLeft:"25px"}} fontSize={14}>Please enter your Mobile number to receive One Time Password (OTP)</Text>

<input value={otp} onChange={(e)=>setotp(e.target.value)}   style={{borderBottom:'2px solid #EA4A28',width:"70%",marginTop:"40px",outline:'none'}}  type="text" placeholder='One Time Password'/>

<div>
<Box display={"flex"} gap="5px" marginLeft={"20%"} marginTop="30px" >
<Text color="#F1694B" fontWeight={500} fontSize={15}>Get OTP on SMS
|
</Text>
<Text color="#F1694B" fontWeight={500} fontSize={15}>Get OTP on Call</Text>
</Box>
<Button style={{background:"#F1694B ",color:"white",width:"80%",marginTop:"50px"}} onClick={handleLoginSignup} >DONE</Button>
</div>
<Box style={{textAlign:"center",width:"65%",margin:"auto",padding:"5px"}}>

<Text marginTop={"10px"} fontWeight={500} fontSize={15} color="#F1694B ">Need Help? Get In Touch</Text>

</Box> 

</Box>
           
          : <Box style={{width:"50%" ,height:"380px",padding:"20px",textAlign:"center",borderLeft:"1px solid DarkGrey"}}>
          <Heading as='h3' size='lg' style={{textAlign:"left",marginLeft:"25px",marginBottom:"15px"}} fontWeight={500} fontSize={30}>SIGN UP</Heading>
          <Text style={{marginTop:"5px",textAlign:"left",marginLeft:"25px"}} fontSize={14}>Please enter your Mobile number to receive One Time Password (OTP)</Text>
          
          <input  value={email}   onChange={(e)=>setemail(e.target.value)} style={{borderBottom:'2px solid #EA4A28',width:"80%",marginTop:"40px",outline:'none'}}  type="text" placeholder='Enter Your Email ID or Mobile No'/>
          <input value={password} onChange={(e)=>setpassword(e.target.value)} style={{borderBottom:'2px solid #EA4A28',width:"80%",marginTop:"20px",outline:'none'}}  type="text" placeholder='Enter Your Password'/>
<div>

       <Button style={{background:"#F1694B ",color:"white",width:"80%",marginTop:"50px"}} onClick={handleLoginSignup3} >CONTINUE</Button>
       </div>
      <Box style={{textAlign:"center",width:"65%",margin:"auto",padding:"5px"}}>
        <Box style={{display:"flex",gap:"5px" ,marginLeft:"20%"}}>  <Text marginTop={"10px"} fontSize={15}>Have an account?
</Text><Text marginTop={"10px"} fontSize={15} color="#F1694B "  onClick={handleLoginSignup4} cursor="pointer">Login</Text></Box>
      
        <Text marginTop={"10px"} fontWeight={400} fontSize={14} color="gray">By signing up, you agree to our
Terms and Conditions & Privacy Policy</Text>
       
      </Box>
   
         </Box>}
          
           </Box>
        </ModalBody>
   

        <ModalFooter>
         
        </ModalFooter>
      </ModalContent>
      
    </Modal>
  </>
  )
}

export default Signup;






// <Box style={{width:"50%" ,height:"380px",padding:"20px",textAlign:"center",borderLeft:"1px solid DarkGrey"}}>
// <Heading as='h3' size='lg' style={{textAlign:"left",marginLeft:"25px",marginBottom:"15px"}} fontWeight={500} fontSize={30}>Verify OTP</Heading>
// <Text style={{marginTop:"5px",textAlign:"left",marginLeft:"25px"}} fontSize={14}>Please enter your Mobile number to receive One Time Password (OTP)</Text>

// <input    style={{borderBottom:'2px solid #EA4A28',width:"70%",marginTop:"40px",outline:'none'}}  type="text" placeholder='One Time Password'/>

// <div>
// <Box display={"flex"} gap="5px" marginLeft={"20%"} marginTop="30px" >
// <Text color="#F1694B" fontWeight={500} fontSize={15}>Get OTP on SMS
// |
// </Text>
// <Text color="#F1694B" fontWeight={500} fontSize={15}>Get OTP on Call</Text>
// </Box>
// <Button style={{background:"#F1694B ",color:"white",width:"80%",marginTop:"50px"}} onClick={()=>setlogin(true)} >DONE</Button>
// </div>
// <Box style={{textAlign:"center",width:"65%",margin:"auto",padding:"5px"}}>

// <Text marginTop={"10px"} fontWeight={500} fontSize={15} color="#F1694B ">Need Help? Get In Touch</Text>

// </Box> 

// </Box>