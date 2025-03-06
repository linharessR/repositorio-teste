
/*para fazer a execusao do mesmo usei o terminal /node index.js*/

const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);

console.log("Percentual de representação de cada estado:");
Object.entries(faturamento).forEach(([estado, valor]) => {
    const percentual = (valor / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
});