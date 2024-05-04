import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/system";
import { useState } from "react";

function MuiCard({ filteredData }) {
  const [open, setOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const selectArticle = (e) => {
    const target = filteredData.find((article) => {
      return article.title === e.target.id;
    });
    console.log(target);
    setSelectedArticle(target);
    handleOpen();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 500,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 30,
    p: 4,
  };

  return (
    <div className="MuiCard">
      <Grid container spacing={5} columns={3}>
        {filteredData.map((article) => {
          return (
            <Grid item xs={1} md={1} lg={1} xl={1}>
              <Card
                sx={{
                  boxShadow: "none",
                  transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                  "&:hover": {
                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
                    transform: "scale(1.04)",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 230 }}
                  image={article.urlToImage}
                  title="title"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {article.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {article.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    id={article.title}
                    size="small"
                    onClick={(e) => selectArticle(e)}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h5"
            component="h2"
            id="modal-description"
            textAlign="center"
            fontWeight='600'
          >
            {selectedArticle.title}
          </Typography>
          <Stack alignItems="center">
            <Typography variant="subtitle2" color="text.secondary" fontWeight='600'>
              By {selectedArticle.author}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {selectedArticle.publishedAt}
            </Typography>
          </Stack>
          <Typography id="modal-description" variant="body1" sx={{ mt: 5 }}>
            {selectedArticle.description}
          </Typography>
          <Typography variant="body2" sx={{ mt: 5 }}>
            <Link
              href={selectedArticle.url}
              underline="hover"
              target="_blank"
              rel="noopener"
              padding='5px'
              sx={{
                "&:hover": {
                  backgroundColor: 'rgba(25, 118, 210, 0.05)',
                  transform: "scale(.02)",
                },
              }}
            >
              Link To Article
            </Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default MuiCard;
