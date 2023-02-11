# MATCH MUSICAL - FRONT-END

## DIRETÓRIOS PRINCIPAIS

```
node_modules: Onde ficam as dependências instaladas
src: Diretório onde ficam os principais arquivos do projeto.
```

### ARQUIVOS DO DIRETÓRIO ROOT

```
.env: variáveis de ambiente do projeto
.env.example: o que subimos para o git com o exemplo do que colocar em cada env-var
.eslintrc.json: nosso arquivo de configuração e regras do ESLint
.gitignore: onde listamos os arquivos que não subirão para o GitHub/GitLab.
index.html: arquivo padrão para vermos em tela o que foi feito no React.
package-lock.json e package.json: dependências do projeto.
README.md: documentação.
tsconfig.json e tsconfig.node.json: Configurações do TypeScript do projeto.
vite.config.ts: configurações do projeto React.
```

### DENTRO DO DIRETÓRIO SRC

```
assets: Contém dois sub-diretórios para imagens e fontes.

components: Nossos componentes mais simples e reaproveitáveis ficam nesta pasta.

contexts: Onde podemos utilizar um estado para o projeto todo (Como o usuário logado no momento).

hooks: Aqui é onde criamos hooks próprios e reutilizáveis (ex: useLocalStorage).

pages: Nossas páginas principais ficam neste diretório.

App.tsx: Nosso principal componente, responsável por renderizar as rotas e utilizar o context.

index.css: Arquivo utilizado para a estilização padrão para todo o projeto.

Routes.tsx: Onde deixamos todos nossos componentes criados nos sub-diretórios do diretório Pages

vite-env.d.ts: Sobreescrevendo pequenas coisas do Vite.
```
