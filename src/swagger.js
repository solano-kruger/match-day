const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
    info: {
        version: "1.0.0",
        title: "Match Day",
        description: "Microsserviços para aluguel de Quadras Esportivas"
    },
    servers: [
        {
            url: 'http://localhost:3000/api'
        }
    ]
};

const outputFile = './swagger-output.json'; // Certifique-se de que o caminho está correto
const endpointsFiles = [
    './src/interface/routes/UserRoutes.ts',
     './src/interface/routes/SportCourtRoutes.ts',
      './src/interface/routes/ReservationRoutes.ts',
        './src/interface/routes/UserReservationRoutes.ts']; // Verifique o caminho aqui

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log('Arquivo swagger-output.json gerado com sucesso');
    // Verifique se o arquivo foi gerado corretamente
    const fs = require('fs');
    fs.readFile(outputFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo swagger-output.json:', err);
            return;
        }
        console.log('Conteúdo do arquivo swagger-output.json:', data);
        require('./app'); // Verifique o caminho aqui
    });
}).catch(err => {
    console.error('Erro ao gerar o Swagger:', err);
});
