import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars2.githubusercontent.com/u/670083?s=460&u=46e1797841451f5aee6fed85a1b66bb2f6920362&v=4" alt="Fabio Vige"/>

          <div>
            <strong>rocketseat/unform</strong>
            <p>Simplicidade e funcionalidades caminham juntos</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars2.githubusercontent.com/u/670083?s=460&u=46e1797841451f5aee6fed85a1b66bb2f6920362&v=4" alt="Fabio Vige"/>

          <div>
            <strong>rocketseat/unform</strong>
            <p>Simplicidade e funcionalidades caminham juntos</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars2.githubusercontent.com/u/670083?s=460&u=46e1797841451f5aee6fed85a1b66bb2f6920362&v=4" alt="Fabio Vige"/>

          <div>
            <strong>rocketseat/unform</strong>
            <p>Simplicidade e funcionalidades caminham juntos</p>
          </div>

          <FiChevronRight size={20} />
        </a>

      </Repositories>

    </>
  )
};

export default Dashboard;
