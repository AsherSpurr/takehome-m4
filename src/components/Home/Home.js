import Article from "../Articles/Article";

function Home({ articleData }) {
    return (
      <div className="Home">
        <Article articleData={articleData}/>
      </div>
    );
  }
  
  export default Home;