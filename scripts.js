//inserting products on the page
products.map((product, index) => {
    const divProducts = document.querySelector('.products')
    let html = 
    `
    <div class="product" data-product="${index + 1}">
        <div class="product--img">
            <img src="${product.image}" alt="${product.image}">
        </div>
        <p class="product--description">${product.description}</p>
        <p class="product--old-price">De: R$ ${product.priceOld.toString().replace('.', ',')}</p>
        <p class="product--new-price">Por: R$ ${(product.priceNew).toString().replace('.', ',')}</p>
    </div>
    `
    divProducts.innerHTML += html
})


//mode theme dark/light
document.querySelector('.mode-theme').addEventListener('click', (event) => {
    const body = document.querySelector('body')
    const bodyTeme = body.classList.toggle('light')
    if(bodyTeme) {
        event.target.setAttribute('src','img/sun.svg')
    } else {
        event.target.setAttribute('src', 'img/moon.svg')
    }

    document.querySelector('header h2').classList.toggle('light')
    document.querySelector('main .announcement').classList.toggle('light')
    document.querySelector('main .products').classList.toggle('light')
    document.querySelectorAll('main form input').forEach(input => input.classList.toggle('light'))
    document.querySelectorAll('main .testimonial--card .testimonial--published').forEach(bgTestimonial => bgTestimonial.classList.toggle('light'))

    const soon = document.querySelector('footer .footer--discount img')
    const soonAttribute = soon.getAttribute('src')
    if(soonAttribute == 'img/logo-farmMelhor.png') {
        soon.setAttribute('src', 'img/logo-farMelhor-White.png')
    } else {
        soon.setAttribute('src', 'img/logo-farmMelhor.png')
    }
})