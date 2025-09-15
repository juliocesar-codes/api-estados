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

// Define a porta padrão da API, se for em um servidor de nuvem não temos acesso a porta
    // Em execução local podemos definir uma porta livre
const PORT = process.PORT || 8080

// Instancia na classe do express
const app = express()

app.use((request, response, next) =>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods','GET')

    app.use(cors())
    next()
})

app.get('/v1/estados', function(request, response){
})