//  libraries
import React, { useEffect, useState } from 'react';

//  hooks
import { useSelector, useDispatch } from 'react-redux';

//  redux
import { techlistRequest } from 'redux/ducks/techList/actions';

//  components
import Typography from 'UIElements/typography/Typography';

//  styles
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { favoriteTechsAdd, favoriteTechsDelete } from 'redux/ducks/ui/actions';
import {
  CardDiv, ContainerSectionDiv, ContainerViewDiv, IconButtonDiv,
} from './styles';

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
  const favoriteTechs = useSelector((state) => state.ui.favoriteTechs);
  const [techlist, setTechlist] = useState([]);
  const [showError, setShowError] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [sort, setSort] = useState('empty');

  //  initial loading
  useEffect(() => {
    dispatch(techlistRequest(() => { setShowError(true); }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const runSearching = (textValue) => {
    const filteredList = searchText.length === 0
      ? data
      : data.filter(({ tech, type }) => (
        tech.toLowerCase().includes(textValue)
            || type.toLowerCase().includes(textValue)
      ));
    setTechlist(filteredList);
  };

  const runSorting = () => {
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
  };

  useEffect(() => {
    const inputText = searchText.trim().split(' ')[0];
    if (inputText.length % 2 === 0 && data.length > 0) {
      runSearching(inputText.toLowerCase());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, searchText]);

  useEffect(() => {
    runSorting();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  const handleFavorite = (reduxAction, tech) => () => {
    dispatch(reduxAction(tech));
  };

  const renderFavoriteButton = (tech) => {
    const isFavorite = favoriteTechs.includes(tech);
    const reduxAction = isFavorite ? favoriteTechsDelete : favoriteTechsAdd;
    return (
      <IconButtonDiv onClick={handleFavorite(reduxAction, tech)}>
        {isFavorite ? <MdFavorite fontSize='2rem' /> : <MdFavoriteBorder fontSize='2rem' />}
      </IconButtonDiv>
    );
  };

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
            {renderFavoriteButton(tech)}
          </CardDiv>
        ))}
        {showError && <Typography><i>Error de conexión.</i></Typography>}
        {loading && <Typography><i>Cargando...</i></Typography>}
      </ContainerSectionDiv>
      {!loading && !showError && <Typography variant='h2' color='text'><i>Total Tecnologías: </i>{techlist.length}</Typography>}
    </ContainerViewDiv>
  );
}
