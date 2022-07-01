import { Box } from '@mui/material';
import './App.css';
import MediaCard from './Components/Cards/MediaCard';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', flexWrap: 'wrap' }}>
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </Box >
  );
}

export default App;
