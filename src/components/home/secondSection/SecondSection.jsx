//  libraries
import React from 'react';

//  components
import Typography from 'UIElements/typography/Typography';
import Button from 'UIElements/button/Button';

//  styles
import { WorkingWrapperSection, Box } from './styles';

export default function SecondSection() {
  return (
    <WorkingWrapperSection>
      <div className='working-container'>
        <Box withBgImage width='55%'>
          <Typography variant='h1' weight='bold' color='green' className='bigTitle'>
            350 +
            <Typography variant='span' color='blue'> Woloxers</Typography>
          </Typography>
          <Typography color='secondary'>@Wolox</Typography>
          <Button
            size='big'
            fontColor='secondary'
            variant='hyperlink'
            href='https://twitter.com/Wolox'
          >
            Siguenos
          </Button>
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
    </WorkingWrapperSection>
  );
}
