async function fetchProdutos(url) { /*Foi definido uma função asincrona com isso, poderá ser definido partes da função ao qual deverão esperar para prosseguir com a proxima parte descartando o uso do then()*/
    const response = await fetch(url);  /*utilizando desta forma o await, a função irá esperar com que o fetch seja resolvido e em seguida, a resolução do mesmo seja colocado dentro da constante ^response^*/
    const json = await response.json(); /* mesma logica utilizada acima */
    return json; /* retornado o valor do json */
}


fetchProdutos("https://ranekapi.origamid.dev/wp-json/api/produto");