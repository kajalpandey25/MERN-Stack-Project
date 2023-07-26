import { Box, TextField, Button, styled } from '@mui/material';

const Component = styled(Box)`
width: 400px;
margin: auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;


const Login = () =>{

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    return(
   <Component>
<img src={imageURL} alt="login" />
<TextField variant="standard" />
<TextField variant="standard" />
<button variant="contained" >Login</button>
<button>Create an account</button>
   </Component>
    )
}

export default Login;