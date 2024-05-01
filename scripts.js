

const list = document.querySelector('ul')
const cliquei = document.querySelector('.press')
const buttonMap = document.querySelector('.press-map')
const somaValue = document.querySelector('.soma-valor')


function aoClicar(productsArray) {

    let myLi = ''

    productsArray.forEach((product) => {

        myLi += `


         <li>

            <img src=${product.src}>
            <p> ${product.name}</p>
            <p class="item-price"> R$ ${product.price} </p>

        </li>
         `
    })

    list.innerHTML = myLi

}

function aoMapear() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    aoClicar(newPrices)

}
function somaTudo() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
         <li>
            <p> O valor total dos itens é : R$ ${totalValue} </p>
        </li>
         `
}


buttonMap.addEventListener('click', aoMapear)
cliquei.addEventListener('click', () => aoClicar(menuOptions))
somaValue.addEventListener('click', somaTudo)