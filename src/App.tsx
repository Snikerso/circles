import styled from 'styled-components';
import Circle from './Circle';
import Button from './components/Button';
import { useCircle } from './state/useCircle';

const StyledWrapper= styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

    
`
const StyledWrapperCircles= styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:30px;
    
`


function App() {
  const {circleState, circleDispatch} = useCircle()

  
  return (
    <StyledWrapper>
      <StyledWrapperCircles>
       {circleState.map((item:string,index:number) =>  {
         return <Circle key={item + index} text={item}/>
        })}
      </StyledWrapperCircles>
      <Button onClick={()=>circleDispatch({type:"ADD", payload:{circle:"Lorem ipsum"}})} text={"Dodaj"} />
      <Button onClick={()=>circleDispatch({type:"DELETE"})} text={"Usuń"} />
    </StyledWrapper>
  );
}

export default App;
