function getQuote() {
    return fetch('https://api.adviceslip.com/advice', {
   method: 'GET'
  }).then(response => {
   if (response.ok) {
     return response.json();
   }
   throw new Error('Erro ao obter a citação do dia.');
 }).then(data => {
  return data.slip.advice
 }).catch(error => {
   console.error(error);
 });
 
 }
 
 function showAdvice() {
 getQuote().then(quote => { //esse callback vai pegar o resultado da promisse da getQuote() e inserir no html
   console.log(quote)
 document.getElementById("notes").textContent = quote;
 });
}
 
 let botaoApi =  document.getElementById("quotes")

botaoApi.addEventListener("click", function(){
  showAdvice()
})
