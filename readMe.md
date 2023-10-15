# getPaymentResumeGoogle
Script améliorable créer pour avoir une idée global des paiments fait sur google au fil des années.

## Où ?
Aller sur https://play.google.com/store/account/orderhistory

## Comment l'utiliser ?

- Ouvrir la console de commande(F12 en général, mais ça dépend du navigateur)
- coller le code JavaScript dans la console.
- Lancer la commande scrollPower(5,500), et relancer dès que la page arrête de bouger
- - Quand la  commande n'a plus d'impact, où quand elle commence à bugger avec des données récente, vous avez stocker toutes les données, passé à la prochaine étape
- lancer la commande getResume() pour avoir dans la console un code HTML à coller où vous voulez pour voir le rapport détaillé.

## Problème possible
Il est possible que dans la méthode getPayment
```js
function getPayment(){
    let array = document.getElementsByClassName('mshXob');
    for (let i = 0; i < array.length ; i++)  {
        let parent = array[i].parentNode.parentNode.parentNode;
        let src = parent.querySelector('img').getAttribute('src');
        let price = array[i].innerHTML.split('&')[0];
        if(price == '0,00'){
            continue;
        }
        price = price.replace(',','.')
        let orderId = parent.querySelector('.J0MfDf').getAttribute('data-order-id');
        if(!already.includes(orderId)){
            already.push(orderId);
            memory[src] = parseFloat(parseFloat(memory[src] ?? 0.00) + parseFloat(price));
        }
    }
}
```
**mshXob** et **J0MfDf** soit différent pour vous et font donc cassé le script, si c'est le cas
**mshXob** est la classe qu'on trouvé sur la div qui contient directement le prix de la transaction
**J0MfDf** est la classe qu'on trouve sur le bouton qui permet de demander un remboursement pour une transaction

Faite directement les remplacements dans la fonction
