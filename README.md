# Projeto BuzzFeed

Esta é uma réplica da página inicial do site BuzzFeed desenvolvida como um projeto de portfólio com o objetivo de replicar o layout e a experiência do portal BuzzFeed. O projeto foi desenvolvido utilizando **Angular 15**, **TypeScript**, **HTML5** e **CSS3**.

## Funcionalidades

- **Quiz interativo**: Sistema de quiz com perguntas múltiplas e resultados dinâmicos baseados nas respostas do usuário
- **Grid de cards responsivo**: Cards de conteúdo que se reorganizam de 4 → 2 → 1 colunas conforme o tamanho da tela
- **Filtro de categorias**: Filtre posts por categoria (Ciência, Quizzes, Culinária, Entretenimento, Bem-estar, Tecnologia)
- **Carregamento infinito simulado**: Posts carregam automaticamente ao rolar a página (scroll infinito) ou via botão "Carregar mais"
- **Modo escuro/claro**: Alternância entre temas claro e escuro com persistência via CSS
- **Menu responsivo**: Menu hambúrguer para navegação em dispositivos móveis
- **Animações de entrada**: Cards com efeito fade-in e slide-up ao carregar
- **Estados de interação**: Hover e foco em cards e botões com transições suaves
- **Acessibilidade básica**: alt em imagens, navegação por teclado, aria-labels e semântica HTML
- **Página estática via GitHub Pages**: Build otimizado para deploy no GitHub Pages

## Tecnologias Utilizadas

| Tecnologia | Versão |
|------------|--------|
| Angular | 15.2.x |
| TypeScript | 4.9.x |
| HTML5 | - |
| CSS3 | - |
| RxJS | 7.8.x |
| angular-cli-ghpages | 2.0.3 |

## Como visualizar o projeto

### Online (GitHub Pages)

Acesse: https://jacksonjeanps.github.io/projeto-buzzfeed/

### Local (desenvolvimento)

1. Certifique-se de ter o **Node.js** (v16+) e **Angular CLI** instalados
2. Abra o terminal e acesse o diretório onde deseja salvar o projeto
3. Clone o repositório:

```bash
git clone https://github.com/JacksonJeanPS/projeto-buzzfeed.git
```

4. Acesse a pasta do projeto e instale as dependências:

```bash
cd projeto-buzzfeed
npm install
```

5. Inicie o servidor de desenvolvimento:

```bash
ng serve
```

6. Acesse `http://localhost:4200` no seu navegador

### Build para produção

```bash
ng build
```

## Como baixar o projeto

Caso queira baixar o projeto para visualizar em sua máquina local, siga os seguintes passos:

1. Abra o terminal em sua máquina
2. Acesse o diretório onde deseja salvar o projeto
3. Execute o seguinte comando:

```bash
git clone https://github.com/JacksonJeanPS/projeto-buzzfeed.git
```

4. Após finalizado o download, acesse a pasta do projeto:

```bash
cd projeto-buzzfeed
```

5. Instale as dependências e execute:

```bash
npm install
ng serve
```

6. Abra `http://localhost:4200` no seu navegador

## Deploy no GitHub Pages

Para fazer o deploy no GitHub Pages:

```bash
npm run deploy
```

Esse comando faz o build do projeto e faz o push para a branch `gh-pages` automaticamente.

> **Nota**: O GitHub Pages deve estar configurado na página de configurações do repositório, apontando para a branch `gh-pages`.

## Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Cabeçalho com navegação responsiva
│   │   ├── footer/          # Rodapé do site
│   │   ├── post-card/       # Card de conteúdo (post)
│   │   └── quizz/           # Componente de quiz interativo
│   ├── pages/
│   │   └── home/            # Página inicial
│   ├── app.component.*      # Componente raiz
│   └── app-routing.module.ts  # Configuração de rotas
├── assets/
│   ├── imgs/                # Imagens (logo, background)
│   └── data/                # Arquivos JSON (posts, quiz)
├── index.html
└── styles.css               # Estilos globais com variáveis de tema
```

## Melhorias Realizadas Nesta Revisão

### Correções
- ✅ Reativado GitHub Pages: configurado build para `docs/` folder com `--base-href` correto e adicionado script `ng deploy` via `angular-cli-ghpages`
- ✅ Corrigido path da imagem de background em `styles.css` (`../src/assets/...` → `assets/...`)
- ✅ Corrigidos paths de imagens no componente Quizz
- ✅ Adicionado `alt` descritivo em todas as imagens (anteriormente `alt=""`)
- ✅ Corrigida sintaxe Angular: `*ngIf=!finished` → `*ngIf="!finished"`, espaçamento em `(click) =`
- ✅ Corrigido nome da fonte: `"braah one"` → `"Braah One"`
- ✅ Corrigido valor alpha inválido: `rgba(255,255,255,10)` → removido
- ✅ Tipagem TypeScript: substituído `any` por interfaces fortemente tipadas (`QuizzData`, `QuizzQuestion`, `QuizzOption`, `Post`)
- ✅ Corrigido bug no `checkResult`: adicionado valor inicial para o `reduce` e tratamento de array vazio
- ✅ Removida classe CSS não utilizada: `.next_question`

### Novos Recursos
- ✅ Criado componente Header com logo, navegação responsiva (hamburguer menu) e toggle de tema escuro/claro
- ✅ Criado componente Footer com links sociais e estrutura organizada
- ✅ Criado componente Post Card com image/placeholder, badge de categoria e efeitos hover
- ✅ Criado página inicial com hero section, filtro de categorias e grid responsivo de posts
- ✅ Implementado scroll infinito simulado com `IntersectionObserver`
- ✅ Adicionado botão "Carregar mais" como alternativa ao scroll
- ✅ Adicionadas animações de entrada (fade-in/slide-up) nos cards
- ✅ Adicionadas transições suaves em hover/focus para cards, botões e links
- ✅ Adicionada navegação por teclado no menu hamburguer
- ✅ Adicionados `aria-label`, `aria-expanded`, `aria-pressed` para acessibilidade
- ✅ Organizado CSS por seções (reset, variáveis de tema, header, grid, footer, utils)
- ✅ Corrigida descrição do projeto: especifica Angular/TypeScript (não apenas HTML/CSS/JS)

## Demonstração

![Screenshot do projeto](./demo-screenshot.png)

*A captura de tela acima mostra a página inicial do projeto BuzzFeed com o tema escuro ativado, grid de cards de conteúdo e o quiz interativo no final da página.*

## Licença

Este projeto está sob a licença MIT. Você pode ver mais detalhes em [LICENSE.md](LICENSE.md).

---

Desenvolvido por [Jackson Jean PS](https://github.com/JacksonJeanPS)
