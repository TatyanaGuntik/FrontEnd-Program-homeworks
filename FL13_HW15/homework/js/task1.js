const creditCard = {creditLimit: '50$', cash: '200$'};

const paymentCard = {cash: '100$'};

function assign(obj, first, second) {
    let copy = first;

    for (let key in second) {

        for (let item in copy) {
            if (item === key) {
                copy[item] = second[key];
            } else {
                copy[key] = second[key];
            }
        }
    }
    return copy;
}

const universalCard = assign({}, creditCard, paymentCard);

console.log(universalCard);
