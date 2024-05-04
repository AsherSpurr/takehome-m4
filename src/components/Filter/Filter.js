import CheckIcon from '@mui/icons-material/Check';
import {Box, Chip, RadioGroup, Radio } from '@mui/joy'

function Filter({ setFilter, filter }) {

    return (
      <div className="Filter">
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <RadioGroup
            name='article-filters'
            aria-labelledby='article-filters'
            orientation="horizontal"
            sx={{ gap: 1 }}
         >
            {[
              'Tech',
              'Business',
              'Art',
              'Politics',
              'Science',
              'Health',
              'Global'
            ].map((name) => {
              const checked = filter === name
              return (
                <Chip
                  key={name}
                  variant='plain'
                  color={checked ? 'primary' : 'neutral'}
                  startDecorator={
                    checked && <CheckIcon sx={{ zIndex: 1, pointerEvents: 'none' }} />
                  }
                >
                  <Radio
                    variant="outlined"
                    color={checked ? 'primary' : 'neutral'}
                    disableIcon
                    overlay
                    label={name}
                    value={name}
                    checked={checked}
                    onChange={(e) => {
                      if(e.target.checked) {
                        setFilter(name)
                      }
                    }}
                  ></Radio>
                </Chip>
              )
            })}
          </RadioGroup>
        </Box>
      </div>
    );
  }
  
  export default Filter;