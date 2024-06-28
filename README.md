# Match Day API

Microsserviços para aluguel de Quadras Esportivas


## Configurações Iniciais

npm install

npx prisma generate

npm run swagger

npm start dev


Swagger Local URL: http://localhost:3000/docs/#/
## Funcionalidades

- CRUD básico de Quadras Esportivas;
- Filtragem e Paginação de Quadras Esportivas;
- Criação e gerenciamento de Reservas.



## Melhorias

- Implementação de autenticação;
- Integração com sistemas de pagamento;
- Melhorias na cobertura de testes;
- Implementação de Logs.
## Cobertura de Testes

A cobertura de testes inclui testes unitários para toda a camada de Services.


## Documentação da API

#### Listar Usuário por ID


```http
  GET /user/{id}
```

| Parâmetro | Tipo | Descrição
| :-------- | :------ | :-----------------------------------
| id | number| Obrigatório (Path). ID do usuário a ser buscado |

#### Criar Usuário

```http
  POST /user
```

| Parâmetro | Tipo | Descrição
| :-------- | :------- | :-----------------------------------
| name | string | Obrigatório. Nome do usuário
| email | string | Obrigatório. Email do usuário |


#### Lista todas as Quadras Paginadas com Filtro

```http
  GET /sportCourtPaginated
```

| Parâmetro | Tipo | Descrição
| :---------------- | :------- | :------------------------------------
| page | number | Opcional. Página a ser buscada
| limit | number | Opcional. Limite de resultados por página
| name | string | Opcional. Nome da quadra para filtro
| location | string | Opcional. Localização da quadra para filtro
| size | string | Opcional. Tamanho da quadra para filtro
| start_datetime | string | Opcional. Data e hora de início para filtro
| end_datetime | string | Opcional. Data e hora de fim para filtro |


#### Listar Quadra por ID


```http
  GET /sportCourt/{id}
```

| Parâmetro | Tipo | Descrição
| :-------- | :------- | :-----------------------------------
| id | number | Obrigatório (Path). ID da quadra a ser buscada |

#### Criar uma Quadra


```http
  POST /sportCourt
```
| Parâmetro | Tipo | Descrição
| :--------------- | :-------- | :-----------------------------------
| name | string | Obrigatório. Nome da quadra
| reservated | boolean | Obrigatório. Estado de reserva da quadra
| description | string | Opcional. Descrição da quadra
| size | string | Obrigatório. Tamanho da quadra
| location | string | Obrigatório. Localização da quadra
| start_datetime | string | Obrigatório. Data e hora de início
| end_datetime | string | Obrigatório. Data e hora de fim
| price | number | Obrigatório. Preço da quadra |

#### Listar todas as Quadras


```http
  GET /sportCourt
```

#### Criar Reserva


```http
  POST /reservation
```
| Parâmetro | Tipo | Descrição
| :--------------- | :------- | :-----------------------------------
| courtId | number | Obrigatório. ID da quadra a ser reservada
| userId | number | Obrigatório. ID do usuário que está reservando
| start_datetime | string | Obrigatório. Data e hora de início da reserva
| end_datetime | string | Obrigatório. Data e hora de fim da reserva |



#### Listar Reservas por UserID


```http
  GET /reservation/{userId}
```
| Parâmetro | Tipo | Descrição
| :-------- | :------- | :-----------------------------------
| userId | number | Obrigatório (Path). ID do usuário para listar as reservas |



#### Atualizar Status da Reserva


```http
  PATCH /reservation/{id}/status
```
| Parâmetro | Tipo | Descrição
| :-------- | :------- | :-----------------------------------
| id | number | Obrigatório (Path). ID da reserva a ser atualizada
| status | string | Obrigatório. Novo status da reserva |




#### Listar todas as Reservas de Usuários


```http
  GET /user-reservations
```






## Autores

- [@solanokruger](https://github.com/solanokruger)

