import React from "react";
import { useRef ,useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
function Login()
{
    let name=useRef(null)
    let password=useRef(null)
    const [error,setError]=useState({name:false,password:false})
    const handleSubmit=(e)=>{
        e.preventDefault();
    
    if(name.current.value && password.current.value){
        console.log(name.current.value)
        console.log(password.current.value)
    }
    else{
      if(!name.current.value && !password.current.value){
        setError((prev)=>{
            return{...prev,name:true,password:true};
        })
      }
      else if(!name.current.value ){
        setError((prev)=>{
            return{...prev,name:true};
        })
      }
      else if(!password.current.value){
        setError((prev)=>{
            return{...prev,password:true};
        })
      }
    }
 }


    return(
   <Box
   component="form"
   sx={{
'&>:not(style)':{m:1,width:'25ch'},
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column",
  width:'100%',
  height:'100vh'
   }}>
 <Typography color={"Black"} fontSize={"18px"}>
   LOGIN INTO THE ACCOUNT
</Typography>
<Box>
<TextField inputRef={name} type="text" id="standard-basic" label="Name" variant="standard" />
 {error.name&&(<Typography color={"red"} fontSize={"8px"}>
  Fill the name
</Typography>)}
</Box>
<Box>
<TextField inputRef={password} type="password" id="standard-basic" label="Password" variant="standard" />
{error.password&&(<Typography color={"red"} fontSize={"8px"}>
  Fill the password
</Typography>)}
</Box>
<Button varient="contained" color="success"onClick={handleSubmit}>Submit</Button>
   </Box> 
    )
}
export default Login
