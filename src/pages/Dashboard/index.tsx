import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    return <Title>Explore repositórios no Github.</Title>
    <Form action="">
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/62976582?s=460&u=a2a80ea4d71dec9fa3feb6a1cfab354fec8e4795&v=4"
          alt="Heluan Santos"
        />
        <div>
          <strong>Hevolsoft</strong>
          <p>Development softwares</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
