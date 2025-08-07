import { useState } from 'react';
import {
  Button,
  Container,
  Typography,
  Box,
  Paper,
} from '@mui/material';

/**
 * Home page component with a simple counter example
 *
 * @returns {React.ReactElement} Home page content
 */
const Home = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={1} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom color="primary">
          Vite + React + MUI
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Template de démarrage avec les dernières technologies
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Technologies incluses :
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            • React 19 avec hooks modernes<br />
            • Material-UI avec thème personnalisé et mode sombre<br />
            • TanStack Query pour la gestion des données<br />
            • React Router pour la navigation<br />
            • Vite pour un développement rapide<br />
            • ESLint avec configuration Airbnb
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Button
            onClick={handleIncrement}
            variant="contained"
            size="large"
            sx={{ mr: 2 }}
          >
            Compteur : {count}
          </Button>
          <Button
            onClick={() => setCount(0)}
            variant="outlined"
            size="large"
            disabled={count === 0}
          >
            Reset
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;
