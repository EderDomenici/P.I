# Criação da API dos correios para consumo
ela busca os elementos pelo ID, faz o autopreenchimento em caso do cep ser valido
dentro das seguintes condições, possuir estritamente 8 numeros, não possuir letras
é ser um cep valido cadatrado na API dos Correios.

# Para consumo
Para consumo dela como rota no html, é necessario que os campos tenha os seguintes valores de Id
address para logradouro, neighborhood para bairro, city para localidade é estate para uf.
o arquivo irá ser retornado como um arquivo .JSON
