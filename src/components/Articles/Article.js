import MuiCard from "../MuiCard/MuiCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function Article({ articleData }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));

  // const cards = articleData.map((article) => {
  //   return (
  //     <MuiCard
  //       image={article.urlToImage}
  //       description={article.description}
  //       title={article.title}
  //     />
  //   );
  // });

  return (
    <div className="Article">
      <MuiCard articleData={articleData} />
    </div>
  );
}

export default Article;
