const add = (first, second) => {
    return first + second;
}

const multiply = (first, second) => {
    return first * second;
}

const getTotal = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

export { add, multiply, getTotal as gt };