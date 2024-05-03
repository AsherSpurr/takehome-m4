import MuiCard from "../MuiCard/MuiCard";

function Article({ articleData }) {
  const cards = articleData.map((article) => {
    return (
      <MuiCard
        image={article.urlToImage}
        description={article.description}
        title={article.title}
      />
    )
  })
    return (
      <div className="Article">
        {cards}
      </div>
    );
  }
  
  export default Article;