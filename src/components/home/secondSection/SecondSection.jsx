//  libraries
import React from 'react';

//  components
import Typography from 'UIElements/typography/Typography';

//  styles
import { WorkingWrapperDiv, Box } from './styles';

export default function SecondSection() {
  return (
    <WorkingWrapperDiv>
      <div className='content'>
        <Box withBgImage width='55%'>
          <Typography variant='h1' weight='bold' color='green' className='bigTitle'>
            350 +
            <Typography variant='span' color='blue'> Woloxers</Typography>
          </Typography>
          <Typography color='secondary'>@Wolox</Typography>
          <button type='button'>Siguenos</button>
        </Box>
        <Box>
          <Typography variant='h1' weight='500'>
            Trabajamos para
            <Typography variant='span' weight='bold' color='blue'> convertir </Typography>
            <Typography variant='span' weight='bold' color='green'>ideas </Typography>
            en productos
          </Typography>
        </Box>
      </div>
    </WorkingWrapperDiv>
  );
}
