import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";

function MuiCard({ articleData }) {

  return (
    <div className="MuiCard">
      <Grid container spacing={5} columns={3}>
        {articleData.map((article) => {
          return (
            <Grid item xs={1} md={1} lg={1} xl={1}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={article.urlToImage}
                  title="title"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default MuiCard;
