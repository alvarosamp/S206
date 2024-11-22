# Testes de API com Postman - Agify.io

Este repositório contém os testes desenvolvidos para a API pública [Agify.io](https://agify.io), realizados com a ferramenta Postman. A API prevê a idade de pessoas com base em seus nomes.

---

## **Descrição do Exercício**

- Desenvolver 6 cenários de teste utilizando a API Agify.io.
- Pelo menos **4 casos positivos** e **2 casos negativos**.
- Exportar o ambiente de trabalho do Postman e incluir no repositório.
- Criar um **README** detalhado com orientações para execução dos testes.
- Responder às perguntas sobre os testes no **Exercício 2**.

---

## **Cenários de Teste**

### **Casos Positivos**
1. **Consulta válida com nome único**
   - Descrição: Enviar uma requisição para prever a idade para o nome "Lucas".
   - Endpoint: `https://api.agify.io?name=Lucas`
   - Resultado esperado:
     ```json
     { "name": "Lucas", "age": 25, "count": 1000 }
     ```

2. **Consulta com múltiplos nomes**
   - Descrição: Testar a previsão para os nomes "Ana" e "Carlos".
   - Endpoint: `https://api.agify.io?name[]=Ana&name[]=Carlos`
   - Resultado esperado:
     ```json
     [
       { "name": "Ana", "age": 29, "count": 5000 },
       { "name": "Carlos", "age": 34, "count": 3000 }
     ]
     ```

3. **Consulta com país específico**
   - Descrição: Obter a idade prevista para "Maria" no Brasil.
   - Endpoint: `https://api.agify.io?name=Maria&country_id=BR`
   - Resultado esperado:
     ```json
     { "name": "Maria", "age": 30, "count": 12000, "country_id": "BR" }
     ```

4. **Previsão de idade com nomes em diferentes idiomas**
   - Descrição: Testar nomes de diferentes idiomas e culturas, como "Juan" (espanhol), "Giovanni" (italiano) e "Hiroshi" (japonês).
   - Endpoint: `https://api.agify.io?name[]=Juan&name[]=Giovanni&name[]=Hiroshi`
   - Resultado esperado:
     ```json
     [
       { "name": "Juan", "age": 32, "count": 15000 },
       { "name": "Giovanni", "age": 40, "count": 12000 },
       { "name": "Hiroshi", "age": 50, "count": 8000 }
     ]
     ```

---

### **Casos Negativos**
5. **Consulta sem o parâmetro obrigatório `name`**
   - Descrição: Enviar uma requisição sem incluir o parâmetro `name`.
   - Endpoint: `https://api.agify.io`
   - Resultado esperado:
     ```json
     { "error": "name parameter is required" }
     ```
   - Código de status esperado: `400` ou `422`.

6. **Consulta com nome inválido**
   - Descrição: Enviar um nome contendo caracteres inválidos (ex.: "!@#$%^").
   - Endpoint: `https://api.agify.io?name=!@#$%^`
   - Resultado esperado: Resposta vazia `{}` ou erro.
   - Código de status esperado: `200` (com resposta vazia) ou `400`.

---

## **Respostas do Exercício 2**

### **1. Os testes desenvolvidos são manuais ou automatizados?**
- **Resposta:** Os testes desenvolvidos são manuais.  

---

### **2. Alguns dos testes desenvolvidos são testes Fim-a-Fim (End-To-End)?**
- **Resposta:** Não, os testes desenvolvidos não são End-To-End.  

---

### **3. O que se deve fazer para que os testes desenvolvidos funcionem em modo regressão?**
- **Resposta:** Para que os testes funcionem como **testes de regressão**, é necessário automatizá-los e integrá-los em um pipeline.

Essas mudanças garantem que os testes sejam reutilizáveis e verificam continuamente a integridade da API após modificações.

---

## **Instruções para Executar os Testes**

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/seu-usuario/testes-agify-api.git
   cd testes-agify-api
