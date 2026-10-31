export async function carregarInfracoes() {

 const response =
   await fetch(
     './database/indices/index.json'
   );

 const indice =
   await response.json();

 const resultado = [];

 for(const arquivo of indice.infracoes){

    const json =
      await fetch(
       `./database/infracoes/${arquivo}`
      );

    resultado.push(
      await json.json()
    );
 }

 return resultado;
}
