//  libraries
import React, { useEffect, useState } from 'react';

//  hooks
import { useSelector, useDispatch } from 'react-redux';

//  redux
import { techlistRequest } from 'redux/ducks/techList/actions';

//  components
import Typography from 'UIElements/typography/Typography';

//  styles
import { CardDiv, ContainerSectionDiv, ContainerViewDiv } from './styles';

function asc(a, b) {
  if (a.tech.toLowerCase() < b.tech.toLowerCase()) {
    return -1;
  }
  if (a.tech.toLowerCase() > b.tech.toLowerCase()) {
    return 1;
  }
  return 0;
}

function des(a, b) {
  if (a.tech.toLowerCase() < b.tech.toLowerCase()) {
    return 1;
  }
  if (a.tech.toLowerCase() > b.tech.toLowerCase()) {
    return -1;
  }
  return 0;
}

export default function TechList() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.techlist);
  const [techlist, setTechlist] = useState([]);
  const [showError, setShowError] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [sort, setSort] = useState('empty');

  //  initial loading
  useEffect(() => {
    dispatch(techlistRequest(() => { setShowError(true); }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const runSearching = () => {
    const search = searchText.toLocaleLowerCase();
    const filteredList = searchText.length === 0
      ? data
      : data.filter(({ tech, type }) => (
        tech.toLocaleLowerCase().includes(search)
            || type.toLocaleLowerCase().includes(search)
      ));
    setTechlist(filteredList);
  };

  useEffect(() => {
    if (searchText.length % 2 === 0 && data.length > 0) {
      runSearching();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, searchText]);

  useEffect(() => {
    if (sort === 'asc') {
      const sorted = techlist.slice();
      sorted.sort(asc);
      setTechlist(sorted);
    } else if (sort === 'des') {
      const sorted = techlist.slice();
      sorted.sort(des);
      setTechlist(sorted);
    } else {
      runSearching();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  return (
    <ContainerViewDiv>
      <Typography variant='h1' color='green'>Tech List</Typography>
      <ContainerSectionDiv>
        <input type='text' placeholder='Search...' onChange={({ target }) => setSearchText(target.value)} />
        <select value={sort} onChange={({ target }) => { setSort(target.value); }}>
          <option value='empty'>Ordenar...</option>;
          <option value='asc'>Ascendente</option>
          <option value='des'>Descendente</option>
        </select>
      </ContainerSectionDiv>
      <ContainerSectionDiv>
        {techlist.map(({
          logo, tech, language, type, author, year, license,
        }) => (
          <CardDiv key={`${tech}${author}`.trim()}>
            <img src={logo} height='50px' alt={`logo-${tech}`} />
            <Typography><b>{tech}</b></Typography>
            <Typography><i>Lenguage: </i>{language}</Typography>
            <Typography><i>Tipo: </i>{type}</Typography>
            <Typography><i>Autor: </i>{author}</Typography>
            <Typography><i>Año: </i>{year}</Typography>
            <Typography><i>Licencia: </i>{license}</Typography>
          </CardDiv>
        ))}
        {showError && <Typography><i>Error de conexión.</i></Typography>}
        {loading && <Typography><i>Cargando...</i></Typography>}
      </ContainerSectionDiv>
      {!loading && !showError && <Typography variant='h2' color='text'><i>Total Tecnologías: </i>{data.length}</Typography>}
    </ContainerViewDiv>
  );
}
