import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="Hevolsoft" />
          <strong>Hevolsoft</strong>
          <p>descrição</p>
        </header>
        <ul>
          <li>
            <strong>999</strong>
            <span>Starr</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={'gdrgg'}>
          <div>
            <strong>asdsad</strong>
            <p>asdsad</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
