Este projeto utiliza o Cypress para realizar testes em um site de e-commerce. 
Casos de Teste

-Criação e Login
Verifica se o usuário consegue criar uma conta e fazer login com sucesso.

-Envio de Email
Testa o envio de uma mensagem pelo formulário de contato do site.

-Adicionando Produtos no Carrinho
Verifica se os produtos são adicionados ao carrinho corretamente.

-Caso de Compra Correto (Dados Todos Preenchidos)
Simula um processo de compra com todos os dados preenchidos, verificando a confirmação da compra.

-Caso de Compra Errado (Campos Faltantes)
Testa a finalização da compra com campos faltantes para validar a exibição de mensagens de erro.

-Deletando Item do Carrinho
Verifica se o usuário consegue remover produtos do carrinho com sucesso.

-> Para testar atraves do cypress
1) Salvar alterar os arquivos comands e e2e e adicionar o arquivo Lista1 em sua pasta e2c dentro do cypress
2) dentro do git bash 'npx cypress open'
3) selecionar o projeto correto e iniciar os testes

->Para obter o resultado
1) Com o projeto salvo dentro da pasta e2e, vamos aplicar o comando './node_modules/.bin/cypress run --spec 'cypress/e2e/**/*' e aguardar ele  carregar
2) Depois de pronto, dentro da pasta reports, vai estar em htlm os reports de seu teste
