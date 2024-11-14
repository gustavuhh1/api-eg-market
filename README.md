# EG Market

**Um sistema de mercado simples e funcional para fins acadêmicos.**

### Tecnologias

- **Backend**: Node.js, Fastify, Zod, Prisma, TypeScript
- **Frontend**: HTML, CSS, JavaScript

---

## Funcionalidades

### Requisitos Funcionais

- **Página Inicial**: Exibe uma lista de produtos com nome, imagem e preço.
- **Catálogo de Produtos**: Mostra todos os produtos com informações essenciais.
- **Carrinho de Compras**:
  - Adição e remoção de produtos.
  - Visualização do total atualizado da compra.
- **Finalização de Compra**:
  - Solicitação de nome e endereço do cliente.
  - Confirmação da compra e exibição de mensagem de sucesso.
- **Pesquisa de Produtos**: Campo de busca para localizar produtos por nome.

### Requisitos Não Funcionais

- **Usabilidade**: Interface simples e intuitiva para facilitar a navegação.
- **Performance**:
  - Otimização para carregamento rápido das páginas.
  - Respostas ágeis ao adicionar ou remover itens do carrinho.
- **Compatibilidade**: Suporte para navegadores comuns e dispositivos móveis.
- **Segurança**: Armazenamento seguro das informações de endereço.

### Regras de Negócio

- **Limite de Estoque**: Produtos só podem ser adicionados ao carrinho se houver estoque disponível.
- **Limite de Quantidade**: Máximo de 10 unidades por produto no carrinho.
- **Preço Fixo**: O preço dos produtos não varia com a quantidade.
- **Informações de Compra**: Somente nome e endereço são necessários para finalizar a compra.

---

## Checklist de Desenvolvimento

### Funcionalidades para Implementação

- [ ] **Página Inicial**: Exibir lista de produtos disponíveis com nome, imagem e preço.
- [ ] **Catálogo de Produtos**: Mostrar todos os produtos com informações básicas.
- [ ] **Carrinho de Compras**:
  - [ ] Permitir adicionar produtos ao carrinho.
  - [ ] Permitir remover produtos do carrinho.
  - [ ] Exibir o total da compra atualizado.
- [ ] **Finalização de Compra**:
  - [ ] Solicitar nome do cliente.
  - [ ] Solicitar endereço do cliente.
  - [ ] Confirmar compra e gerar mensagem de sucesso.
- [ ] **Pesquisa de Produtos**:
  - [ ] Implementar campo de busca para localizar produtos pelo nome.

### Requisitos Não Funcionais

- [ ] **Usabilidade**: Interface intuitiva para navegação simples.
- [ ] **Performance**:
  - [ ] Otimizar carregamento das páginas.
  - [ ] Assegurar respostas rápidas ao adicionar/remover itens do carrinho.
- [ ] **Compatibilidade**: Verificar funcionalidade em navegadores comuns e dispositivos móveis.
- [ ] **Segurança**:
  - [ ] Implementar armazenamento seguro para informações de endereço.

### Regras de Negócio

- [ ] **Limite de Estoque**:
  - [ ] Permitir adicionar produto ao carrinho somente se houver estoque disponível.
- [ ] **Limite de Quantidade**:
  - [ ] Limitar quantidade de cada produto no carrinho a no máximo 10 unidades.
- [ ] **Preço Fixo**:
  - [ ] Definir preço fixo para cada produto, sem variação por quantidade.
- [ ] **Informações de Compra**:
  - [ ] Solicitar apenas nome e endereço do cliente para finalizar a compra.

---

Este projeto foi desenvolvido como parte de um trabalho acadêmico para explorar conceitos de desenvolvimento de sistemas com Node.js e outras tecnologias modernas. 
