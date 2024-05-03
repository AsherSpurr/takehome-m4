import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Filter({ setFilter }) {
  const handleFilterSelect = (e) => {
    // e.preventDefault()
    setFilter(e.target.id)
  }

  // handleButtonSubmit = () => {

  // }
    return (
      <div className="Filter">
        <ButtonGroup spacing={3} size='sm'>
          <Button id='Tech' onClick={(e) => {handleFilterSelect(e)}}>Tech</Button>
          <Button id='Business' onClick={(e) => {handleFilterSelect(e)}}>Business</Button>
          <Button id='Art' onClick={(e) => {handleFilterSelect(e)}}>Art</Button>
          <Button id='Politics' onClick={(e) => {handleFilterSelect(e)}}>Politics</Button>
          <Button id='Science' onClick={(e) => {handleFilterSelect(e)}}>Science</Button>
          <Button id='Health' onClick={(e) => {handleFilterSelect(e)}}>Health</Button>
          <Button id='' onClick={(e) => {handleFilterSelect(e)}}>All</Button>
          <Button></Button>
        </ButtonGroup>
      </div>
    );
  }
  
  export default Filter;