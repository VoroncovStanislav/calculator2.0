let price = document.getElementById("price");
let dohod = document.getElementById("dohod");
let rashod = document.getElementById("rashod");
let okupaemost_p = document.querySelector(".okupaemost");
let kapitalizacia_p = document.querySelector(".kapitalizacia");

function rashet() {
    let ok = price.value / ((dohod.value * 12) - (rashod.value * 12));
    let okupaemost = Math.floor(ok * 100) / 100
    // let procent = 100;
    let kapitalizacia = (((dohod.value * 12) - (rashod.value * 12)) * 100) / price.value;
    okupaemost_p.innerHTML = `<p class="okupaemost_itog">Срок окупаемости: ${okupaemost} год</p>`
    kapitalizacia_p.innerHTML = `<p class="kapitalizacia_itog">Ставка капитализации: ${kapitalizacia} % в год</p>`
    // console.log(Math.floor(okupaemost * 100) / 100);
    // console.log(kapitalizacia);
}

function reset() {
    price.value = 0;
    dohod.value = 0;
    rashod.value = 0;
}