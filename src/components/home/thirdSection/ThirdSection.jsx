//  libraries
import React from 'react';

//  components
import Typography from 'UIElements/typography/Typography';
import benefitsItems from 'constants/benefitsItems';

// styles
import { BenefitsWrapperSection, BenefitsListContainerDiv, Divider } from './styles';

export default function ThirdSection() {
  const emoji = ';)';
  return (
    <BenefitsWrapperSection>
      <div className='benefits-container'>
        <Typography variant='h5' weight='500'>Entre los beneficios que ofrecemos se encuentran
          <Typography color='blue' variant='span'> {emoji}</Typography>
        </Typography>
        <BenefitsListContainerDiv cols={benefitsItems.length}>
          {benefitsItems.map(({ name, image }) => <img src={image} alt={name} />)}
          {benefitsItems.map(({ name }) => <Typography variant='p'>{name}</Typography>)}
        </BenefitsListContainerDiv>
        <Divider />
      </div>
    </BenefitsWrapperSection>
  );
}
