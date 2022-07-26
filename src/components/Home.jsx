import { useState } from 'react';
import {
  Button,
  Container,
} from '@mui/material';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <header>
        <p>Hello Vite + React!</p>
        <p>
          <Button
            onClick={() => setCount(c => c + 1)}
            variant="outlined"
          >
            count is: {count}
          </Button>
        </p>
      </header>
    </Container>
  );
};

export default Home;
