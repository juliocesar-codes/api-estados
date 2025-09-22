/***********************************************************************************************************************************
 * Objetivo: API responsável em criar endPoints referente estados e cidades
 * Data: 15/09/2025
 * Autor: Julio Cesar Santana Alves
 * Versão: 1.0
 * 
 * Observações: Instalar dependencias para criar a API
 *      express - npm install express --save Instala as dependecias para criar uma API
 *      cors    - npm install cors --save Instala as dependecias para configurar as permissões da API
 *      body-parser - npm install body-parser --save Instala as dependecias para receber os tipos de dados via POST ou PUT
************************************************************************************************************************************/

// Import das dependencias
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Import do arquivo de funções
const dados = require('./modulo/funcoes.js')

// Define a porta padrão da API, se for em um servidor de nuvem não temos acesso a porta
    // Em execução local podemos definir uma porta livre
const PORT = process.PORT || 8080

// Instancia na classe do express
const app = express()

// Configurações do CORS
app.use((request, response, next) =>{
    response.header('Access-Control-Allow-Origin', '*') // IP de Origem
    response.header('Access-Control-Allow-Methods','GET') // Métodos (Verbos) do protocolo HTTP

    app.use(cors())
    next() // Próximo
})

// Request -> Recebe os Dados da Requisição
// Response -> Envia os Dados na API

// EndPoints
app.get('/v1/estados', function(request, response){
    let estados = dados.getAllEstados()
    
    response.status(estados.statuscode)
    response.json(estados)
})


app.get('/v1/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let estadosBySigla = dados.getEstadoBySigla(sigla)

    response.status(estadosBySigla.statuscode)
    response.json(estadosBySigla)
})

app.get('/v1/capital/:uf', function(request,response){
    let sigla = request.params.uf
    let capitalBySigla = dados.getCapitalBySigla(sigla)

    response.status(capitalBySigla.statuscode)
    response.json(capitalBySigla)
})

app.get('/v1/regiao/estado/:regiao', function(request, response){
    let regiao = request.params.regiao
    let estadoByRegiao = dados.getEstadoByRegiao(regiao)

    response.status(estadoByRegiao.statuscode)
    response.json(estadoByRegiao)
})

app.get('/v1/capitais/:pais', function(request, response){
    let pais = request.params.pais
    let EstadoIsCapitalByCountry = dados.getEstadoIsCapitalByCountry(pais)

    response.status(EstadoIsCapitalByCountry.statuscode)
    response.json(EstadoIsCapitalByCountry)
})

app.get('/v1/cidades/:uf', function(request, response){
    let sigla = request.params.uf
    let cidadesBySigla = dados.getCidadesBySigla(sigla)

    response.status(cidadesBySigla.statuscode)
    response.json(cidadesBySigla)
})

app.get('/v1/regiao/estado/:id', function(request, response){
    let regiaoEstado = request.query.regiao
    let sigla = request.query.uf
    let id = request.params.id

    console.log(regiaoEstado)
    console.log(sigla)
    console.log(id)
})

// Start da API
app.listen(PORT, function(){
    console.log('API aguardando requisições...')
})