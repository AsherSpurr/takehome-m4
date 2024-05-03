import Article from "../Articles/Article";

function Home({ filteredData }) {
    return (
      <div className="Home">
        <Article filteredData={filteredData}/>
      </div>
    );
  }
  
  export default Home;