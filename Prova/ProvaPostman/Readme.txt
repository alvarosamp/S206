# Criando o README para o teste JSON
json_readme_content = """
# Testes de API - JSONPlaceholder

Este repositório contém os testes desenvolvidos utilizando a API pública **JSONPlaceholder**. O objetivo foi realizar diferentes cenários de testes em uma API REST, incluindo casos positivos e negativos, utilizando ferramentas como Postman e Newman.

---

## 📄 Cenários de Teste

1. **Listar Recursos (GET)**:
   - **Endpoint**: `/posts`
   - **Descrição**: Obtém uma lista de posts do sistema.
   - **Resultado Esperado**: Código HTTP `200 OK` com uma lista de posts em JSON.

2. **Criar Recurso com Dados Inválidos (POST - Negativo)**:
   - **Endpoint**: `/posts`
   - **Descrição**: Tenta criar um post com dados inválidos.
   - **Resultado Esperado**: Código HTTP `400 Bad Request` ou comportamento alternativo da API.

3. **Buscar Recurso com ID Inválido (GET - Negativo)**:
   - **Endpoint**: `/posts/invalid-id`
   - **Descrição**: Busca um post inexistente pelo ID.
   - **Resultado Esperado**: Código HTTP `404 Not Found`.

4. **Remover Recurso Existente (DELETE)**:
   - **Endpoint**: `/posts/1`
   - **Descrição**: Remove um post existente pelo ID.
   - **Resultado Esperado**: Código HTTP `200 OK` ou `204 No Content`.

5. **Atualizar Recurso com ID Inexistente (PUT - Negativo)**:
   - **Endpoint**: `/posts/9999`
   - **Descrição**: Tenta atualizar um post com ID inexistente.
   - **Resultado Esperado**: Código HTTP `404 Not Found`.

---

## 🚀 Como Executar os Testes

### Requisitos
1. Instalar o [Postman](https://www.postman.com/downloads/).
2. Instalar o [Node.js](https://nodejs.org/) para utilizar o Newman.

### Passos
1. Importe o arquivo `collection.json` no Postman.
2. Para executar os testes via Newman:
   ```bash
   newman run collection.json -r html
