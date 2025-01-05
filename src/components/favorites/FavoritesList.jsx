
import './'

import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  Box,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFavorites } from '../../context/FavoritesContext';
import { Link } from 'react-router-dom';
import { Droppable, Draggable } from 'react-beautiful-dnd';

function FavoritesList() {
  const { favorites, removeFavorite, clearFavorites } = useFavorites();

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Favorite Properties ({favorites.length})
      </Typography>

      <Droppable droppableId="favorites">
        {(provided) => (
          <Box 
            ref={provided.innerRef} 
            {...provided.droppableProps}
            sx={{ minHeight: '100px' }}
          >
            <List>
              {favorites.map((property, index) => (
                <Draggable
                  key={property.id}
                  draggableId={property.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <ListItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      dense
                      sx={{
                        bgcolor: snapshot.isDragging ? 'action.hover' : 'transparent',
                        '&:hover': { bgcolor: 'action.hover' }
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar
                          variant="rounded"
                          src={property.images[0]}
                          alt={property.title}
                          sx={{ width: 60, height: 60, mr: 1 }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Link
                            to={`/property/${property.id}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                          >
                            £{property.price.toLocaleString()}
                          </Link>
                        }
                        secondary={property.shortDescription}
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          onClick={() => removeFavorite(property.id)}
                          size="small"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          </Box>
        )}
      </Droppable>

      {favorites.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Button
            variant="outlined"
            color="error"
            onClick={clearFavorites}
            size="small"
            fullWidth
          >
            Clear All
          </Button>
        </Box>
      )}
    </Paper>
  );
}

export default FavoritesList;
