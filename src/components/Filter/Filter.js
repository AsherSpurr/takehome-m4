import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Stack } from '@mui/material';

function Filter({ setFilter }) {
  const handleFilterSelect = (e) => {
    setFilter(e.target.id)
  }

    return (
      <div className="Filter">
        <Stack>
        <ButtonGroup spacing={3} size='sm'>
          <Button id='Tech' onClick={(e) => {handleFilterSelect(e)}}>Tech</Button>
          <Button id='Business' onClick={(e) => {handleFilterSelect(e)}}>Business</Button>
          <Button id='Art' onClick={(e) => {handleFilterSelect(e)}}>Art</Button>
          <Button id='Politics' onClick={(e) => {handleFilterSelect(e)}}>Politics</Button>
          <Button id='Science' onClick={(e) => {handleFilterSelect(e)}}>Science</Button>
          <Button id='Health' onClick={(e) => {handleFilterSelect(e)}}>Health</Button>
          <Button id='Global' onClick={(e) => {handleFilterSelect(e)}}>Global</Button>
        </ButtonGroup>
        </Stack>
      </div>
    );
  }
  
  export default Filter;