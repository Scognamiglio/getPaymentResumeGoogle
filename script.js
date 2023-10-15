var memory = {}
var already = [];

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

  // Fonction de défilement
function scrollPage() {
    window.scrollBy(0, window.innerHeight);
}

function scrollPower(scrollTimes, scrollDelay) {


  // Défilement plusieurs fois
  let repeatCount = 0;
  function repeatScroll() {
    if (repeatCount < scrollTimes) {
      scrollPage();
      setTimeout(repeatScroll, scrollDelay);
      repeatCount++;
    }else{
        var element = document.getElementsByClassName('RveJvd')[0];
        if (element) {
          element.click();
        }
        getPayment()
    }
  }

  // Commence le défilement
  repeatScroll();
}


function getResume(){
    var html = "";
    var total = 0;
    Object.keys(memory).forEach(function(key) {
        var value = Math.round(memory[key]);
        html += `<img src='${key}'/> ${value} <br/>`;
        total += value;
    });
    html = `Un total de ${total} dépensées, plus de détail :<br/><br/>`+html;
    // Convertir le HTML en base64
    console.log(html)
}
