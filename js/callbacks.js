function sayThankYou() {
    alert("Thank you!");
}

function bill(price, numProducts, callback) {
    alert(price * numProducts);

    callback();
}

bill(10, 5, ()=>alert('Thanks!'));