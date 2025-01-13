# Desafio Angular - CRUD de Posts e Comentários

Este é um projeto Angular que implementa um CRUD (Create, Read, Update, Delete) de posts, utilizando uma API pública, além de adicionar a funcionalidade de comentários. O projeto utiliza Tailwind CSS para estilização e um gerenciamento "in memory" dos dados, sincronizando as alterações com a API.

## Funcionalidades Principais

- **Listagem de Posts:** Exibição dos posts em uma tabela na página inicial.
- **Criação de Posts:** Adição de novos posts através de um modal.
- **Edição de Posts:** Modificação de posts existentes através de um modal.
- **Exclusão de Posts:** Remoção de posts da lista.
- **Gerenciamento "In Memory":** Manutenção de uma cópia dos posts no lado do cliente para uma experiência mais rápida.
- **Sincronização com API:** Todas as operações de CRUD são sincronizadas com a API pública `https://jsonplaceholder.typicode.com/posts`.
- **Comentários:** Cada post pode ter comentários associados, também com operações de CRUD.
- **Estilização com Tailwind CSS:** Interface limpa e responsiva utilizando o framework Tailwind CSS.

## Requisitos

- [Node.js](https://nodejs.org/) (versão recomendada: 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente incluído com o Node.js)
- [Angular CLI](https://cli.angular.io/) (versão recomendada: 17 ou superior)

## Como Executar o Projeto

1. **Clonar o Repositório:**

    ```bash
    git clone <URL_DO_SEU_REPOSITÓRIO>
    cd desafio-angular
    ```

2. **Instalar as Dependências:**

    ```bash
    npm install
    ```

3. **Executar a Aplicação:**

    ```bash
    ng serve
    ```

    A aplicação estará disponível em [http://localhost:4200](http://localhost:4200).

## Estrutura do Projeto

- `src/app/`: Contém os arquivos principais do projeto Angular.
    - `components/`: Contém os componentes.
        - `post/`: Componente para gerenciar os posts.
            - `post.component.ts`: Lógica do componente de posts.
            - `post.component.html`: Interface do componente de posts.
            - `post.component.css`: Estilos do componente de posts.
    - `services/`: Contém os serviços.
        - `api.service.ts`: Serviço para consumir a API.
        - `in-memory.service.ts`: Serviço para gerenciar os posts localmente.
    - `app.config.ts`: Arquivo de configuração principal da aplicação.
    - `app.routes.ts`: Arquivo de configuração das rotas da aplicação.
    - `app.component.ts`: Componente raiz da aplicação.
    - `app.component.html`: Template do componente raiz.
- `tailwind.config.js`: Arquivo de configuração do Tailwind CSS.
- `src/styles.css`: Arquivo de estilos globais da aplicação.

## Tecnologias Utilizadas

-   **Angular:** Framework para construção de aplicações web.
-   **TypeScript:** Linguagem de programação baseada em JavaScript.
-   **Tailwind CSS:** Framework para estilização da interface.
-   **Node.js:** Ambiente de execução para JavaScript.
-   **npm:** Gerenciador de pacotes para JavaScript.

## Próximos Passos

-   Implementar testes unitários e de integração para o projeto.
-   Adicionar paginação para lidar com grandes volumes de dados.
-   Melhorar a usabilidade e acessibilidade da interface.
-   Adicionar validação de formulários.

## Contribuição

Contribuições são sempre bem-vindas! Se você encontrar algum problema ou tiver alguma sugestão, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

## Licença

