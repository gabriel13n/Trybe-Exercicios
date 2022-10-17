import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

const TASK_DESCRIPTION = 'Beber água!';

describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);

    // const buttonAdd = screen.getByText('Adicionar');
    // expect(buttonAdd).toBeInTheDocument();
    // expect(buttonAdd.type).toBe('button');
    // ou

    const button = screen.getByRole('button', { name: 'Adicionar' });
    expect(button).toBeInTheDocument();
  });

  test('Ao clicar no botão "Adicionar" a task deve ser adicionada a tela', () => {
    render(<App />);

    const inputTask = screen.getByLabelText('Tarefa:');
    const buttonAdd = screen.queryByText('Adicionar');
    userEvent.type(inputTask, TASK_DESCRIPTION);
    expect(screen.queryByText(TASK_DESCRIPTION)).not.toBeInTheDocument();
    userEvent.click(buttonAdd);
    expect(screen.queryByText(TASK_DESCRIPTION)).toBeInTheDocument();
  });
});

describe('Testa a aplição, e o input', () => {
  test('Testa a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];

    render(<App />);

    const inputTask = screen.getByLabelText('Tarefa:');
    const btnAdd = screen.getByText('Adicionar');

    listTodo.forEach((task) => {
      userEvent.type(inputTask, task);
      userEvent.click(btnAdd);
    });

    listTodo.forEach((task) => {
      expect(screen.getByText(task)).toBeInTheDocument();
    });
  });
});

describe('Testa o Componente item', () => {
  test('Ao receber uma string na props ela precisa aparecer na tela', () => {
    render(<Item content="Limpar a casa" />);
    expect(screen.getByText('Limpar a casa')).toBeInTheDocument();
  });
});
