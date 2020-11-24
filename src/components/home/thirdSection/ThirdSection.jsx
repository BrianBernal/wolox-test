//  libraries
import React, { Fragment, useRef } from 'react';

//  hooks
import useScrollY from 'hooks/useScrollY';

//  components
import Typography from 'UIElements/typography/Typography';
import benefitsItems from 'constants/benefitsItems';

// styles
import { BenefitsWrapperSection, BenefitsListContainerDiv, Divider } from './styles';

export default function ThirdSection() {
  const sectionRef = useRef(null);
  useScrollY('benefits', sectionRef);
  const emoji = ';)';

  return (
    <BenefitsWrapperSection ref={sectionRef} id='benefits'>
      <div className='benefits-container'>
        <Typography variant='h5' weight='500'>Entre los beneficios que ofrecemos se encuentran
          <Typography color='blue' variant='span'> {emoji}</Typography>
        </Typography>
        <BenefitsListContainerDiv cols={benefitsItems.length}>
          {benefitsItems.map(({ name, image }) => (
            <Fragment key={name}>
              <img src={image} alt={name} key={`image-${name}`} />
              <Typography variant='p' key={`name-${name}`}>{name}</Typography>
            </Fragment>
          ))}
        </BenefitsListContainerDiv>
        <Divider />
      </div>
    </BenefitsWrapperSection>
  );
}
