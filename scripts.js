

const list = document.querySelector('ul')
const cliquei = document.querySelector('.press')
const buttonMap = document.querySelector('.press-map')



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



cliquei.addEventListener('click', () => aoClicar(menuOptions))

buttonMap.addEventListener('click', aoMapear) 