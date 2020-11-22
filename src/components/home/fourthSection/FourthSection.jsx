//  libraries
import React from 'react';

//  styles

//  components
import Typography from 'UIElements/typography/Typography';
import Button from 'UIElements/button/Button';
import Footer from 'components/footer/Footer';
import ThanksWrapperSection from './styles';

export default function FourthSection() {
  return (
    <ThanksWrapperSection>
      <div className='thanks-container'>
        <Typography variant='h1' weight='bold'>
          Gracias por <Typography variant='span' color='blue'>completar el ejercicio</Typography>
        </Typography>
        <Typography variant='h4' weight='500'>
          Te invitamos a ver mas informacion
        </Typography>
        <Button
          bgColor='blue'
          fontColor='secondary'
          size='big'
          variant='hyperlink'
          href='https://www.wolox.com.ar/'
        >
          Conocer mas
        </Button>
        <Footer />
      </div>
    </ThanksWrapperSection>
  );
}
