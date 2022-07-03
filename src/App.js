import { Box } from '@mui/material';
import MediaCard from './Components/Cards/MediaCard';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', flexWrap: 'wrap' }}>
      {[1, 2, 3, 4, 5].map(card => (
        <MediaCard key={card} />
      ))}
    </Box>
  );
}

export default App;
