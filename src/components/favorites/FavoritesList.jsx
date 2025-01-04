import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  Box,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useFavorites } from '../../context/FavoritesContext'
import { Link } from 'react-router-dom'

function FavoritesList() {
  const { favorites, removeFavorite, clearFavorites } = useFavorites()

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Favorite Properties
      </Typography>

      <List>
        {favorites.map((property) => (
          <ListItem
            key={property.id}
            secondaryAction={
              <IconButton
                edge="end"
                onClick={() => removeFavorite(property.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <Link
              to={`/property/${property.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItemText
                primary={property.title}
                secondary={`£${property.price.toLocaleString()}`}
              />
            </Link>
          </ListItem>
        ))}
      </List>

      {favorites.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Button
            variant="outlined"
            color="error"
            onClick={clearFavorites}
            fullWidth
          >
            Clear All Favorites
          </Button>
        </Box>
      )}
    </Paper>
  )
}

export default FavoritesList