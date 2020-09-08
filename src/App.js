import React, { useState } from 'react';

import styled from 'styled-components'

const Heading = styled.h1`
  font-size: ${props => props.size || "3rem"};
  color: ${props => props.warning ? "red": "black"};
`

const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1.5rem;
  margin: 2em;
  padding: 0.5rem 1.5rem;
  border: 2px solid palevioletred;
  border-radius: 6px;
`

const ButtonSuccess = styled(Button)`
  color: white;
  background: blue;
  border-color: blue;
`

const ButtonWarning = styled(Button)`
  color: white;
  background: palevioletred;
`

function App() {
  const [clickCount, setClickCount] = useState(1)
  return (
    <div>
      <Heading size={`${clickCount}rem`}>Normal Heading</Heading>
      <Heading warning size="5rem">Warning Heading</Heading>
      <Button>Normal Button</Button>
      <ButtonWarning>Warning Button</ButtonWarning>
      <ButtonSuccess 
        onClick={() => setClickCount(clickCount + 1)}
      >
        Success Button
      </ButtonSuccess>
    </div>
  );
}

export default App;


// npm install styled-components
// npm install --save styled-components