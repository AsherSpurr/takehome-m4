import MuiCard from "../MuiCard/MuiCard";

function Article({ filteredData }) {

  return (
    <div className="Article">
      <MuiCard filteredData={filteredData}/>
    </div>
  );
}

export default Article;
