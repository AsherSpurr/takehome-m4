import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

function MuiCard({ image, description, title  }) {
    return (
      <div className="MuiCard">
        <Card>
          <CardMedia
            sx={{ height: 140 }}
            image={image}
            title="title"/>
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
          </CardContent>
          <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
        </Card>
      </div>
    );
  }
  
  export default MuiCard;