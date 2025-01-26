# NextAuthMasterClass

**NextAuthMasterClass** é uma aplicação full-stack construída com **Next.js**, **NextAuth.js**, e diversas outras tecnologias modernas. O projeto demonstra como configurar autenticação de usuários, validação de dados, envio de emails e outros recursos com integração de UI moderna usando **shadcn/ui**.

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de aplicações full-stack.
- **NextAuth.js**: Biblioteca de autenticação para Next.js, facilitando a integração com provedores de autenticação como Google, GitHub, etc.
- **Prisma**: ORM para Node.js e TypeScript, utilizado para gerenciar o banco de dados e realizar operações de leitura e escrita.
- **Zod**: Biblioteca de validação de dados para garantir a integridade e segurança das informações no projeto.
- **shadcn/ui**: Biblioteca de componentes UI para React, que oferece uma forma rápida de criar interfaces bonitas e funcionais.
- **Resend**: Serviço de envio de emails, utilizado para gerenciar o envio de emails de forma fácil e eficiente.
- **Sonner**: Biblioteca de notificações para exibir mensagens de sucesso e erro para o usuário.
- **TailwindCSS**: Framework de CSS para estilização rápida e responsiva.

## Funcionalidades

- **Autenticação com Provedores Externos**: Integração com provedores de autenticação como **Google** e **GitHub** utilizando **NextAuth.js**.
- **Validação de Dados**: **Zod** é usado para validar dados do formulário, garantindo segurança e qualidade.
- **Envio de Emails**: **Resend** é utilizado para enviar emails de maneira fácil e rápida para os usuários.
- **Notificações**: **Sonner** é utilizado para mostrar notificações interativas de sucesso ou erro para o usuário.
- **Banco de Dados**: **Prisma** gerencia o banco de dados, permitindo fácil acesso e manipulação de dados no banco.
- **Estilização Responsiva**: **TailwindCSS** é utilizado para a criação de interfaces modernas e responsivas.
- **Componentes de UI**: **shadcn/ui** proporciona uma interface de usuário interativa e visualmente agradável, com componentes reutilizáveis e de fácil integração.

## Instalação

1. Clone este repositório:
    ```bash
    git clone https://github.com/lazaroalvesr/NextAuthMasterClass.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd NextAuthMasterClass
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Configure as credenciais para os provedores de autenticação no arquivo `.env.local`:
    - **Google**: Para autenticação via Google, você precisa de um **Client ID** e **Client Secret** da Google Cloud Console.
    - **GitHub**: Para autenticação via GitHub, você precisa de um **Client ID** e **Client Secret** do GitHub Developer Settings.
    - **Resend**: Configure a API Key do **Resend** para envio de emails.

    ```plaintext
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=<gerar_uma_senha_secreta>
    
    GOOGLE_CLIENT_ID=<seu_google_client_id>
    GOOGLE_CLIENT_SECRET=<seu_google_client_secret>
    
    GITHUB_CLIENT_ID=<seu_github_client_id>
    GITHUB_CLIENT_SECRET=<seu_github_client_secret>
    
    RESEND_API_KEY=<sua_api_key_do_resend>
    ```

5. Execute o projeto:
    ```bash
    npm run dev
    ```

6. Acesse a aplicação no navegador em `http://localhost:3000`.

## Como Usar

1. Acesse a página de login da aplicação.
2. Clique no botão de autenticação para fazer login com **Google** ou **GitHub**.
3. Após a autenticação, você será redirecionado para a página principal da aplicação ou uma página protegida.
4. Utilize o envio de email e as notificações como parte do fluxo de interação com o usuário.

## *✍️ *Autor**
- [@lazaroalvesr](https://github.com/lazaroalvesr)

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.lazaroalvesr.com/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/l%C3%A1zaro-alves-r/)


