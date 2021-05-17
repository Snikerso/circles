import styled from 'styled-components'

interface ButtonProps {
    text:string;
    onClick: () =>void;
}

const StyledButton = styled.button`
    width:250px;
    height:100px;
    margin-top:20px;

`

const Button = ({ text,onClick }:ButtonProps) => {

    return( 
            <StyledButton onClick={onClick}><p>{text}</p></StyledButton> 
    )

 }

 export default Button