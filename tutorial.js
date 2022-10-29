import React,{useState} from "react";
import styled from "styled-components";
import { useHistory} from "react-router-dom"

const Wrapper = styled.div`
background-color: #C3F8FF;
height: 100vh;
display: flex;
`;
const LeftSide = styled.div`
Width: 50%;
`;

const Label = styled.label`
font-size: 24px;
color: black;
font-family: "Fantasy cursive";
`;

const Input = styled.input`
font-size: 24px;
width: 80%;
margin-bottom: 35px;
border: none;
height: 40px;
background-color: #a2d2ff;
`;

const Title = styled.div`
font-size: 50px;
font-weight: 600;
color: #B1B2FF;
font-family: "Fantasy cursive";
text-align: center;
margin-top: 200px;
`

const RightSide = styled.div`
width: 50%;
background-image: url("https://cdn.vox-cdn.com/thumbor/-ORM_Ixzl-CMrn7a54QxunBDlA4=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22534162/1319527745.jpg");
background-size: cover;
height: 100vh;
`;
const LabelWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
padding-left: 40px;
`;

const Button = styled.button`
width: 200px;
height: 40px;
color: blue;
font-size: 20px;
border-radius: 10px;
border: 5px blue solid;
padding-left: 10px;
margin-left: 150px;
background-color: #a2d2ff;
`
;



function LoginPage() {
    
    const [user, setUser] = useState({
        id: "",
        password: "",
    });
    const history = useHistory();
    const navigateToMainPage = () => {
        console.log(user);

        if (user.id == "jonathan" && user.password == "1234"){
            history.push("/main");
            
        }
    }
    const onChangeUser = (e) => {
        const {name, value} = e.target;
       setUser({ ... user, [name]: value});
        console.log(user);
    };
    return (
    <Wrapper>
        <LeftSide>
            <Title>Welcome Back!</Title>
            <LabelWrapper>
          <Label>Email</Label>
            <Input name="id" 
            value= {user.id}
            onChange={onChangeUser}></Input>
           <Label>Password</Label>
           <Input type="password" name="password" value={user.password} onChange={onChangeUser}></Input>
           </LabelWrapper>
           <Button onClick={navigateToMainPage}>Login</Button>

       </LeftSide>
        <RightSide>B</RightSide>

    
    </Wrapper>
    );
}
export default LoginPage;
