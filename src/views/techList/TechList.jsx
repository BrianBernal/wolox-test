//  libraries
import React, { useEffect } from 'react';

//  hooks
import { useSelector, useDispatch } from 'react-redux';

//  redux
import { techlistRequest } from 'redux/ducks/techList/actions';

//  components
import Typography from 'UIElements/typography/Typography';

//  styles
import { CardDiv, ContainerCardsDiv, ContainerViewDiv } from './styles';

export default function TechList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.techlist.data);

  useEffect(() => {
    dispatch(techlistRequest(() => { console.log('error callback'); }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerViewDiv>
      <Typography variant='h1' color='green'>Tech List</Typography>
      <ContainerCardsDiv>
        {data.map(({
          logo, tech, language, type, author, year, license,
        }) => (
          <CardDiv key={logo}>
            <img src={logo} height='50px' alt={`logo-${tech}`} />
            <Typography><b>{tech}</b></Typography>
            <Typography><i>Lenguage: </i>{language}</Typography>
            <Typography><i>Tipo: </i>{type}</Typography>
            <Typography><i>Autor: </i>{author}</Typography>
            <Typography><i>Año: </i>{year}</Typography>
            <Typography><i>Licencia: </i>{license}</Typography>
          </CardDiv>
        ))}
      </ContainerCardsDiv>
      <Typography variant='h2' color='text'><i>Total Tecnologías: </i>{data.length}</Typography>
    </ContainerViewDiv>
  );
}
