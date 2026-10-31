export function pesquisar(
 dados,
 termo
){

 termo = termo.toLowerCase();

 return dados.filter(item=>{

  return (

   item.identificacao.codigo
   ?.toLowerCase()
   ?.includes(termo)

   ||

   item.identificacao.artigo
   ?.toLowerCase()
   ?.includes(termo)

   ||

   item.infracao.titulo
   ?.toLowerCase()
   ?.includes(termo)

   ||

   item.palavrasChave
   ?.some(
     p =>
     p.toLowerCase()
     .includes(termo)
   )

  );

 });

}
