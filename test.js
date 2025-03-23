import fetch from 'node-fetch';

async function buscarDadosDaAPI() {
  try {
    const response = await fetch('https://glitch.com/~cumbersome-moored-giraffatitan');
    const data = await response.json();
    console.log(' Dados recebidos da API:', data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}

buscarDadosDaAPI();