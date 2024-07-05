import styled from "styled-components"

const Section = styled.section`
width:100%;
height:100vh;
`
const Article = styled.article`
width:90%;
height:inherit;
margin:0 auto;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

const H1 = styled.h1`
padding:10px;
color:#009688;
font-size:28px;
text-transform:uppercase;
font-weight:400;
letter-spacing:1.6px
font-style:revert-layer
`
const Main = styled.main`
    background: white;
    width: 400px;
    height: auto;
    padding: 10px;
    border: 1px solid #0096882;
    border-radius:15px;
`
const Div = styled.div`
margin:10px 0;

`
const Label = styled.label`
width: 100%;
display: block;
font-size: 14px;
padding: 5px 0;
font-weight: 500;
`
const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: px sollid #ccc;
    border-radius: 5px;
}`
const Button = styled.button`
border:1px solid #607d8b;
font-size:16px;
text-transform:uppercase;
border-radius:5px;
width:100%;
padding:10px;
color:#fff;
background:#009688;
font-weight:500;
margin:10px 0
cursor:pointer;
&:hover{
background:${({ background }) => background === '#005a96' ? "#005a96" : "#888"}
}`

const ContactForm = () => {
    return (
        <Section>
            <Article>
                <header>
                    <H1>Contact Form</H1>
                </header>
                <Main>
                    <Div className="form-group">
                        <Label htmlFor="email">Email</Label>
                        <Input type="text" placeholder="Enter email" />
                    </Div>
                    <Div className="form-group">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" placeholder="Enter password" />
                    </Div>
                    <Div className="form-group">
                        <Button background="#005a96">Submit</Button>
                    </Div>
                </Main>
            </Article>
        </Section>
    )
}

export default ContactForm
